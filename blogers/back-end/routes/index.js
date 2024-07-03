const routers = require('express').Router()
const authenticationRoute = require('./authenticationRoute')
const usersRoute = require('./usersRoute')
const followersRoute = require('./followersRoute')
const notificationRoute = require('./notificationRoute')
const blogpostsRoute = require('./blogpostsRoute')
const commentsRoute = require('./commentsRoute')
const globalRoute = require('./globalRoute')

module.exports = routers.use(
    globalRoute,
    authenticationRoute,
    usersRoute,
    blogpostsRoute,
    commentsRoute,
    followersRoute,
    notificationRoute
)