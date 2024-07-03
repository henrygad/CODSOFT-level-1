const router = require('express').Router()
const authenticatedUsers = require('../schema/authenticatedUsersSchema')
const usersData = require('../schema/usersDataSchema')
const hashPassword = require('../utils/hashPassword')
const validator = require('validator')
const jwt = require('jsonwebtoken')
const bcypt = require('bcryptjs')
const { customError } = require('../middlewares/error')
require('dotenv').config()

const SECRETE = process.env.SECRETE

router.post('/signup', async (req, res, next) => {
    const { body: { userName, email, password } } = req

    try {

        // if fields are empty, reject request
        if (!userName ||
            !email ||
            !password
        ) throw new Error('Bad Request: empty field!')

        // validate username, email, password for malicious attack
        if (!validator.isLength(userName, { min: 5 })) throw new Error('Bad Request: short userName!')
        if (!validator.isEmail(email)) throw new Error('Bad Request: invalid email!')
        if (!validator.isStrongPassword(password)) throw new Error('Bad Request: password not strong enough!')

        // Sanitize username (i.e, replace code syntax to html entities)
        const validatedUserName = validator.escape(userName)

        // check if user already exist by username
        const existedUserByUserName = await authenticatedUsers.findOne({ userName: '@' + validatedUserName })
        if (existedUserByUserName) throw new Error('Bad Request: this user name is not avaliable!')

        // or check if user already exist by email
        const existedUserByEmail = await authenticatedUsers.findOne({ email })
        if (existedUserByEmail) throw new Error('Bad Request: this email has been used!')

        // hash password 
        const hashedPassword = hashPassword(password)

        const newUserData = {
            userName: '@' + validatedUserName,
            email,
            password: hashedPassword
        }

        // create this user
        const createUser = await authenticatedUsers.create(newUserData)
        if (!createUser) throw new Error('Bad Request: this user was not created!')

        // create a new user space for the user
        await usersData.create({ userName: createUser.userName, email: createUser.email, timeline: [createUser.userName] })

        // generate authentication token and assign it to user
        const token = jwt.sign({ _id: createUser._id }, SECRETE, { expiresIn: '1h' })
        req.session.jwtToken = token

        // send the userName
        res.json({ userName: createUser.userName })

    } catch (error) {
        next(new customError(error, 400))
    }
})

router.post('/login', async (req, res, next) => {
    const { body: { value, password } } = req
    let existedUser = null

    try {

        // fields are empty
        if (!value ||
            !password
        ) throw new Error('Bad Request: empty field!')

        // check if user already exist by username 
        existedUser = await authenticatedUsers.findOne({ userName: "@" + value })

        // if user does'nt already exist by userName, check if user exist by email
        if (!existedUser) existedUser = await authenticatedUsers.findOne({ email: value })

        // if user does'nt exist either by userName or email
        if (!existedUser) throw new Error('Bad Request: invalid credentials!')

        // compare raw password with hashed password
        const validPassword = bcypt.compareSync(password, existedUser.password)

        // if password is not valid
        if (!validPassword) throw new Error('Bad Request: invalid credentials!')

        // generate authentication token and assign it to user
        const token = jwt.sign({ _id: existedUser._id }, SECRETE, { expiresIn: '1h' });
        req.session.jwtToken = token

        // send the userName
        res.json({ userName: existedUser.userName })

    } catch (error) {

        next(new customError(error, 400))
    }
})

router.post('/logout', (req, res) => {

    // terminate the jwt token 
    req.session.jwtToken = null

    res.send({ message: 'sucessfully logout ' })
})

router.post('/forgetpassword', async (req, res, next) => {
    const { body: { value } } = req
    let existedUser = null

    try {

        // if fields are empty
        if (!value) throw new Error('Bad Request: empty field!')

        // check if user already exist by username 
        existedUser = await authenticatedUsers.findOne({ userName: "@" + value })

        // if user does'nt already exist by userName, check if user exist by email
        if (!existedUser) existedUser = await authenticatedUsers.findOne({ email: value })

        // if user does'nt exist either by userName or email
        if (!existedUser) throw new Error(`Bad Request: no user with this ${value}!`)

        // send a part to change password
        res.json({ email: existedUser.email, url: `api/changeforgetpassword/:${tokenFor30min}` })

    } catch (error) {

        next(new customError(error, 400))
    }
})

router.patch('/changeforgetpassword/:jwtTokenFor30min', async (req, res, next) => {
    const { params: { jwtTonkenFor30min } } = req

    try {

        // if fields are empty
        if (!jwtTonkenFor30min) throw new Error('Bad Request: empty field!')

        // validate jwtTonkenFor30min

        // check if user exist by email
        const existedUser = await authenticatedUsers.findOne({ email: value })
        if (!existedUser) throw new Error('Bad Request: invalid credentials!')

        // allowed this user to change password
        res.json({ userName: existedUser.userName, email: existedUser.email })

    } catch (error) {

        next(new customError(error, 400))
    }
})

module.exports = router