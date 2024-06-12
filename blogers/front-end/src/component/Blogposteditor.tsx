import Screenpanel from './Screenpanel'
import Nav from './Nav'
import { Navlist } from '../ui/List'
import { Input, Label, Textarea } from '../ui/form'
import image from '../assert/henryportfolioimg.png'
import Addnewimage from './Addnewimage'
import Mobilenav from './Mobilenav'


const Blogposteditor = ({ toCreateNewBlogpost, toEditBlogpost, navList }: { toCreateNewBlogpost?: boolean, toEditBlogpost?: boolean, navList?: string[] }) => {
  const { Displayimage } = Addnewimage({ image })
  const body = 'hdhdh'

  return {
    Displayeditor: () => <main className='mt-[70px] pb-10'>
        <form action="" className='container space-y-8 md:space-y-0 md:flex w-screen min-h-[80vh]'>
          <Screenpanel className='w-full md:w-[60%] min-h-full order-1' Children={
            <div className='h-full'>
              <div className='md:hidden'>
                <Mobilenav Children={
                  <>
                    {navList && navList.map((items) => <Navlist className='shadow-md p-1 rounded'>{items}</Navlist>)}
                  </>
                } />
              </div>
              <div className='flex flex-col gap-10 px-4'>
                <div className='flex gap-2 items-center'>
                  <Input className=' h-[50px]' placeholder='Title...' />
                </div>
                <div >
                  <Textarea className='w-full min-h-[480px] md:min-h-[578px]' placeholder='Create a content..' />
                </div>
              </div>
            </div>
          } enableAjduster={true} />
          <Screenpanel className='w-full md:w-[20%] order-2' Children={
            <div className='flex flex-col justify-center space-y-10 pl-2'>
              <div className='hidden md:block'>
                <Nav className="flex-col gap-2" Children={<>
                  {navList && navList.map((items) => <Navlist className='shadow-md p-1 rounded'>{items}</Navlist>)}
                </>} />
              </div>
              <div className='space-y-2'>
                <div>
                  <Label className='block'>Add slug</Label>
                  <Input className='max-w-60' />
                </div>
                <div>
                  <Label className='block'>Add image</Label>
                  <Displayimage className='w-full h-60 object-contain max-w-60' />
                </div>
              </div>
            </div>
          } />
          <Screenpanel className='w-full md:w-[20%] min-h-full order-0' Children={
            <div className='flex flex-col gap-4 px-2'>
              <div className='flex gap-2 items-center'>
                <Label>Catigory</Label>
                <Input className='max-h-[36px] max-w-[180px]' />
              </div>
              <div className='flex gap-2 items-center'>
                <Label>Tag</Label>
                <Input className='max-h-[36px] max-w-[180px]' />
              </div>
            </div>} enableAjduster={true} />
        </form>  
    </main>, body
  }
}

export default Blogposteditor
