import tw from 'tailwind-styled-components'
import { P, H2 } from '../ui/Text'
import { Navlist } from '../ui/List'
import Mobilenav from './Mobilenav'
import Displayuserquickinfor from './Displayuserquickinfor'
import { useCopyLinkBtn, useDeleteBlogpostBtn, useRedirectToEditPage, useGetCommentByBlogpostId, useTripWrds, useIsAccountOwner } from '../hooks'
import { Blogpostprops } from '../entities'
import { NavLink } from 'react-router-dom'

const Singlelogpost = ({ id, authorUserName, slug, title, body, cartigory, tags, image, date, likes, views }: Blogpostprops) => {
    const { isOwnerOfAccount } = useIsAccountOwner({ authorizedUser: authorUserName })
    const [triped] = useTripWrds({ body, num: 40, disableFn: false })
    const { getComments } = useGetCommentByBlogpostId()
    const totalComments = getComments({ finder: id }).length
    const { copyLink } = useCopyLinkBtn({ authorUserName, slug })
    const { deleteBlogpost } = useDeleteBlogpostBtn({id})
    const { Displayeditbtn } = useRedirectToEditPage({ authorUserName, slug })

    return <Blogposttemplate id={id}>
        <Mobilenav Children={<>
            <Navlist><button onClick={copyLink}>copyLink</button></Navlist>
            {isOwnerOfAccount && <>
                <Navlist><button onClick={deleteBlogpost}>delete</button></Navlist>
                <Navlist><Displayeditbtn Children={<button>edit</button>} /></Navlist>
            </>}
        </>} />
        <NavLink to={`/${authorUserName}/${slug}/post`}>
            <div><img className='w-full h-[160px] object-cover rounded' src={image} alt={title} /></div>
            <div><H2 className='hover:text-green-800' >{title}</H2></div>
            <div className=' front-text text-[.8rem] text-slate-600'>{date}</div>
            <div><P>{triped}</P></div>
        </NavLink>
        <div className='flex justify-between items-center flex-wrap gap-2'>
            <Displayuserquickinfor authorUserName={authorUserName} />
            <div className='flex justify-end items-center gap-4 front-text text-sm pl-2'>
                {views && <div>View: {views}</div>} {likes && <div>Likes: {likes}</div>}  {totalComments ? <NavLink to={`/${authorUserName}/${slug}/post/#comments`} ><div>Comments: {totalComments}</div></NavLink> : ''}
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