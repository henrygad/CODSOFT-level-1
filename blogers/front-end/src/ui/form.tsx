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
   bg-white 
   p-10
   rounded-md
   shadow-md
`
export const Label = tw.label`
  font-text 
  text-base
  text-stone-600 
  pl-1 
`
export const Input= tw.input`
  bg-gray-50 
  w-full 
  p-3
  rounded-sm 
  font-text 
  text-sm 
  text-stone-800"
  outline-none
  rounded-md
`
export const Textarea = tw.textarea`
  bg-gray-50 
  p-3
  rounded-sm 
  font-text 
  text-sm 
  text-stone-800"
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