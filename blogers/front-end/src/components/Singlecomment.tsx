import Displayuserquickinfor from './Displayuserquickinfor'
import {useContextComments, useIsAccountOwner, useTripWrds } from '../hooks'
import tw from 'tailwind-styled-components'
import Mobilenav from './Mobilenav'
import { Navlist } from '../ui/List'
import { NavLink } from 'react-router-dom'

const Singlecomment = ({ body, commentorUsername, id}: { body: string, commentorUsername: string, id: string}) => {
  const {dispatch} = useContextComments()
  const [triped] = useTripWrds({ body, num: 20, disableFn: true })
  const {isOwnerOfAccount} = useIsAccountOwner({authorizedUser: commentorUsername})

  const handleDeleteComment = ()=>{
    dispatch({type: 'DELETE_COMMENT', payload: {id}})
    console.log(id)

  }

  return <div id={id} className="border-b space-y-2 pt-2 pb-2">
    <div className="flex justify-between gap-12">
      <Displayuserquickinfor authorUserName={commentorUsername} />
      <Mobilenav Children={
        <>
         {isOwnerOfAccount && <Navlist>
          <button onClick={handleDeleteComment} className='text-[.7rem] font-text text-red-800 '>delete</button>
          </Navlist>}
          <Navlist><NavLink to={''} ><button>Link</button></NavLink></Navlist>
        </>
       
      } />
    </div>
    <div className="pl-2 ">
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
