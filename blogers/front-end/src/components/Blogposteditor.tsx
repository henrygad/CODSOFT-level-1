import Screenpanel from './Screenpanel'
import Nav from './Nav'
import { Navlist } from '../ui/List'
import { Input, Label, Textarea } from '../ui/form'
import Addnewimage from './Addnewimage'
import Mobilenav from './Mobilenav'
import { useState } from 'react'
import useContextBlogpost from '../hooks/useContextBlogpost'
import { NavLink} from 'react-router-dom'
import { useContextUserData, useCopyLinkBtn, useDeleteBlogpostBtn, useRedirectToEditPage } from '../hooks'

type Props = {
  toCreateNewBlogpost?: boolean
  id?: string
  titleExist?: string
  bodyExist?: string
  imageExist?: string
  slugExist?: string
  catigoryExist?: string
  tagsExist?: string
  Published?: boolean
}

const Blogposteditor = ({
  toCreateNewBlogpost,
  Published = false,
  id = 'incoming',  titleExist = '', bodyExist = '', imageExist = '', slugExist = '', catigoryExist = '', tagsExist = '',
}: Props) => {
  const { userData: {userName} } = useContextUserData()
  const {  dispatch } = useContextBlogpost()

  const { Displayimage, putImage } = Addnewimage({ image: imageExist })
  const [title, setTitle] = useState(titleExist)
  const [body, setBody] = useState(bodyExist)
  const [slug, setSlug] = useState(slugExist)
  const [catigory, setCatigory] = useState(catigoryExist)
  const [tags, setTags] = useState(tagsExist)
  const [isPublished, setIsPublised] = useState(Published)
  const [toEdit, setToEdit] = useState(toCreateNewBlogpost)

  const handleSlugPatter = (value: String, devidePatter: string) => {
    const spliteValue = value.split(' ')
    return spliteValue.join(`${devidePatter}`)
  }
  const slugPartter = handleSlugPatter(slug ? slug : title, '-')
  const altSlug = toCreateNewBlogpost ? slugPartter : slugExist
  const { deleteBlogpost } = useDeleteBlogpostBtn({id})
  const { Displayeditbtn } = useRedirectToEditPage({ authorUserName: userName, slug: altSlug })
  const { copyLink } = useCopyLinkBtn({ authorUserName: userName, slug: altSlug })

  const handleCleanUpInputs = () => {
    setTitle('')
    setBody('')
    setSlug('')
    setCatigory('')
    setTags('')
    setIsPublised(false)
  }

  const handleDisablePublishblogpostBtn = () => {
    if (toCreateNewBlogpost) {
      return isPublished
    } else return !toEdit
  }

  const handleAddBlogpost = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const bodyContent = {
      id,
      title,
      body,
      putImage,
      slug: altSlug,
      catigory,
      tags,
      authorUserName: userName
    }

    if (!altSlug) { console.log('no post was added') }
    else {
      if (toCreateNewBlogpost) {
        dispatch({ type: "CREATE_BLOGPOST", payload: bodyContent })
        setIsPublised(true)
      } else {
        dispatch({type: "EDIT_BLOGPOST", payload: {...bodyContent, id} })
        setToEdit(false)
      }
    }
  }


  return <form action="" className='w-full h-full space-y-8 md:space-y-0 md:flex' onSubmit={handleAddBlogpost}>
    <Screenpanel className='w-full md:w-[60%] min-h-full order-1' Children={
      <div className='h-full'>
        <div className='md:hidden'>
          <Mobilenav Children={
            <>
              {altSlug && <Navlist><button disabled={handleDisablePublishblogpostBtn()} type='submit' className='shadow-md p-1 rounded '>{!handleDisablePublishblogpostBtn() ? 'publish' : 'Published'}</button></Navlist>}
              {altSlug && !handleDisablePublishblogpostBtn() && <Navlist className='shadow-md p-1 rounded'><input type='button' value={'draff'} className='shadow-md p-1 rounded' /></Navlist>}
              {isPublished && <Navlist><input className='shadow-md p-1 rounded' type='button' value='delete' onClick={deleteBlogpost} /></Navlist>}
              {isPublished && <Navlist><input type='button' value='copyLink' className='shadow-md p-1 rounded' onClick={copyLink} /></Navlist>}
              {isPublished && toCreateNewBlogpost && <Navlist> <Displayeditbtn Children={
                <input type='button' value='edit' />
              } /> </Navlist>}
              {isPublished && <Navlist><NavLink to={`/${userName}/${altSlug}/post`}><input type='button' value='view' className='shadow-md p-1 rounded' /></NavLink></Navlist>}
              {isPublished && <Navlist><NavLink to='/createblogpost' ><input type='button' value='new blogpost' className='shadow-md p-1 rounded' onClick={handleCleanUpInputs} /></NavLink></Navlist>}
            </>
          } />
        </div>
        <div className='flex flex-col gap-10 px-4'>
          <div className='flex gap-2 items-center'>
            <Input className=' h-[50px]' placeholder='Title...' value={title} onChange={(e) => { setTitle(e.target.value); !toEdit && setToEdit(true) }} />
          </div>
          <div >
            <Textarea className='w-full min-h-[480px] md:min-h-[578px]' placeholder='Create a content..' value={body} onChange={(e) => { setBody(e.target.value); !toEdit && setToEdit(true) }} />
          </div>
        </div>
      </div>
    } enableAjduster={true} />
    <Screenpanel className='w-full md:w-[20%] order-2' Children={
      <div className='flex flex-col justify-center space-y-10 pl-2'>
        <div className='hidden md:block'>
          <Nav className="flex-col gap-2" Children={<>
            <>
              {altSlug && <Navlist><button disabled={handleDisablePublishblogpostBtn()} type='submit' className='shadow-md p-1 rounded '>{!handleDisablePublishblogpostBtn() ? 'publish' : 'Published'}</button></Navlist>}
              {altSlug && !handleDisablePublishblogpostBtn() && <Navlist className='shadow-md p-1 rounded'><input type='button' value={'draff'} className='shadow-md p-1 rounded' /></Navlist>}
              {isPublished && <Navlist><input className='shadow-md p-1 rounded' type='button' value='delete' onClick={deleteBlogpost} /></Navlist>}
              {isPublished && <Navlist><input type='button' value='copyLink' className='shadow-md p-1 rounded' onClick={copyLink} /></Navlist>}
              {isPublished && toCreateNewBlogpost && <Navlist> <Displayeditbtn Children={
                <input type='button' value='edit' />
              } /> </Navlist>}
              {isPublished && <Navlist><NavLink to={`/${userName}/${altSlug}/post`}><input type='button' value='view' className='shadow-md p-1 rounded' /></NavLink></Navlist>}
              {isPublished && <Navlist><NavLink to='/createblogpost' ><input type='button' value='new blogpost' className='shadow-md p-1 rounded' onClick={handleCleanUpInputs} /></NavLink></Navlist>}
            </>
          </>} />
        </div>
        <div className='space-y-2'>
          <div>
            <Label className='block' htmlFor='slug' >Add slug</Label>
            <Input id='slug' className='max-w-60' placeholder='create blogpost slug' value={altSlug} onChange={(e) => setSlug(e.target.value)} />
          </div>
          <div>
            <Label className='block'>Add image</Label>
            <Displayimage className='w-full h-60 object-contain max-w-60' />
          </div>
        </div>
      </div>
    } />
    <Screenpanel className='w-full md:w-[20%] min-h-full order-0' Children={
      <div className='flex flex-col gap-4 pr-1'>
        <div className='flex gap-2 items-center'>
          <Label className='text-sm'>Catigory</Label>
          <Input className='max-h-[36px] max-w-[180px]' placeholder='add catigory...' value={catigory} onChange={(e) => { setCatigory(e.target.value); !toEdit && setToEdit(true) }} />
        </div>
        <div className='flex gap-2 items-center'>
          <Label className='text-sm'>Tag</Label>
          <Input className='max-h-[36px] max-w-[180px]' placeholder='add tags...' value={tags} onChange={(e) => { setTags(e.target.value); !toEdit && setToEdit(true) }} />
        </div>
      </div>} enableAjduster={true} />
  </form>
}

export default Blogposteditor
