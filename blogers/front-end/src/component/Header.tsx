import React, { useRef, useState } from 'react'
import Nav from './Nav'
import tw from 'tailwind-styled-components'
import { NavLink } from 'react-router-dom'
import { Navlist} from '../ui/List'
import Dialog from './Dialog'
import Login from './Login'
import Signup from './Signup'
import {useReturnComponent} from '../hooks'

const Header = () => {
   const Dialogref = useRef(null)

   const handleDialogtoggle = ()=>{
      Dialogref.current?.toggleDialog()
   }

   const { Displayreturnedcomponent, setTo} = useReturnComponent((to: string, setTo:React.Dispatch<React.SetStateAction<string>>) => {
      if (to === 'signup') return <Signup closeDialog={handleDialogtoggle} setTo={setTo} />
      return <Login closeDialog={handleDialogtoggle} setTo={setTo} />
   })


  return<header className=' relative'>
   <Headerwrapper>
      <div id='logo'>
         <p className='font-secondary text-2xl font-bold capitalize text-green-800 cursor-pointer'>
           <NavLink to="/">Bloggers</NavLink>
         </p>
      </div>
      <Nav className='gap-4' Children={<>
         <Navlist onClick={()=> {handleDialogtoggle(); setTo('login')}}>login</Navlist>
         <Navlist onClick={()=> { handleDialogtoggle(); setTo('signup');}}>Signup</Navlist>
         <Navlist>contact</Navlist>
         <li className='text-stone-900 font-bold font-secondary ml-10'>Dark</li>
         </> } 
      />
   </Headerwrapper>
   <div> 
      <Dialog ref={Dialogref} Children={Displayreturnedcomponent()}/>
   </div>
  </header>
}

export default Header

const Headerwrapper = tw.div`
   container 
   flex 
   justify-between 
   items-center                     
   fixed 
   top-0 
   left-0 
   right-0
   border-b 
   shadow-sm
   bg-white 
   py-2 
   z-50
`
