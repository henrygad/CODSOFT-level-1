import { NavLink } from 'react-router-dom'
import Displayuserquickinfor from './Userquickinfor'
import { useContextAuthentication, useTripWrds } from '../hooks'
import { Pdefault } from '../ui/Text'
import { FollowedIcon, Likeicon, Commenticon } from './Icons'

type Props = {
  userName: string,
  additionalMessage: string
  blogpostTitle: string
  blogpostSlug?: string
  commentId?: string
}


export const Followed = ({ userName, additionalMessage }: Props) => <div className='border-b rounded-md'>
  <div className='px-1 py-1'>
    <Pdefault className='flex items-center gap-2'>
      <span className='text-sm font-semibold lowercase'>{userName} <span className='italic'>{additionalMessage}</span> </span>
    </Pdefault>
  </div>
  <div className='flex items-center gap-2 py-2'>
    <FollowedIcon />
    <Displayuserquickinfor authorUserName={userName} />
  </div>
</div>

export const Liked = ({ userName, additionalMessage, blogpostTitle, blogpostSlug, commentId }: Props) => {
  const { loginUser } = useContextAuthentication()
  const [tripedBlogpostTitle] = useTripWrds({ body: blogpostTitle, num: 6, disableFn: false })

  return <div className='border-b'>
    <div className='px-1 py-1'>
      <Pdefault className='flex items-center gap-2' >
        <span className='text-sm font-semibold'>{userName} <span className='italic'>{additionalMessage}</span></span>
        <NavLink to={`/${loginUser}/${blogpostSlug}/post/#${commentId}`} >
          <span className='block text-sm underline first-letter:capitalize'>{tripedBlogpostTitle}</span>
        </NavLink>
      </Pdefault>
    </div>
    <div className='flex items-center gap-2 py-2'>
      <Likeicon/>
      <Displayuserquickinfor authorUserName={userName} />
    </div>
  </div>
}

export const Commentedonblogpost = ({ userName, additionalMessage, blogpostTitle, blogpostSlug, commentId }: Props) => {
  const { loginUser } = useContextAuthentication()
  const [tripedBlogpostTitle] = useTripWrds({ body: blogpostTitle, num: 6, disableFn: false })

  return <div className='border-b'>
    <div className='px-1 py-1'>
      <Pdefault className='flex items-center gap-2' >
        <span className='text-sm font-semibold'>{userName} <span className='italic'>{additionalMessage}</span></span>
        <NavLink to={`/${loginUser}/${blogpostSlug}/post/#${commentId}`} >
          <span className='block text-sm underline first-letter:capitalize'>{tripedBlogpostTitle}</span>
        </NavLink>
      </Pdefault>
    </div>
    <div className='flex items-center gap-2 py-2'>
      <Commenticon />
      <Displayuserquickinfor authorUserName={userName} />
    </div>
  </div>
}
