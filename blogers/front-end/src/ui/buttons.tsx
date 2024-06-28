import tw from "tailwind-styled-components";

export const Authenticationbtn = tw.button`
  font-secondary 
  text-sm
  font-semibold
  capitalize 
  border
  py-1 
  px-2
  rounded
  transition-colors
  border-green-700
  hover:bg-transparent
  hover:border-none
`
export const Roundedbtn  = tw.button`
  font-text
  text-sm
  font-semibold
  px-2
  py-1
   rounded-full
   transition-colors
   capitalize
   border
   bg-transparent
   hover:border-transparent
   active:bg-gray-100
   active:dark:bg-gray-700
   cursor-pointer
`