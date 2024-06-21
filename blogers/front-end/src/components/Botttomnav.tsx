import React from 'react'
import Nav from './Nav'
import { Navlist } from '../ui/List'
import { NavLink } from 'react-router-dom'
import { useContextAuthentication } from '../hooks'


const Botttomnav = () => {
    const {loginUser} = useContextAuthentication()

    const bottomNavList = [
        {url: '/timeline',  displayName: 'home'},
        {url: '/search', displayName: 'search'},
        {url: '/notification', displayName: 'nf'},
        {url: '/directmessage', displayName: 'dm'},
        {url: '/'+loginUser, displayName: 'profile'},
    ]

    return <div className='relative'>
        <div className='container fixed right-0 left-0 bottom-0 py-4 bg-white border-t shadow-sm'>
            <Nav className=' justify-between gap-10 w-full' Children={<>
                {bottomNavList.map((list) =>
                    <Navlist key={list.displayName}> <NavLink to={list.url} >{list.displayName}</NavLink></Navlist>
                )}
            </>} />
            <div className='relative'>
                <div className=' absolute  -top-60 right-1'>
                    <NavLink to='/createblogpost' > <button className=' h-12 w-12 rounded-full bg-green-400 text-white font-text text-sm font-semibold border shadow-md'>post</button></NavLink> 
                </div>
            </div>
        </div>
    </div>
}

export default Botttomnav
