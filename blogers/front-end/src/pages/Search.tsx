import { useEffect, useRef, useState } from 'react'
import { useContextShowPageTitle, useReturnComponent } from '../hooks'
import { Allsearchresault, Blogpostssearchresault, Displayuserquickinfor, Groupssearchresault, Listblogposts, Nav, Profilessearchresault } from '../components'
import { blogpostdata } from '../database/blogpost'
import { userData } from '../database/userdata'
import { Navlist } from '../ui/List'
import { H4 } from '../ui/Text'

const Search = () => {
  const { setShowPageTitle } = useContextShowPageTitle()
  const [search, setSearch] = useState('')
  const [isFocus, setIsFocus] = useState(false)
  const [treadingBlogpost, settreadingBlogpost] = useState(blogpostdata)
  const [popularProfiles, setpopularProfiles] = useState(userData)
  const [blogpostsSearchResault, setBlogpostsSearchResault] = useState([])
  const [profilesSearchResault, setProfilesSearchResault] = useState([])
  const [loading, setLoading] = useState(false)
  const inputRef = useRef(null)

  useEffect(() => {
    setShowPageTitle('search')
    const handleFocus = () => setIsFocus(true)
    const handleBlur = () => setIsFocus(false)

    const inputElement = inputRef.current
    if (inputElement) {
      inputElement.addEventListener('focus', handleFocus)
      inputElement.addEventListener('blur', handleBlur)
    }

    return () => {
      if (inputElement) {
        inputElement.removeEventListener('focus', handleFocus)
        inputElement.removeEventListener('blur', handleBlur)
      }
    }

  }, [])

  const { Displayreturnedcomponent, setTo } = useReturnComponent((to) => {
    if (to === 'blogposts') return <Blogpostssearchresault blogpostsSearchResault={blogpostsSearchResault} />
    else if (to === 'profiles') return <Profilessearchresault profilesSearchResault={profilesSearchResault} />
    else if (to === 'groups') return <Groupssearchresault />
    return <Allsearchresault profilesSearchResault={popularProfiles} blogpostsSearchResault={treadingBlogpost} />
  })


  const handleSearchForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSearch('')
    inputRef.current?.focus()
  }


  return <main>
    <div className='container pt-4'>
      <div className='relative flex justify-center'>
        <div className={` absolute min-w-[280px] md:min-w-[320px] ${isFocus && 'min-w-[320px] md:min-w-[480px]'}`}>
          <form id='search form' action="" className="flex-1 flex flex-col  relative " onSubmit={handleSearchForm} >
            <input ref={inputRef} value={search} onChange={(e) => setSearch(e.target.value)} type="text" className="relative w-full h-10 text-text pl-4 pr-2 text-text text-sm text-slate-800 outline-none border-r border-l border-t rounded-t-lg z-[1]" placeholder="...Seach" />
            <button className=" absolute top-5 right-1 -translate-y-1/2 cursor-pointer bg-white text-sm text-secondary p-1 rounded-full text-slate-800 z-[2] ">
              <span className="bg-gray-50 rounded-full px-1 py-1" >search</span>
            </button>
            <div className={`${isFocus ? 'opacity-1' : 'opacity-0 hidden '} cursor-pointer w-full min-h-20 bg-white space-y-1 p-2 border-r border-l border-b rounded-b-lg z-[0]'`}>
              <div className='border-b p-1 flex justify-between'><p>how to start a blog in two days</p> <span>X</span></div>
              <div className='border-b p-1 flex justify-between'><p>js toturial</p> <span>X</span></div>
              <div className='border-b p-1 flex justify-between'><p>how to should i learn programmings</p> <span>X</span></div>
            </div>
          </form>
        </div>
      </div>
      <div className='space-y-4 pt-14'>
        <div>
          {!loading ? <Nav className='w-full flex justify-between items-end gap-4 border-b pb-1' Children={<>
            <Navlist><button onClick={() => setTo('all')}>all</button></Navlist>
            <Navlist><button onClick={() => setTo('blogposts')}>blogposts</button></Navlist>
            <Navlist><button onClick={() => setTo('profiles')}>profiles</button></Navlist>
            <Navlist><button onClick={() => setTo('groups')}>groups</button></Navlist>
          </>} /> :
            <div className='w-full'>
              <H4>Trading</H4>
            </div>
          }
        </div>

        <div className=''>
          <Displayreturnedcomponent />
        </div>

      </div>
    </div>
  </main>
}

export default Search
