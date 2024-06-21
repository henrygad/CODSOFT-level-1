import { Nav } from '../components'
import { Navlist } from '../ui/List'
import { NavLink } from 'react-router-dom'
import { useContextAuthentication, useContextShowPageTitle, useContextUserData } from '../hooks'
import tw from 'tailwind-styled-components'
import { useEffect } from 'react'

const Settings = () => {
    const { userData, dispatch} = useContextUserData()
    const {setIsLogin} = useContextAuthentication()
    const {setShowPageTitle} = useContextShowPageTitle()

    useEffect(()=>{setShowPageTitle('settings')}, [])

    const navs = [
        { name: 'edit profile', to: '/editprofile' },
        { name: 'contact us', to: `/contact` },
        { name: 'FAQ', to: `/FAQ` }
    ]

    const handleLogOut = () => {
        localStorage.removeItem('userLogined')
        setIsLogin(false)
    }

    const handleDeleteAccount = () => {
      handleLogOut()
      dispatch({type: 'DELETE_USERDATA', payload: null})
    }

   

    
    return <main className=''>
        <div className='container pt-10'>
            <div className='space-y-4 '>
                <Nav className='flex-col gap-4' Children={
                    <>
                        {navs && navs.map((nav) =>
                            <Navlist key={nav.name} className='border-b p-2'>
                                <NavLink to={nav.to}> <button>{nav.name}</button></NavLink>
                            </Navlist>
                        )}
                    </>
                } />
                 <div className=''>
                    <Button onClick={handleLogOut}>Log out</Button>
                </div>
                <div className=''>
                    <Button onClick={handleDeleteAccount}>Delete account</Button>
                </div>
            </div>
        </div>
    </main>
}

export default Settings

const Button = tw.button`
    px-4 
    py-2 
    bg-red-800 
    text-white 
    font-text 
    text-sm 
    rounded-full 
    cursor-pointer
`