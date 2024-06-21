import tw from "tailwind-styled-components"
import { Commenteditor, Displayuserquickinfor, Mobilenav, Singlecomment } from "../components"
import { useCopyLinkBtn, useRedirectToEditPage, useGetCommentByBlogpostId, useGetBlogpostByUrl, useDeleteBlogpostBtn, useIsAccountOwner, useContextComments, useContextShowPageTitle } from "../hooks"
import { P, H2 } from '../ui/Text'
import { Navlist } from "../ui/List"
import { useParams } from "react-router-dom"
import { useEffect } from "react"

const Singleblogpostpage = () => {
  const { authorUserName, slug } = useParams()

  if (!authorUserName || !slug) return;
  
  const { isOwnerOfAccount } = useIsAccountOwner({ authorizedUser: authorUserName })
  const { setShowPageTitle } = useContextShowPageTitle()

  const { getBlogpostsByUrl } = useGetBlogpostByUrl()
  const { getComments } = useGetCommentByBlogpostId()
  const { comments, dispatch } = useContextComments()
  const getBlogpost = getBlogpostsByUrl({ authorUserName, slug })

  if(!getBlogpost) return

  useEffect(() => {
    setShowPageTitle('reading')
    const fetchComments = getComments({ finder: getBlogpost.id })
    dispatch({ type: 'DISPLAY_COMMENTS', payload: fetchComments })
  }, [authorUserName, slug])

  const { Displayeditbtn } = useRedirectToEditPage({ authorUserName: getBlogpost.authorUserName, slug: getBlogpost.slug })
  const { copyLink } = useCopyLinkBtn({ authorUserName: getBlogpost.authorUserName, slug: getBlogpost.slug })
  const { deleteBlogpost } = useDeleteBlogpostBtn({id: getBlogpost.id})

  return <main>
    <div className=" container mt-4">
      <Article>
        <div className=" w-full flex justify-between">
          <Displayuserquickinfor authorUserName={authorUserName} />
          <Mobilenav Children={<>
            <Navlist><button onClick={copyLink}>copyLink</button></Navlist>
            {isOwnerOfAccount && <>
              <Navlist><Displayeditbtn Children={<button>edit</button>} /></Navlist>
              <Navlist><button onClick={deleteBlogpost}>delete</button></Navlist>
            </>}
          </>} />
        </div>
        <div>
          <H2>{getBlogpost.title}</H2>
          <div className='front-text text-[.8rem] text-slate-600 p-1'>Last updated {getBlogpost.date}</div>
        </div>
        <div className=' flex items-center gap-4 front-text text-sm pl-1'>
          <div>View: {getBlogpost.views}</div> <div>Likes: {getBlogpost.likes}</div> <div>Comments: {comments.length}</div>
        </div>
        <div><P>{getBlogpost?.body}</P></div>
      </Article >
      <div className="mt-10 border-t pt-4">
        <div><Commenteditor blogpostId={getBlogpost.id} /></div>
        <div className=" mt-10 space-y-8">
          <div id="comments" className="text-base font-semibold font-secondary text-slate-600">Comments</div>
          <div className=" flex flex-col items-start">
            {comments && comments.map((items: {id: string, body: string, commentorUsername: string }) =>
              <Singlecomment
                key={items.id}
                id={items.id}
                body={items.body}
                commentorUsername={items.commentorUsername} />)
            }
          </div>
        </div>
      </div>
    </div>
  </main>
}

export default Singleblogpostpage

const Article = tw.article`
  space-y-2 
  md:space-y-4
`
