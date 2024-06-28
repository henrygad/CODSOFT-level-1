import React, { useEffect, useRef, useState } from 'react'
import tw from 'tailwind-styled-components'
import {Searchicon} from './Icons'


const Searchform = ({ search, setSearch }: { search: string, setSearch: React.Dispatch<React.SetStateAction<string>> }) => {
  const inputRef = useRef(null)
  const [isFocus, setIsFocus] = useState(false)

  useEffect(() => {
    const handleFocus = () => setIsFocus(true)
    const handleBlur = () => setIsFocus(false)

    const inputElement = inputRef.current
    if (inputElement) {
      inputElement.addEventListener('focus', handleFocus)
      inputElement.addEventListener('blur', handleBlur)
    }

    return () => {
      if (inputElement) {
        inputElement.removeEventListener('focus', handleFocus)
        inputElement.removeEventListener('blur', handleBlur)
      }
    }
  }, [])

  const handleSearchForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSearch('')
    inputRef.current?.focus()
  }

  return <div className='relative flex justify-center'>
    <Formwrapper className={`${isFocus && 'min-w-[320px] md:min-w-[480px]'}`}>
      <Form id='search form' action="" onSubmit={handleSearchForm} >
        <Inputform className={`${isFocus&& 'border-b-0'} `} ref={inputRef} value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search..." />
        <Inputbutton >
          <Searchicon/>
        </Inputbutton>
        <Historywrapper className={`${isFocus ? 'opacity-1' : 'opacity-0 invisible'} `}>
          <div className='flex justify-between'><p>how to start a blog in two days</p> <span className='text-red-900'>X</span></div>
          <div className='flex justify-between'><p>js toturial</p> <span className='text-red-900'>X</span></div>
          <div className='flex justify-between'><p>how to should i learn programmings</p> <span className='text-red-900' >X</span></div>
        </Historywrapper>
      </Form>
    </Formwrapper>
  </div>
}

export default Searchform

const Formwrapper = tw.div`
  absolute
  min-w-[280px] 
  md:min-w-[320px] 
  h-full
  transition-all
`

const Form = tw.form`
  relative 
  flex-1 
  flex 
  flex-col 
  transition-all
`

const Inputform = tw.input`
  w-full 
  h-9
  font-base
  outline-none 
  border
  rounded-md
  bg-transparent
  pl-10
  pr-2
  py-1
  -shadow
  z-[0]
`
const Inputbutton = tw.button`
  absolute 
  top-[1.1rem]
  left-2
  -translate-y-1/2 
  cursor-pointer 
`
const Historywrapper = tw.div`
cursor-pointer 
w-full 
space-y-1 
pt-6
pb-2
px-2
-mt-[4px]
border-r 
border-l 
border-b 
rounded-b-md
bg-white
dark:bg-stone-900
-shadow
z-[0]
`