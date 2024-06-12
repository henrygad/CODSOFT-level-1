import tw from 'tailwind-styled-components'
import {P, H2} from '../ui/Text'
import { Navlist } from '../ui/List'
import Mobilenav from './Mobilenav'
import Displayuserquickinfor from './Displayuserquickinfor'
import { useGetCommentByBlogpostId, useGetUserQuicktInfor, useTripWrds } from '../hooks'
import { Blogpostprops } from '../entities'

const Singlelogpost = ({id, authorUserName, slug, title, body, cartigory, tags, image, date, likes, views}: Blogpostprops) => {
     const [triped] = useTripWrds({body, num: 40, disableFn: false})
     const {getComments} = useGetCommentByBlogpostId()
     const {getUserInfor} = useGetUserQuicktInfor()
     const {name, image: authorImage} = getUserInfor({finder: authorUserName})

     const handleCopyLink =()=>{
        navigator.clipboard.writeText(`http://localhost:5173/${authorUserName}/${slug}`)
        .then(()=>console.log('copied'))
        .catch((err)=> console.log(err))
     }
     
  return  <Blogposttemplate id={id}>
           <Mobilenav Children={<>
                <Navlist onClick={handleCopyLink}>link</Navlist>
                <Navlist>delete</Navlist>
                <Navlist>edit</Navlist>
           </>} />
            <div><img className='w-full h-[160px] object-cover rounded' src={image} alt={title} /></div>
            <div><H2>{title}</H2></div>
            <div className=' front-text text-[.8rem] text-slate-600'>{date}</div>
            <div><P>{triped}</P></div>
            <div className='flex justify-between items-center flex-wrap gap-2'>
                <Displayuserquickinfor authorImage={authorImage} authorName={name} authorUserName={authorUserName} />
                <div className='flex justify-end items-center gap-4 front-text text-sm pl-2'>
                    <div>View: {views}</div> <div>Likes: {likes}</div> <div>Comments: {getComments({finder: authorUserName}).length}</div>
                </div>
            </div>
        </Blogposttemplate>
}

export default Singlelogpost

const Blogposttemplate = tw.article`
    min-w-[280px] 
    md:min-w-[580px] 
    max-w-[620px] 
    min-h-[280px] 
    border 
    shadow-sm
    rounded
    space-y-1
    p-2
`