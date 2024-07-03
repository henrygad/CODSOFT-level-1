const authorization = require("../middlewares/authorization")
const { customError } = require("../middlewares/error")
const router = require("express").Router()
const commentsData = require('../schema/commentsSchema')
const mongoose = require('mongoose')


router.get('/allusercomments', authorization, async (req, res, next) => {
    const { authorizeUser } = req

    try {

        // get all user comments
        const getAllUserComments = await commentsData.find({ authorUserName: authorizeUser })
        if (!getAllUserComments.length)  throw new Error('Not Found: invalid blogpost id')

        res.json(getAllUserComments)

    } catch (error) {

        next(new customError(error, 404))
    }
})

router.get('/singleusercomment/:_id', authorization, async (req, res, next) => {
    const { params: { _id } } = req

    try {

        // verify blogpost id
        if (!mongoose.Types.ObjectId.isValid(_id)) throw new Error('Not Found: invalid blogpost id')

        // get single comments for user
        const getSingleUserComment = await commentsData.findById({_id})
        if (!getSingleUserComment)  throw new Error('Not Found: no comment was found')

        res.json(getSingleUserComment)

    } catch (error) {
        next(new customError(error, 404))
    }
})

router.post('/createcomment', authorization, async (req, res, next) => {
    const { authorizeUser, body } = req

    try {

        if (!body.url ||
            !body.parentBlogpostId
        ) throw new Error('bad request: empty fields')

        // validate body

        // check for duplicated blogpost
        const getAllComments = await commentsData.findOne({url: body.url})
        if(getAllComments) throw new Error('bad request: duplicated comment witht the same url not allowed')

        // create blogpost
        const createNewComment = await commentsData.create({ authorUserName: authorizeUser, ...body })
        if (!createNewComment) throw new Error('bad request: comment not created ')

        res.json(createNewComment)

    } catch (error) {
       
        next(new customError(error, 400))
    }
})

// this route will not be use
router.patch('/editcomment/:_id', authorization, async (req, res, next) => {
    const { params: { _id }, body: {
        parentBlogpostId,
        authorName,
        contentBody,
        mentions,
        url
    } } = req

    try {

        // varify comment id
        if (!mongoose.Types.ObjectId.isValid(_id)) throw new Error('bad request: invalid comment is')

        if (!contentBody ||
            !url ||
            !parentBlogpostId
        ) throw new Error('bad request: empty fields')

        // validate body

        // update comment
        const updateComment = await commentsData.findByIdAndUpdate({ _id }, {contentBody, mentions, authorName})
        if (!updateComment) throw new Error('bad request: comment not updated')

        // grap the updated comment
        const getUpdatedComment = await commentsData.findById({ _id: updateComment._id })

        res.json(getUpdatedComment)

    } catch (error) {
        next(new customError(error, 400))
    }
})

router.delete('/deletecomment/:_id', authorization, async (req, res, next) => {
    const { params: { _id, } } = req

    try {

        // verify comment id
        if (!mongoose.Types.ObjectId.isValid(_id)) throw new Error('bad request: inavlid comment is')

        // delete comment
        const deleteComment = await commentsData.findByIdAndDelete({ _id })
        if (!deleteComment) throw new Error('bad request: comment was not deleted')

        res.json({ deleted: 'sucessfully deleted comment' })

    } catch (error) {

        next(new customError(error, 400))
    }
})

module.exports = router