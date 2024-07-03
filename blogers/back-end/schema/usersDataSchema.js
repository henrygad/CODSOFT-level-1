const mongoose = require('mongoose')

const usersData = new mongoose.Schema({
    image: String,
    email: String,
    userName: { type: String, unique: true},
    name: String,
    dateOfBirth: Date,
    country: String,
    sex: String,
    website: String,
    bio: { type: String, match: /[a-z]/ , max: 50},
    timeline: {type: []},
    followers: {type: []},
    following: {type: []},
    interests: {type: []},
    notifications: {type: []},
    chatIds: {type: []},
}, 
{
    timestamps: true

})


module.exports =  mongoose.model("usersData", usersData)