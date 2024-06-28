import { useSeeMore } from '../hooks'
import Displayuserquickinfor from './Userquickinfor'

const Listuserquickinfor = ({follow, defaultPerLoad = 6}: {follow: [], defaultPerLoad?: number}) => {
  const {Displayseemore, perLoad} =  useSeeMore({arrLength: follow.length, defaultPerLoad})
  return <div className='space-y-4'> 
    {follow && follow.map((follow, index)=>
        index >= perLoad ? '' :  <Displayuserquickinfor authorUserName={follow} />
    )}
    <Displayseemore />
   </div>
}

export default Listuserquickinfor
