import Followbutton from './Followbutton'
import { H3, H4 } from '../ui/Text'

const Displayuserquickinfor = ({ authorName, authorImage, authorUserName }: { authorName: string, authorUserName: string, authorImage: string }) => {
  return <div className='flex gap-10 items-center'>
    <div className=' flex gap-1 items-center'>
      <img className=' w-10 h-10 rounded-full shadow-sm object-contain' src={authorImage} alt={authorName ? authorName : authorUserName} />
      <div>
        {authorName && <H3 className='text-slate-700'>{authorName}</H3>}
        <H4 className='text-slate-300 text-[.7rem]'>{authorUserName}</H4>
      </div>
    </div>
    <Followbutton />
  </div>
}

export default Displayuserquickinfor
