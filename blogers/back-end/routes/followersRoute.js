const router = require('express').Router()
const authorization = require('../middlewares/authorization')
const { customError } = require('../middlewares/error')
const usersData = require('../schema/usersDataSchema')


router.patch('/addfollowerto/:userNameToFollow', authorization, async (req, res, next) => {
    const { params: { userNameToFollow }, body: { userName }, authorizeUser } = req

    try {

        if (!userName ||
            !userNameToNotify.startsWith('@')
        ) throw new Error('bad request: empty fields or invalid userName')

        // check if user is trying to follow himself
        if (userName === authorizeUser) throw new Error('bad request: user can not follow yourself')

        // validate userName

        // check if user to follow exist
        const getUser = await usersData.findOne({ userName: userNameToFollow })
        if (!getUser) throw new Error('bad request: no user was found')

        // check if already for followed user
        const alreadyFollowing = getUser.followers.includes(userName)
        if (alreadyFollowing) throw new Error('bad request: user already followed')

        // follow user
        const followed = await usersData.findOneAndUpdate({ userName: getUser.userName }, { followers: [...getUser.followers, userName] })
        if(!followed) throw new Error('bad request: user was not followed')
            
        res.json({ followed: "followd sucessfully" })

    } catch (error) {

        next(new customError(error, 400))
    }

})


router.delete('/unfollowerfrom/:userNameToUnfollow', authorization, async (req, res, next) => {
    const { params: { userNameToUnfollow }, body: { userName } } = req

    try {

        if (!userName ||
            !userNameToNotify.startsWith('@')
        ) throw new Error('bad request: empty fields or invalid userName')
        
        // check if user exist
        const getUser = await usersData.findOne({ userName: userNameToUnfollow })
        if (!getUser) throw new Error('bad request: no user was found')

        // unfollow user
        const unFollowd = await usersData.findOneAndUpdate({ userName: getUser.userName }, { followers: getUser.followers.filter((user) => user !== userName) })
        if (!unFollowd) throw new Error('bad request: user not followed')

        res.json({ unFollowd: "unfollowed sucessfully" })

    } catch (error) {
       next(new customError(error, 400))
    }

})


module.exports = router