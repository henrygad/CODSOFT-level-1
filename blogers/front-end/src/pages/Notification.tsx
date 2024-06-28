import { useContextOnCreateBlogpost, useContextShowPageTitle, useContextUserData, useSeeMore } from '../hooks'
import { Followed, Commentedonblogpost, Liked } from '../components'
import { useEffect } from 'react'

type Notification = {
  type: string
  userName: string
  blogpostTitle: string
  blogpostSlug: string
  commentId: string
}


const Notification = () => {
  const { setShowPageTitle } = useContextShowPageTitle()
  const { setOnCreateBlogpost } = useContextOnCreateBlogpost()

  const { userData: { notifications } } = useContextUserData()
  const { Displayseemore, perLoad } = useSeeMore({ arrLength: notifications.length, defaultPerLoad: 6 })

  useEffect(() => {
    setShowPageTitle('notification')
    setOnCreateBlogpost(false)
  }, [])

  return <main>
    <div className='container pt-4 pb-10'>
      <div className='flex justify-start'>
        <div className=''>
          {
            notifications && notifications.map((notification: Notification, index: number) =>
              index >= perLoad ? '' : (() => {
                if (notification.type === 'follow') {
                  return < Followed userName={notification.userName} additionalMessage='followed you' blogpostTitle='' />
                }
                if (notification.type === 'blogpost-comment') {
                  return <Commentedonblogpost userName={notification.userName} additionalMessage='commented on' blogpostSlug={notification.blogpostSlug} blogpostTitle={notification.blogpostTitle} commentId={notification.commentId} />
                }
                if (notification.type === 'blogpost-like') {
                  return <Liked userName={notification.userName} additionalMessage='liked' blogpostSlug={notification.blogpostSlug} blogpostTitle={notification.blogpostTitle} commentId={notification.commentId} />
                }
                return <></>
              })()
            )
          }
          <Displayseemore />
        </div>
      </div>
    </div>
  </main>
}

export default Notification
