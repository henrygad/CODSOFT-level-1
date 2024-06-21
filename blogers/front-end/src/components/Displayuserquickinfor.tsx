import Followbutton from './Followbutton'
import { H3, H4 } from '../ui/Text'
import { NavLink } from 'react-router-dom'
import { useContextAuthentication, useContextLoginDialog, useGetUserQuicktInfor, useIsAccountOwner } from '../hooks'

const Displayuserquickinfor = ({ authorUserName }: { authorUserName: string }) => {
  const {isLogin} = useContextAuthentication()
  const {logingDialog, setLoginDialog} = useContextLoginDialog()
  const { isOwnerOfAccount } = useIsAccountOwner({ authorizedUser: authorUserName })
  const { getUserInfor } = useGetUserQuicktInfor()
  const { name, image } = getUserInfor({ finder: authorUserName })

  const handleDialogtoggle = () => {
    setLoginDialog(!logingDialog)
  }
  
  return <div className='flex gap-10 items-center cursor-pointer'>
    <NavLink to={isLogin&&`/${authorUserName}`} >
      <div className=' flex gap-1 items-center' onClick={()=> !isLogin && handleDialogtoggle()}>
        <img className=' w-10 h-10 rounded-full shadow-sm object-contain' src={image} alt={name ? name : authorUserName} />
        <div>
          {name && <H3 className='text-slate-700'>{name}</H3>}
          <H4 className='text-slate-300 text-[.7rem]'>{authorUserName}</H4>
        </div>
      </div>
    </NavLink>
    {!isOwnerOfAccount && <Followbutton userName={authorUserName} />}
  </div>
}

export default Displayuserquickinfor
