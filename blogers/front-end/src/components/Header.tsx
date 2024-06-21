import Nav from './Nav'
import tw from 'tailwind-styled-components'
import { NavLink } from 'react-router-dom'
import { Navlist } from '../ui/List'
import Login from './Login'
import Signup from './Signup'
import { useContextAuthentication, useContextShowPageTitle, useContextUserData, useReturnComponent, useContextLoginDialog } from '../hooks'
import Logindialog from './Logindialog'

const Header = () => {
   const { isLogin, loginUser } = useContextAuthentication()
   const { userData } = useContextUserData()
   const { showPageTitle } = useContextShowPageTitle()
   const { logingDialog ,setLoginDialog} = useContextLoginDialog()

   const handleDialogtoggle = () => {
     setLoginDialog(!logingDialog)
   }

   const { Displayreturnedcomponent, setTo } = useReturnComponent((to: string, setTo: React.Dispatch<React.SetStateAction<string>>) => {
      if (to === 'signup') return <Signup closeDialog={handleDialogtoggle} setTo={setTo} />
      return <Login closeDialog={handleDialogtoggle} setTo={setTo} />
   })

   const hanldePageTitle = () => {
      if (isLogin) {
         return {
            name: showPageTitle,
            to: `/${loginUser}`
         }
      } else {
         return {
            name: 'blogpost',
            to: '/'
         }
      }
   }



   return <header className=' relative'>
      <Headerwrapper>
         <div id='logo' className='flex gap-2 items-center'>
            <NavLink to={hanldePageTitle().to}>
               {isLogin ?
                  <img className='h-7 w-7 object-contain rounded-full' src={userData.image} alt="" /> :
                  <p className='font-secondary text-base font-bold capitalize text-green-800 cursor-pointer'>{hanldePageTitle().name}</p>
               }
            </NavLink>
            {isLogin && <p className='font-secondary text-base font-bold capitalize text-green-800 cursor-pointer'>{hanldePageTitle().name}</p>}
         </div>
         <Nav className='gap-4 items-center' Children={<>
            {!isLogin && <>
               <Navlist onClick={() => { handleDialogtoggle(); setTo('login') }}>login</Navlist>
               <Navlist onClick={() => { handleDialogtoggle(); setTo('signup'); }}>Signup</Navlist> </>
            }
            <li className='text-stone-900 font-bold font-secondary ml-10'>Dark</li>
            <Navlist><NavLink to='/settings' >settings</NavLink></Navlist>
         </>}
         />
      </Headerwrapper>
      <div>
         {!isLogin && <Logindialog Children={<Displayreturnedcomponent />} />}
      </div>
   </header>
}

export default Header

const Headerwrapper = tw.div`
   container 
   flex 
   justify-between 
   items-center                     
   border-b 
   shadow-sm
   bg-white 
   py-2 
   z-50
`
