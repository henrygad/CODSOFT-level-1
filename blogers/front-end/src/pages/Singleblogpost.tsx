import tw from "tailwind-styled-components"
import { Commenteditor, Displayuserquickinfor, Mobilenav, Singlecomment } from "../component"
import { blogpostdata } from "../database/blogpost"
import { useGetCommentByBlogpostId, useGetUserQuicktInfor } from "../hooks"
import {P, H2} from '../ui/Text'
import { Navlist } from "../ui/List"

const Singleblogpost = () => {
  const authorUserName = '@henrygad'
  const slug = 'how-to-create-a-blog-post-in-two-seconds'
  const getBlogpost = blogpostdata.find((items)=> items.authorUserName == authorUserName && items.slug === slug )

  const {getUserInfor} = useGetUserQuicktInfor()
  const {name, image} = getUserInfor({finder: authorUserName})
  const {getComments} = useGetCommentByBlogpostId()
  const comments = getComments({finder: getBlogpost.id})
  

  return <main className="mt-16 pb-10">
    <div className=" container">
      <Article>
        <div className=" w-full flex justify-between">
          <Displayuserquickinfor authorImage={image} authorUserName={authorUserName} authorName={name} />
          <Mobilenav Children={<>
                <Navlist>link</Navlist>
                <Navlist>edit</Navlist>
           </>} />
        </div>
        <div>
          <H2>{getBlogpost?.title}</H2>
          <div className='front-text text-[.8rem] text-slate-600 p-1'>Last updated {getBlogpost?.date}</div>
        </div>
        <div className=' flex items-center gap-4 front-text text-sm pl-1'>
           <div>View: {getBlogpost?.views}</div> <div>Likes: {getBlogpost?.likes}</div> <div>Comments: {comments.length}</div>
        </div>
        <div><P>{getBlogpost?.body}</P></div>
      </Article >
      <div  className="mt-10 border-t pt-4">
        <div><Commenteditor /></div>
        <div className=" mt-10 space-y-8">
          <div className="text-base font-semibold font-secondary text-slate-600">Comments</div>
          {
            comments&& comments.map((items)=> 
              <Singlecomment 
                body={items.body} 
                commentorUsername={items.commentorUsername} />
            )
          }</div>
      </div>
    </div>
  </main>
}

export default Singleblogpost

const Article = tw.article`
  space-y-2 
  md:space-y-4
`
