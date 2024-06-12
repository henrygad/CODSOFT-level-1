import tw from 'tailwind-styled-components'

const Followbutton = () => {
  return <Followbtn>Follow</Followbtn>
}

export default Followbutton

const Followbtn = tw.button`
   h-7
   w-14
   rounded-md
   bg-gray-700
   text-white
   font-primary
   text-[.8rem]
   font-semibold
   cursor-pointer
`