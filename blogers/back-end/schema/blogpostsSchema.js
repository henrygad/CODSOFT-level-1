const mongoose = require('mongoose')

const blogpostsData = new mongoose.Schema({
    displayImage: String,
    displayVideo: String,
    authorUserName: String,
    authorName: String,
    title: String,
    contentBody: String,
    catigories: {type: []},
    tags: {type: []},
    mentions: {type: []},
    slug: {type: String, unique: true},
    url: String
}, 
{
    timestamps: true
})


module.exports =  mongoose.model("blogpostsData", blogpostsData)