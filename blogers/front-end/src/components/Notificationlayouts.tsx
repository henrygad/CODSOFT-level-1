import { NavLink } from 'react-router-dom'
import Displayuserquickinfor from './Displayuserquickinfor'
import { useContextAuthentication, useTripWrds } from '../hooks'

type Props = {
  userName: string,
  additionalMessage: string
  blogpostTitle: string
  blogpostSlug?: string
  commentId?: string
}

export const Followuser = ({ userName, additionalMessage }: Props) => <div className='border-b rounded-md'>
  <div className='px-1 py-1'> <p className='text-sm font-text'> <span className='font-semibold'>{userName}</span> {additionalMessage}</p></div>
  <div className='py-2'><Displayuserquickinfor  authorUserName={userName} /></div>
</div>

export const Commentedonblogpost = ({ userName, additionalMessage, blogpostTitle, blogpostSlug, commentId }: Props) => {
  const {loginUser} = useContextAuthentication()
  const [tripedBlogpostTitle] = useTripWrds({ body: blogpostTitle, num: 6, disableFn: false })

  return <div className='border-b rounded-md'>
    <div className='px-1 py-1'>
      <p className='text-sm font-text'>
        <span className='font-semibold'>{userName}</span> {additionalMessage} <NavLink to={`/${loginUser}/${blogpostSlug}/post/#${commentId}`} ><span className=' text-slate-400'>{tripedBlogpostTitle}</span></NavLink>
      </p>
    </div>
    <div className='py-2'><Displayuserquickinfor authorUserName={userName} /></div>
  </div>
}
