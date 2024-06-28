import React, { useState } from 'react'
import useContextAuthentication from './useContextAuthentication'


const useLikeBtn = ({blogpostId}: {blogpostId: string}) => {
    const {loginUser} = useContextAuthentication()
    const [isLiked, setIsLiked] =  useState(false)

    const handleLike =()=>{
        if('user alread like'){
            console.log(blogpostId)
            return
        }else{
            //make api call and add username to the blogpostid like arr
        }
    }

  return {handleLike,  isLiked}
}

export default useLikeBtn
