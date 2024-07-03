const authorization = require("../middlewares/authorization")
const { customError } = require("../middlewares/error")
const router = require("express").Router()
const blogpostsData = require('../schema/blogpostsSchema')
const mongoose = require('mongoose')


router.get('/alluserblogposts', authorization, async (req, res, next) => {
    const { authorizeUser } = req

    try {

        // get all user blogposts
        const getAllUserBlogposts = await blogpostsData.find({ authorUserName: authorizeUser })
        if (!getAllUserBlogposts.length) throw new Error('Not Found: no blogposts found')

        res.json(getAllUserBlogposts)

    } catch (error) {

        next(new customError(error, 404))
    }
})

router.get('/singleuserblogpost/:_id', authorization, async (req, res, next) => {
    const { params: { _id } } = req

    try {

        // verify blogpost id
        if (!mongoose.Types.ObjectId.isValid(_id)) throw new Error('Not Found: invalid blogpost id')

        // get user a single blogpost
        const getSingleUserBlogpost = await blogpostsData.findById({ _id })
        if (!getSingleUserBlogpost) throw new Error('Not Found: no blogpost found')

        res.json(getSingleUserBlogpost)

    } catch (error) {

        next(new customError(error, 404))
    }
})

router.post('/createblogpost', authorization, async (req, res, next) => {
    const { authorizeUser, body } = req

    try {

        if (!body.slug ||
            !body.url
        ) throw new Error('Bad Request: empty field!')

        // validate body

        //check for duplication
        const getAllBlogpost = await blogpostsData.findOne({ slug: body.slug })
        if (getAllBlogpost) throw new Error('Bad Request: duplicated blogpost with the same slug not allowed!')

        // create blogpost
        const createNewBlogpost = await blogpostsData.create({ authorUserName: authorizeUser, ...body })
        if (!createNewBlogpost) throw new Error('Bad Request: blogpost not create!')

        res.json(createNewBlogpost)

    } catch (error) {

        next(new customError(error, 400))
    }
})

router.patch('/editblogpost/:_id', authorization, async (req, res, next) => {
    const { params: { _id }, body: {
        displayImage,
        displayVideo,
        authorUserName,
        authorName,
        title,
        contentBody,
        catigories,
        tags,
        mentions,
        slug,
        url,
    } } = req

    try {

        // verify blogpost id
        if (!mongoose.Types.ObjectId.isValid(_id)) throw new Error('Bad Request: invalid blogpost id!')

        if (!slug ||
            !title ||
            !contentBody ||
            !url
        ) throw new Error('Bad Request: empty field!')

        // validate body

        // update this blogpost
        const updateBlogpost = await blogpostsData.findByIdAndUpdate({ _id }, {
            displayImage, displayVideo, authorUserName, authorName, title, contentBody, catigories, tags, mentions,
        })
        if (!updateBlogpost) throw new Error('Bad Request: blogpost was not updated!')

        // grap the updated blogpost
        const getUpdatedBlogpost = await blogpostsData.findById({ _id: updateBlogpost._id })

        res.json(getUpdatedBlogpost)

    } catch (error) {

        next(new customError(error, 400))
    }
})

router.delete('/deleteblogpost/:_id', authorization, async (req, res, next) => {
    const { params: { _id, } } = req

    try {

        // verify blogpost id
        if (!mongoose.Types.ObjectId.isValid(_id)) throw new Error('Bad Request: empty field!')

        // delete blogpost
        const deleteBlogpost = await blogpostsData.findByIdAndDelete({ _id })
        if (!deleteBlogpost) throw new Error('Bad Request: blogpost was not deleted')

        res.json({ deleted: 'sucessfully deleted blogpost' })

    } catch (error) {

        next(new customError(error, 400))
    }
})


module.exports = router