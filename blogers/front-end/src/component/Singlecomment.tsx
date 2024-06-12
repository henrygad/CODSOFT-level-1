import Displayuserquickinfor from './Displayuserquickinfor'
import { useGetUserQuicktInfor, useTripWrds } from '../hooks'
import tw from 'tailwind-styled-components'

const Singlecomment = ({ body, commentorUsername }: { body: string, commentorUsername: string }) => {
  const {getUserInfor} = useGetUserQuicktInfor()
  const {name, image} = getUserInfor({finder: commentorUsername})
  const [triped] = useTripWrds({body, num: 20, disableFn: true})

  return <div className=" border-b space-y-2 pb-2">
    <div className="flex gap-2 items-center">
      <Displayuserquickinfor authorImage={image} authorName={name} authorUserName={commentorUsername} />
    </div>
    <div className="pl-2">
      <Article> 
        <P>{triped}</P>
      </Article>
    </div>
  </div>
}

export default Singlecomment


const P = tw.p`
  text-stone-800 
   text-sm 
   font-text 
   max-w-[420px] 
   first-letter:capitalize
`
const Article = tw.article`
  
`
