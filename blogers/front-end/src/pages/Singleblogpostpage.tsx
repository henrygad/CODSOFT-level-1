import tw from "tailwind-styled-components"
import { Commenteditor, Userquickinfor, Mobilenav, Singlecomment, CopyLinkicon, Likeicon, Commenticon, Viewicon,  Editicon, Deleteicon} from "../components"
import { useCopyLinkBtn, useRedirectToEditPage, useGetCommentByBlogpostId, useGetBlogpostByUrl, useDeleteBlogpostBtn, useIsAccountOwner, useContextComments, useContextShowPageTitle, useLikeBtn } from "../hooks"
import { P, H2, Pdate } from '../ui/Text'
import { Navlist } from "../ui/List"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { blogpostdata } from "../database/blogpost"

const Singleblogpostpage = () => {
  const { authorUserName, slug } = useParams()

  if (!authorUserName || !slug) return;

  const { isOwnerOfAccount } = useIsAccountOwner({ authorizedUser: authorUserName })
  const { setShowPageTitle } = useContextShowPageTitle()

  const { getBlogpostsByUrl } = useGetBlogpostByUrl()
  const { getComments } = useGetCommentByBlogpostId()
  const { comments, dispatch } = useContextComments()
  const getBlogpost = getBlogpostsByUrl({ authorUserName, slug })
  const { handleLike, isLiked } = useLikeBtn({ blogpostId: getBlogpost.id })

  if (!getBlogpost) return

  useEffect(() => {
    setShowPageTitle('reading')
    const fetchComments = getComments({ finder: getBlogpost.id })
    dispatch({ type: 'DISPLAY_COMMENTS', payload: fetchComments })
  }, [authorUserName, slug])

  const { Displayeditbtn } = useRedirectToEditPage({ slug: getBlogpost.slug })
  const { copyLink } = useCopyLinkBtn({ authorUserName: getBlogpost.authorUserName, slug: getBlogpost.slug })
  const { deleteBlogpost } = useDeleteBlogpostBtn({ id: getBlogpost.id })

  return <main>
    <div className=" container mt-4 pb-16">
      <Article>
        <div className=" w-full flex justify-between">
          <Userquickinfor authorUserName={authorUserName} />
          <Mobilenav className="w-full" Children={<>
            <Navlist>
              <Articlebtn className='transition-transform scale-90 active:scale-100' onClick={copyLink}>
                <CopyLinkicon />
                <Textdiv>Copy link</Textdiv>
              </Articlebtn>
            </Navlist>
            {isOwnerOfAccount && <>
              <Navlist>
                    <Displayeditbtn Children={
                        <Articlebtn className='transition-transform scale-90 active:scale-100'>
                            <Editicon />
                            edit
                        </Articlebtn>
                    } />
                </Navlist>
                <Navlist>
                    <Articlebtn className='transition-transform scale-90 active:scale-100' onClick={deleteBlogpost}>
                        <Deleteicon />
                        Delete
                    </ Articlebtn>
                </Navlist>
            </>}
          </>} />
        </div>
        <div>
          <H2>{getBlogpost.title}</H2>
          <div><Pdate>Last updated {getBlogpost.date}</Pdate> </div>
        </div>
        <div><img className='w-full h-[280px] sm:h-[320px] md:h-[480px] object-cover rounded' src={getBlogpost.image} alt={getBlogpost.title} /></div>
        <div><P>{getBlogpost?.body}</P></div>
        <div className=' flex items-center gap-4 front-text text-sm pl-1'>
          <Articlebtn onClick={handleLike}>
            <Likeicon />
            <Textdiv>{getBlogpost.likes}</Textdiv>
          </Articlebtn>
          <Articlebtn>
            <Commenticon />
            <Textdiv>{comments.length}</Textdiv>
          </Articlebtn>

          <Articlebtn>
            <Viewicon />
            <Textdiv>{getBlogpost.views}</Textdiv>
          </Articlebtn>
        </div>
      </Article >
      <div className="mt-10 border-t pt-4">
        <div><Commenteditor blogpostId={getBlogpost.id} /></div>
        <div className=" mt-10 space-y-8">
          <div id="comments" className="text-base font-semibold font-secondary text-slate-600">Comments</div>
          <div className=" flex flex-col items-start">
            {comments && comments.map((items: { id: string, body: string, commentorUsername: string }) =>
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
const Textdiv = tw.div`
    font-secondary 
    text-sm 
`

const Articlebtn = tw.button`
    flex 
    items-center 
    gap-1
`
