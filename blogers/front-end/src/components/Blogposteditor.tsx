import Screenpanel from './Screenpanel'
import Nav from './Nav'
import { Navlist } from '../ui/List'
import { Input, Label } from '../ui/form'
import Addnewimage from './Addnewimage'
import Mobilenav from './Mobilenav'
import { useEffect, useState } from 'react'
import useContextBlogpost from '../hooks/useContextBlogpost'
import { NavLink, useNavigate } from 'react-router-dom'
import { useContextAuthentication, useCopyLinkBtn, useDeleteBlogpostBtn } from '../hooks'
import Bodytexteditor from './Bodytexteditor'
import Titletexteditor from './Titletexteditor'


type Editblogpostprops = {
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

const Blogposteditor = ({ toCreateNewBlogpost, Published = false, id = 'ddhdh', titleExist = '', bodyExist = '', imageExist = '', slugExist = '', catigoryExist = '', tagsExist = '' }: Editblogpostprops) => {

  const { loginUser } = useContextAuthentication()
  const { dispatch } = useContextBlogpost()

  const { Displaybodyeditor, bodyContextJS } = Bodytexteditor({ body: bodyExist })
  const { Displaytitleeditor, titleContextJS } = Titletexteditor({ title: titleExist })
  const { Displayimageinput, getImage, isImageChanged, setisImageChanged } = Addnewimage({ image: imageExist })
  const [slug, setSlug] = useState(slugExist)
  const [catigory, setCatigory] = useState(catigoryExist)
  const [tags, setTags] = useState(tagsExist)

  const [isPublished, setIsPublised] = useState(Published)
  const [toEdit, setToEdit] = useState(toCreateNewBlogpost)

  const handleSlug = ({ slug, title = ' ', pattern }: { slug: string, title: string | undefined, pattern: string }) => {
    if (slug) {
      return createSlug(slug, pattern)
    } else if (!slug && title) {
      return createSlug(title, pattern)
    }

    function createSlug(value: String, pattern: string = '-') {
      const spliteValue = value.split(' ')
      return spliteValue.join(`${pattern}`)
    }
  }
  const altSlug = handleSlug({ slug, title: titleContextJS?.blocks[0].text, pattern: '-' })

  const { deleteBlogpost } = useDeleteBlogpostBtn({ id })
  const { copyLink } = useCopyLinkBtn({ authorUserName: loginUser, slug: altSlug })
  const navigateToEdit = useNavigate()

  const handleDisablePublishblogpostBtn = () => {
    if (toCreateNewBlogpost) {
      return isPublished
    } else return !toEdit
  }

  const Globalnavlist = () => {
    return <>
      {altSlug && <Navlist><button disabled={handleDisablePublishblogpostBtn()} type='submit'>{!handleDisablePublishblogpostBtn() ? 'Publish' : 'Published'}</button></Navlist>}
      {altSlug && !handleDisablePublishblogpostBtn() && <Navlist ><input type='button' value={'Draft'} /></Navlist>}
      {isPublished && <Navlist><input type='button' value='Delete' onClick={deleteBlogpost} /></Navlist>}
      {isPublished && <Navlist><input type='button' value='CopyLink' onClick={copyLink} /></Navlist>}
      {isPublished && <Navlist><NavLink to={`/${loginUser}/${altSlug}/post`}><input type='button' value='View' /></NavLink></Navlist>}
      {isPublished && <Navlist><NavLink to='/createblogpost' ><input type='button' value='New blogpost' /></NavLink></Navlist>}
    </>
  }

  const handlePublishBlogpost = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const bodyContent = {
      id,
      body: bodyContextJS,
      title: titleContextJS,
      image: getImage,
      slug: altSlug,
      catigory,
      tags,
      authorUserName: loginUser
    }

    if (!altSlug) { console.log('no post was added') }
    else {
      if (toCreateNewBlogpost) {
        dispatch({ type: "CREATE_BLOGPOST", payload: bodyContent })
        setIsPublised(true)
      } else {
        dispatch({ type: "EDIT_BLOGPOST", payload: { ...bodyContent, id } })
        setToEdit(false)
      }

      navigateToEdit(`/${altSlug}/editblogpost`)
    }
  }


  return <form action="" className='block md:flex flex-wrap md:flex-nowrap justify-start gap-6 md:gap-0 w-full h-full' onSubmit={handlePublishBlogpost}>
    <Screenpanel order={1} initailWidth={640} minWidth={320} maxWidth={2000} mobileDefaultWidth={380} dragEle={true} Children={
      <div className='h-full'>
        <div className='md:hidden h-[30px]'>
          <Mobilenav Children={<Globalnavlist />} />
        </div>
        <div className='flex flex-col gap-10'>
          <div >
            <Displaytitleeditor />
          </div>
          <div>
            <Displaybodyeditor />
          </div>
        </div>
      </div>
    } />
    <Screenpanel full={true} order={2} initailWidth={320} minWidth={200} maxWidth={320} mobileDefaultWidth={380} dragEle={false} Children={
      <div className='flex flex-col items-start w-full space-y-10'>
        <div className='hidden md:block'>
          <Nav className="flex-col gap-2" Children={<Globalnavlist />} />
        </div>
        <div className='w-full space-y-3'>
          <div>
            <Label className='block' htmlFor='slug' >Add slug</Label>
            <Input id='slug' className='max-h-[36px]' placeholder='create blogpost slug' value={altSlug ? altSlug : slug} onChange={(e) => toCreateNewBlogpost ? setSlug(e.target.value) : ''} />
          </div>
          <div>
            <Label className='block'>Add media</Label>
            <div className='w-auto h-auto space-y-6'>
              <div className='border-b w-full p-2'>
                <Displayimageinput />
              </div>
              <div className='w-full '>
                {getImage && <img src={getImage} alt="" className='w-40 h-40 md:w-full md:h-full object-contain' />}
              </div>
            </div>
          </div>
        </div>
      </div>
    } />
    <Screenpanel order={0} initailWidth={320} minWidth={200} maxWidth={320} mobileDefaultWidth={380} dragEle={true}  Children={
      <div className='flex flex-col gap-4 w-full'>
        <div className='flex gap-2 items-center'>
          <Label className='text-sm'>Catigory</Label>
          <Input className='max-h-[36px] ' placeholder='add catigory...' value={catigory} onChange={(e) => { setCatigory(e.target.value); !toEdit && setToEdit(true) }} />
        </div>
        <div className='flex gap-2 items-center'>
          <Label className='text-sm'>Tag</Label>
          <Input className='max-h-[36px]' placeholder='add tags...' value={tags} onChange={(e) => { setTags(e.target.value); !toEdit && setToEdit(true) }} />
        </div>
      </div>
    } />
  </form>
}

export default Blogposteditor
