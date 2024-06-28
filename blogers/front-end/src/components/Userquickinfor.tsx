import Followbutton from './Followbutton'
import { H3, H4, Pdefault } from '../ui/Text'
import { NavLink } from 'react-router-dom'
import { useContextAuthentication, useContextLoginDialog, useGetUserQuicktInfor, useIsAccountOwner } from '../hooks'

const Userquickinfor = ({ authorUserName, disableFollowbtn}: { authorUserName: string, disableFollowbtn?: boolean }) => {
  const { isLogin } = useContextAuthentication()
  const { logingDialog, setLoginDialog } = useContextLoginDialog()
  const { isOwnerOfAccount } = useIsAccountOwner({ authorizedUser: authorUserName })
  const { getUserInfor } = useGetUserQuicktInfor()
  const props = getUserInfor({ finder: authorUserName })
  const name = props?.name
  const image = props?.image

  const handleDialogtoggle = () => {
    setLoginDialog(!logingDialog)
  }

  return <div className='flex gap-10 items-center w-full cursor-pointer'>
    <NavLink to={isLogin && `/${authorUserName}`} >
      <div className=' flex gap-1 items-center' onClick={() => !isLogin && handleDialogtoggle()}>
        <img className=' w-10 h-10 rounded-full shadow-sm object-contain' src={image} alt={name ? name : authorUserName} />
        <div>
          {name && <Pdefault className='first-letter:capitalize text-sm'>{name}</Pdefault>}
          <Pdefault className='text-[.8rem] text-stone-400' >{authorUserName}</Pdefault>
        </div>
      </div>
    </NavLink>
    {!isOwnerOfAccount && !disableFollowbtn &&
      <Followbutton userName={authorUserName} />
    }
  </div>
}

export default Userquickinfor
