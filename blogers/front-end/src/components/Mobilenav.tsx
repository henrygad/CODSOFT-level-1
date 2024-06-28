import tw from 'tailwind-styled-components'
import { Dotlist} from '../ui/List'
import { ReactElement, useState } from 'react'
import Nav from './Nav'

const Mobilenav = ({ Children, className }: { Children: ReactElement, className?: string}) => {
    const [toggleNav, setToggleNav] =useState(false)
   
    return <div className={className}>
        <nav className='relative w-full'>
            <Ul onClick={()=> setToggleNav(!toggleNav)}>
                <Dotlist />
                <Dotlist />
                <Dotlist />
            </Ul>
        </nav>
        <div className='relative'>
            <Mobilenanlistlayout className={`${!toggleNav? 'opacity-0 invisible': 'opacity-100 visible'}`}>
                <Nav className='flex-col justify-center gap-3' Children={Children}/>
            </Mobilenanlistlayout>
        </div>
    </div>
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
    p-[.4rem]
    transition-colors
    rounded-full 
    bg-gray-100
     dark:bg-stone-800
     active:bg-blue-100
    cursor-pointer
`

const Mobilenanlistlayout = tw.div`
    absolute 
    top-3 
    right-8 
    p-4 
    rounded 
    bg-gray-100 
    dark:bg-stone-700
    transition-all
`