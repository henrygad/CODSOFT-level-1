const mongoose = require('mongoose')

const commentsData = new mongoose.Schema({
    parentBlogpostId: String,
    parentCommentId: String,
    authorUserName: String,
    authorName: String,
    contentBody: String,
    mentions: {type: []},
    url: {type: String, unique: true}
}, 
{
    timestamps: true
})


module.exports =  mongoose.model("commentsData", commentsData)