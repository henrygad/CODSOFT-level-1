import Displayuserquickinfor from './Userquickinfor'
import { useContextComments, useCopyLinkBtn, useIsAccountOwner, useTripWrds } from '../hooks'
import tw from 'tailwind-styled-components'
import Mobilenav from './Mobilenav'
import { Navlist } from '../ui/List'
import { NavLink } from 'react-router-dom'
import { Psm, P } from '../ui/Text'
import { Deleteicon, CopyLinkicon } from './Icons'

const Singlecomment = ({ body, commentorUsername, id }: { body: string, commentorUsername: string, id: string }) => {
  const { dispatch } = useContextComments()
  const [triped] = useTripWrds({ body, num: 20, disableFn: true })
  const { isOwnerOfAccount } = useIsAccountOwner({ authorizedUser: commentorUsername })
  const { copyLink } = useCopyLinkBtn({ authorUserName: commentorUsername, slug: 'hhh' })
  

  const handleDeleteComment = () => {
    dispatch({ type: 'DELETE_COMMENT', payload: { id } })
    console.log(id)

  }

  return <div id={id} className="border-b space-y-2 pt-2 pb-2">
    <div className="flex justify-between gap-12">
      <Displayuserquickinfor authorUserName={commentorUsername} />
      <Mobilenav className='w-full' Children={
        <>
          <Navlist>
            <NavLink to={''} >
              <Articlebtn className='transition-transform scale-90 active:scale-100' onClick={copyLink}>
                <CopyLinkicon />
                <Textdiv>Copy link</Textdiv>
              </Articlebtn>
            </NavLink>
          </Navlist>
          {isOwnerOfAccount &&
            <Articlebtn className='transition-transform scale-90 active:scale-100' onClick={ handleDeleteComment}>
              <Deleteicon />
              <Textdiv>Delete</Textdiv>
            </ Articlebtn>
          }
        </>

      } />
    </div>
    <div className="pl-2 ">
      <Article>
        <P className='max-w-[420px] first-letter:capitalize'>{triped}</P>
      </Article>
    </div>
  </div>
}

export default Singlecomment

const Article = tw.article`
  
`
const Articlebtn = tw.button`
    flex 
    items-center 
    gap-1
`
const Textdiv = tw.div`
    font-secondary 
    text-sm 
`
