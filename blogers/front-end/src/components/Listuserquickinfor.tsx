import Displayuserquickinfor from './Displayuserquickinfor'

const Listuserquickinfor = ({follow}: {follow: []}) => {
  return <div className='space-y-4'> 
    {follow && follow.map((follow)=>
        <Displayuserquickinfor authorUserName={follow} />
    )}
   </div>
}

export default Listuserquickinfor
