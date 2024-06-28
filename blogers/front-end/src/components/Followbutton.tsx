import { useFollowBtn } from '../hooks'
import { Roundedbtn } from '../ui/buttons'

const Followbutton = ({ userName }: { userName: string }) => {
  const { handleFollow, Isfollowed } = useFollowBtn({ userName })
  return <div className='flex justify-center items-center'><Roundedbtn onClick={handleFollow}>{Isfollowed ? 'following' : 'follow'}</Roundedbtn></div>
}

export default Followbutton
