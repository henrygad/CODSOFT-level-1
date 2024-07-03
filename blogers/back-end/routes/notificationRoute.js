const authorization = require('../middlewares/authorization')
const { customError } = require('../middlewares/error')
const usersData = require('../schema/usersDataSchema')
const router = require('express').Router()


router.patch('/addnotificationto/:userNameToNotify', authorization, async (req, res, next) => {
    const { params: { userNameToNotify }, body: { type, subject, url, title, message} } = req

    try {

        if (
            !type ||
            !subject ||
            !userNameToNotify.startsWith('@')
        ) throw new Error('bad request: empty fields or invalid userName')

        // validate and sanitize body
        
        // check if the user to notify exist
        const getUser = await usersData.findOne({ userName: userNameToNotify })
        if (!getUser) throw new Error('bad request: user not found')
       
        // notify user
        const notifed = await usersData.findOneAndUpdate({ userName: getUser.userName}, { notifications: [...getUser.notifications, {_id: Date.now().toString(), type, subject, url, message, title}] })
        if(!notifed) throw new Error('bad request: user not notifed')
        
        res.json({notifed: 'notifed sucessfully'})

    } catch (error) {
    
        next(new customError(error, 400))
    }

})

module.exports = router