import tw from 'tailwind-styled-components'
import { P, H2, Pdate } from '../ui/Text'
import { Navlist } from '../ui/List'
import Mobilenav from './Mobilenav'
import Displayuserquickinfor from './Userquickinfor'
import { useCopyLinkBtn, useDeleteBlogpostBtn, useRedirectToEditPage, useGetCommentByBlogpostId, useIsAccountOwner, useTripWrds, useLikeBtn } from '../hooks'
import { Blogpostprops } from '../entities'
import { NavLink } from 'react-router-dom'
import draftToHtml from 'draftjs-to-html'
import { Viewicon, Likeicon, Commenticon, CopyLinkicon, Deleteicon, Editicon } from './Icons'


const Singleblogpost = ({ id, authorUserName, slug, title, body, cartigory, tags, image, date, likes, views }: Blogpostprops) => {
    const { isOwnerOfAccount } = useIsAccountOwner({ authorizedUser: authorUserName })
    const { getComments } = useGetCommentByBlogpostId()
    const totalComments = getComments({ finder: id }).length
    const { copyLink } = useCopyLinkBtn({ authorUserName, slug })
    const { deleteBlogpost } = useDeleteBlogpostBtn({ id })
    const { Displayeditbtn } = useRedirectToEditPage({ slug })
    const [trippedTitle] = useTripWrds({ body: title, num: 6, disableFn: false })
    const { handleLike, isLiked } = useLikeBtn({ blogpostId: id })

    return <Article id={id}>
        <Mobilenav Children={<>
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
        <NavLink to={`/${authorUserName}/${slug}/post`}>
            <div><H2 className='text-wrap'>{trippedTitle}</H2></div>
            <div><Pdate>{date}</Pdate></div>
            <div className='space'>
                <img className='h-[80px] md:h-[100px] object-cover rounded float-right ml-1' src={image} alt={title} />
                <P className='line-clamp-5'>{body}</P>
            </div>
        </NavLink>
        <div className='flex justify-between items-center gap-2'>
            <Displayuserquickinfor authorUserName={authorUserName} disableFollowbtn={true} />
            <div className='flex justify-end items-center gap-4 front-text text-sm pl-2'>
                <Articlebtn onClick={handleLike}>
                    <Likeicon />
                    <Textdiv>{likes}</Textdiv>
                </Articlebtn>
                <NavLink to={`/${authorUserName}/${slug}/post/#comments`} >
                    <Articlebtn>
                        <Commenticon />
                        <Textdiv>{totalComments}</Textdiv>
                    </Articlebtn>
                </NavLink>
                <Articlebtn>
                    <Viewicon />
                    <Textdiv>{views}</Textdiv>
                </Articlebtn>
            </div>
        </div>
    </Article>
}

export default Singleblogpost

const Article = tw.article`
    min-w-[280px] 
    md:min-w-[580px] 
    max-w-[620px] 
    border-y
    rounded
    space-y-1
    px-4
    py-2
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