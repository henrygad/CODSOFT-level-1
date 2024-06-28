import Nav from './Nav'
import tw from 'tailwind-styled-components'
import { NavLink } from 'react-router-dom'
import { Navlist } from '../ui/List'
import Login from './Login'
import Signup from './Signup'
import { useContextAuthentication, useContextShowPageTitle, useContextUserData, useReturnComponent, useContextLoginDialog } from '../hooks'
import Logindialog from './Logindialog'
import { useEffect, useState } from 'react'
import { Authenticationbtn } from '../ui/buttons'
import { Settingsicon, Darkmodeicon, Lightmodeicon } from './Icons'

const Header = () => {
   const { isLogin, loginUser } = useContextAuthentication()
   const { userData } = useContextUserData()
   const { showPageTitle } = useContextShowPageTitle()
   const { logingDialog, setLoginDialog } = useContextLoginDialog()
   const [darkMode, setDarkMode] = useState(false)

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

   useEffect(() => {
      const htmlEle = document.documentElement.classList
      const dark = localStorage.getItem('dark')

      if (dark === 'true') {
         htmlEle.add('dark')
         setDarkMode(true)
      } else {
         htmlEle.remove('dark')
         setDarkMode(false)
      }

   }, [darkMode])

   const handleToggleDarkModeClass = () => {
      setDarkMode(!darkMode)
      localStorage.setItem('dark', (!darkMode).toString())
   }



   return <header className=' relative'>
      <Headerwrapper>
         <div id='logo'>
            <NavLink to={hanldePageTitle().to}>
               {isLogin ?
                  <div className='flex gap-2 items-center'>
                     <img className='h-7 w-7 object-contain rounded-full' src={userData.image} alt="" />
                     <p className='font-text text-sm first-letter:capitalize'>{hanldePageTitle().name}</p>
                  </div> : <p className='font-secondary cursor-pointer'>
                     <span className='font-bold text-green-700 text-xl'>Blog</span>
                     <span className='font-semibold text-base '>gers</span>
                  </p>
               }
            </NavLink>
         </div>
         <Nav className='gap-4 items-center' Children={<>
            {!isLogin && <>
               <li onClick={() => { handleDialogtoggle(); setTo('login') }}> <Authenticationbtn>login</Authenticationbtn></li>
               <li onClick={() => { handleDialogtoggle(); setTo('signup'); }}><Authenticationbtn className='bg-green-700 '>signup</Authenticationbtn></li> </>
            }
            {isLogin &&
               <Navlist>
                  <NavLink to='/settings'>
                     <Settingsicon />
                  </NavLink>
               </Navlist>
            }
            <li className='font-bold font-secondary ml-2 cursor-pointer' onClick={handleToggleDarkModeClass}>{darkMode ? <Lightmodeicon /> : <Darkmodeicon/>}</li>
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
   py-2 
   z-50
`
