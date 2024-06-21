import { useContextShowPageTitle, useContextUserData } from '../hooks'
import {  Followuser, Commentedonblogpost } from '../components'
import { useEffect } from 'react'

type Notification = {
  type: string 
  userName: string 
  blogpostTitle:string
  blogpostSlug: string
  commentId: string
}

const Notification = () => {
  const {setShowPageTitle} = useContextShowPageTitle()
  const {userData: {notifications}} = useContextUserData()

  useEffect(()=>{
    setShowPageTitle('notification')
  }, [])
 
  return <main>
    <div className='container pt-4'>
      <div className='flex justify-start'>
        <div className=''>
          {
            notifications && notifications.map((notification: Notification) => {
              if(notification.type === 'follow'){
                return < Followuser userName={notification.userName} additionalMessage='followed you' blogpostTitle='' />
              }
              if(notification.type === 'unfollow'){
                return < Followuser userName={notification.userName} additionalMessage='unfollowed you' blogpostTitle='' />
              }
              if(notification.type === 'blogpost-comment'){
                return <Commentedonblogpost userName={notification.userName} additionalMessage='commented on' blogpostSlug={notification.blogpostSlug} blogpostTitle={notification.blogpostTitle} commentId={notification.commentId} />
              }
              if(notification.type === 'blogpost-like'){
                return <Commentedonblogpost userName={notification.userName} additionalMessage='liked' blogpostSlug={notification.blogpostSlug} blogpostTitle={notification.blogpostTitle} commentId={notification.commentId} />
              }
              return<></>
            })
          }

        </div>
      </div>
    </div>
  </main>
}

export default Notification
