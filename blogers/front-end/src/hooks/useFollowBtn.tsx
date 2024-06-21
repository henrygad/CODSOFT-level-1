import React, { useEffect, useState } from 'react'
import useContextUserData from './useContextUserData'
import useContextAuthentication from './useContextAuthentication'
import useContextLoginDialog from './useContextLoginDialog'

const useFollowBtn = ({ userName }: { userName: string }) => {
    const { isLogin } = useContextAuthentication()
    const {logingDialog, setLoginDialog} = useContextLoginDialog()
    const { userData: { following }, dispatch } = useContextUserData()
    const [Isfollowed, setIsFollowed] = useState(false)

    useEffect(() => {
        if (isLogin) {
            const followed = following.includes(userName)
            if (followed) {
                setIsFollowed(true)
            }
        }
    }, [userName])

    const handleFollow = () => {
        if (isLogin) {
            if (Isfollowed) {
                // update the login user
                dispatch({ type: 'DELETE_FOLLOWING', payload: userName })
                setIsFollowed(false)

                //update the unfollowed user
            } else {
                // udate the login user
                dispatch({ type: 'CREATE_FOLLOWING', payload: userName })
                setIsFollowed(true)

                // update the followed user
            }
        }else{
            console.log('user is log out')
            setLoginDialog(!logingDialog)
        }
    }

    return { handleFollow, Isfollowed }
}

export default useFollowBtn
