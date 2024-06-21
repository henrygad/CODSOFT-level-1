import tw from 'tailwind-styled-components'
import { useFollowBtn } from '../hooks'

const Followbutton = ({userName}: {userName: string}) => {
    const {handleFollow, Isfollowed} = useFollowBtn({userName})
  return <Followbtn  onClick={handleFollow}>{Isfollowed? 'following' : 'follow'}</Followbtn>
}

export default Followbutton

const Followbtn = tw.button`
   h-7
   px-2
   rounded-md
   bg-gray-700
   text-white
   font-primary
   text-[1rem]
   font-semibold
   cursor-pointer
`