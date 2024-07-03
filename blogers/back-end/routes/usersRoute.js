const router = require('express').Router()
const authorization = require('../middlewares/authorization')
const authenticatedUser = require('../schema/authenticatedUsersSchema')
const usersData = require('../schema/usersDataSchema')
const bcypt = require('bcryptjs')
const hashPassword = require('../utils/hashPassword')
const { customError } = require('../middlewares/error')


router.get('/user', authorization, async (req, res, next) => {
    const { authorizeUser } = req

    try {

        // get the login user data
        const getUser = await usersData.findOne({ userName: authorizeUser })

        res.json(getUser)

    } catch (error) {

        next(new customError(error, 404))
    }
})

router.patch('/editprofile', authorization, async (req, res, next) => {
    const { authorizeUser, body } = req

    try {

        if (!body) throw new Error('bad request: empty fields')

        // reject request if user try to updated it userName, followrs, and notifications
        if (body.userName ||
            body.followers ||
            body.notifications 
        ) throw new Error('bad request: you are not allowed do these')


        //sanitized body

        // update the user data
        const updateUserData = await usersData.findOneAndUpdate({ userName: authorizeUser }, { ...body })
        if (!updateUserData) throw new Error('bad request: user data was not updated')

        // grap the updated user data
        const getUpdatedUserData = await usersData.findOne({ userName: updateUserData.userName })

        res.json(getUpdatedUserData)

    } catch (error) {

        next(new customError(error, 400))
    }

})

router.delete('/deletenotification/:_id', authorization, async (req, res, next) => {
    const {params: {_id}, authorizeUser } = req

    try {

        if (!_id) throw new Error('bad request: empty field')

        //  delete notification
        const deleteNotification = await usersData.findOneAndUpdate({ userName: authorizeUser}, { notifications: getUser.notifications.filter((notification) => notification._id !== _id) })
        if (!deleteNotification) throw new Error('bad request: notificaton not deleted')

        // get updated notifications
        const getUpdatedNotifications = usersData.findOne({ userName: authorizeUser}).notifications

        res.json(getUpdatedNotifications)

    } catch (error) {

       next(new  customError(error, 400))
    }

})

router.patch('/changepassword', authorization, async (req, res, next) => {
    const { body: { formalPassword, newPassword }, authorizeUser } = req

    try {

        if (
            !formalPassword ||
            !newPassword
        ) throw new Error('bad request: empty fields')

        // get the user formal password
        const getAuthenticatedUserPassword = await authenticatedUser.findOne({ userName: authorizeUser }).password

        // check if password is authenticated
        const checkOldPassword = bcypt.compareSync(formalPassword, getAuthenticatedUserPassword)
        if (!checkOldPassword) throw new Error('bad request: invalid credentials')

        // hash new password
        const hashedPassword = hashPassword(newPassword)

        // updated password
        const updateAuthenticatedUser = await authenticatedUser.findOneAndUpdate({ userName: authorizeUser }, { password: hashedPassword })
        if (!updateAuthenticatedUser) throw new Error('bad request: password was not changed')

        res.json({ password: 'password sucessfully change to' })

    } catch (error) {

        next(new customError(error, 400))
    }
})

router.patch('/changeemail', authorization, async (req, res, next) => {
    const { body: { newEmail }, authorizeUser } = req

    try {

        if (!newEmail) new Error('bad request: empty fields')

        // validate new email

        // updated email
        const updateAuthenticatedUser = await authenticatedUser.findOneAndUpdate({ userName: authorizeUser }, { email: newEmail })
        if (!updateAuthenticatedUser) new Error('bad request: email was not updated')

        // grap the updated user data
        const getUpdatedAuthenticatedUser = await authenticatedUser.findOne({ userName: authorizeUser })

        res.json({ email: getUpdatedAuthenticatedUser.email })

    } catch (error) {

        next(new customError(error, 400))
    }
})

router.delete('/deleteprofile', authorization, async (req, res, next) => {
    const { authorizeUser } = req

    try {

        // logout user
        req.session.jwtToken = null 

        // delete user authenticated data
        const deleteAuthenticatedUser = await authenticatedUser.findOneAndDelete({ userName: authorizeUser })
        if(!deleteAuthenticatedUser) throw new Error('bad request: user authenticated data was not deleted ')

        // delete user data            
        const deleteUserData = await usersData.findOneAndDelete({ userName: authorizeUser })
        if(!deleteUserData) throw new Error('bad request: user data was not deleted ')

        res.json({ deleted: 'we are sad to see you go'})

    } catch (error) {

        next(new customError(error, 400))
    }
})

module.exports = router