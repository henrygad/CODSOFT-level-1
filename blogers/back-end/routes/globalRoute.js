const router = require('express').Router()
const usersData = require('../schema/usersDataSchema')
const blogpostsData = require('../schema/blogpostsSchema')
const commentsData = require('../schema/commentsSchema')
const { customError } = require('../middlewares/error')

router.get('/allblogposts', async (req, res, next) => {

    try {

        // get all blogposts
        const getAllBlogposts = await blogpostsData.find()

        res.json(getAllBlogposts)

    } catch (error) {

        next(new customError(error, 404))
    }
})

router.get('/allcomments', async (req, res, next) => {

    try {

        // get all comments
        const getAllComments = await commentsData.find()

        res.json(getAllComments)

    } catch (error) {

        next(new customError(error, 404))
    }
})

router.get('/allusers', async (req, res, next) => {

    try {

        // get all users
        const getAllUsers = await usersData.find()

        // send out only unsensetive data of users
        res.json(getAllUsers.map(user => {
            return {
                userName: user.userName,
                name: user.name,
                image: user.image,
                bio: user.bio,
                sex: user.sex
            }
        }))

    } catch (error) {

        next(new customError(error, 404))
    }
})

router.get('/searchblogposts', async (req, res, next) => {
    const { query: { title, contentBody, catigory, tag }, session } = req

    // search conditions logic array varible
    const conditions = []

    if (title) conditions.push({ 'title': { $regex: title, $options: 'i' } }) // title search logic

    if (contentBody) conditions.push({ 'contentBody': { $regex: contentBody, $options: 'i' } }) // body search logic

    if (catigory) conditions.push({ 'catigories': { $regex: catigory, $options: 'i' } }) // catigories search logic

    if (tag) conditions.push({ 'tags': { $regex: '#' + tag, $options: 'i' } }) // tags search logic

    try {

        if (!conditions.length) throw new Error('not found: epmty field')

        // search through all blogpost return search result
        const searchedBlogposts = await blogpostsData.find({ $or: conditions })
        if (!searchedBlogposts.length) throw new Error('not found: no blogpost found')

        // attach every sucessfull search query to the search session history
        session.searchHistory.push({ title, contentBody, catigory, tag })

        res.json(searchedBlogposts)

    } catch (error) {

        next(new customError(error, 404))
    }
})

router.get('/searchusers', async (req, res, next) => {
    const { query: { userName, name }, session } = req

    // search conditions logic array varible
    const conditions = []

    if (userName) conditions.push({ 'userName': { $regex: userName, $options: 'i' } }) // userName search logic

    if (name) conditions.push({ 'name': { $regex: name, $options: 'i' } }) // name search logic

    try {

        if (!conditions.length) throw new Error('not found: epmty field')

        // search through all users and return search result
        const searchedUsers = await usersData.find({ $or: conditions })
        if (!searchedUsers.length) throw new Error('not found: no user found')

        // attach every sucessfull search query to the search session history
        session.searchHistory.push({ userName, name })

        // send out only unsensetive data of users
        res.json(searchedUsers.map(user => {
            return {
                userName: user.userName,
                name: user.name,
                image: user.image
            }
        }))

    } catch (error) {

        next(new customError(error, 404))
    }
})

module.exports = router
