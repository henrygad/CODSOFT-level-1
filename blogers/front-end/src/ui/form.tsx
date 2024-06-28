import tw from "tailwind-styled-components"

export const Formwrapper = tw.div`
    container 
    h-screen 
    w-screen
    flex 
    justify-center 
    items-center
    fixed 
    top-0 
    left-0 
    right-0 
    bottom-0
    backdrop-blur-md
    z-50
`
export const Form = tw.form`
   relative
   w-[320px] 
   md:min-w-[420px] 
   max-w-[420px] 
   space-y-6 
   p-10
   rounded-md
   shadow-md
`
export const Label = tw.label`
  font-text 
  text-base
  pl-1 
`
export const Input= tw.input`
  w-full 
  p-3
  font-text 
  text-sm 
  outline-none
 bg-transparent
 border
 rounded
`
export const Textarea = tw.textarea`
  p-3
  font-text 
  text-sm 
  outline-none
  rounded-md
`

export const Button = tw.button`
  font-secondary
  font-semibold
  text-white
  text-base
  py-2 
  px-4 
  bg-green-800 
  rounded-md
  cursor-pointer
`
export const Errorformmessage = tw.p`
    text-red-800 
    text-[.7rem] 
    font-text 
    w-full 
    text-center
`