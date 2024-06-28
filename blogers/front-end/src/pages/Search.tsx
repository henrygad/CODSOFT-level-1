import { useEffect, useRef, useState } from 'react'
import { useContextOnCreateBlogpost, useContextShowPageTitle, useReturnComponent } from '../hooks'
import { Allsearchresault, Blogpostssearchresault, Groupssearchresault, Nav, Profilessearchresault, Searchform } from '../components'
import { blogpostdata } from '../database/blogpost'
import { userData } from '../database/userdata'
import { Navlist } from '../ui/List'
import { H4 } from '../ui/Text'

const Search = () => {
  const { setShowPageTitle } = useContextShowPageTitle()
  const { setOnCreateBlogpost } = useContextOnCreateBlogpost()

  const [treadingBlogpost, settreadingBlogpost] = useState(blogpostdata)
  const [popularProfiles, setpopularProfiles] = useState(userData)
  const [blogpostsSearchResault, setBlogpostsSearchResault] = useState([])
  const [profilesSearchResault, setProfilesSearchResault] = useState([])
  const [loading, setLoading] = useState(false)

  const [search, setSearch] = useState('')

  useEffect(() => {
    setShowPageTitle('search')
    setOnCreateBlogpost(false)
  }, [])

  const { Displayreturnedcomponent, setTo } = useReturnComponent((to) => {
    if (to === 'blogposts') return <Blogpostssearchresault blogpostsSearchResault={blogpostsSearchResault} />
    else if (to === 'profiles') return <Profilessearchresault profilesSearchResault={profilesSearchResault} />
    else if (to === 'groups') return <Groupssearchresault />
    return <Allsearchresault profilesSearchResault={popularProfiles} blogpostsSearchResault={treadingBlogpost} />
  })




  return <main>
    <div className='container pt-4 pb-16'>
      <div className=''>
          <Searchform search={search} setSearch={setSearch} />
      </div>
      <div className='space-y-4 pt-14'>
        <div>
          {!loading ? <Nav className='w-full flex justify-between items-end gap-4 border-b pb-1' Children={<>
            <Navlist><button onClick={() => setTo('all')}>All</button></Navlist>
            <Navlist><button onClick={() => setTo('blogposts')}>Blogposts</button></Navlist>
            <Navlist><button onClick={() => setTo('profiles')}>Profiles</button></Navlist>
            <Navlist><button onClick={() => setTo('groups')}>Groups</button></Navlist>
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
