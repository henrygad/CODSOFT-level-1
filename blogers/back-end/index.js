const express = require("express")
const Mongoose = require('mongoose')
const MongoStore = require('connect-mongo')
const routes = require('./routes/index')
const session = require('express-session')
const { errorHandler, customError } = require("./middlewares/error")
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 4000
const DBURI = process.env.DBURI
const SECRETE = process.env.SECRETE
const hour = 3600000

Mongoose.connect(DBURI)
    .then(() => {

        app.use(session({
            secret: SECRETE,
            resave: false,
            saveUninitialized: false,
            cookie: {
                expires: new Date(Date.now() + (hour * 2)), // 2 hour from now
                maxAge: (hour * 2), // live for 2 hour
                httpOnly: true, // Prevents JavaScript access
                secure: false,   // Ensures cookie is sent over HTTPS
            },
            store: MongoStore.create({
                client: Mongoose.connection.getClient()
            })
        }))

        app.use(express.json())

        app.get('/api', (req, res) => {
            const { session } = req
            session.visited = true // modified session

            if (session.searchHistory) {
                session.searchHistory = [...session.searchHistory]
            } else {
                session.searchHistory = []
            }

            res.json({ message: 'wellcome user' })
        })

        app.use('/api', routes)

        app.all('*', (req, res, next) => {
            next(new customError(`Can't find ${req.originalUrl} on this server!`, 404))
        })

        app.use(errorHandler)

        app.listen(PORT, () => console.log('serving running on port' + ' ' + PORT))
    })
    .catch((err) => {
        const error = new customError(err)
        console.log(error.message)
    })
    