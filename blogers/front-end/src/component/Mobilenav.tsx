import tw from 'tailwind-styled-components'
import { Dotlist} from '../ui/List'
import { ReactElement, useState } from 'react'
import Nav from './Nav'

const Mobilenav = ({ Children }: { Children: ReactElement}) => {
    const [toggleNav, setToggleNav] =useState(false)
   
    return <>
        <nav className='relative w-full'>
            <Ul className={`${!toggleNav ? 'bg-gray-100' : ' bg-gray-200 '}`} onClick={()=> setToggleNav(!toggleNav)}>
                <Dotlist />
                <Dotlist />
                <Dotlist />
            </Ul>
        </nav>
        <div className='relative'>
            <div className={`${!toggleNav && ' hidden'} absolute top-10 right-10 p-8 rounded-md bg-gray-800`}>
                <Nav className='flex-col justify-center gap-3' Children={Children}/>
            </div>
        </div>
    </>
}

export default Mobilenav

const Ul = tw.ul`
    flex 
    flex-col 
    justify-center 
    items-center 
    gap-[1.8px] 
    absolute 
    top-2 
    right-2 
    h-6 
    w-6 
    rounded-full 
    cursor-pointer
    shadow-md
`