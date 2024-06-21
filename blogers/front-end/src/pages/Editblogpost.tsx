import { useParams } from 'react-router-dom'
import { Blogposteditor } from '../components'
import { useContextAuthentication, useContextBlogpost, useContextShowPageTitle } from '../hooks'
import { useEffect } from 'react'

const Editblogpost = () => {
  //becouse we are fetching the data from the current user
  const {slug} = useParams()
  const {loginUser} = useContextAuthentication()
  const {blogPost} = useContextBlogpost()
  const fetchBlogpost = blogPost.find((blogpost: {authorUserName: string, slug: string})=> blogpost.authorUserName === loginUser && blogpost.slug === slug)
  const {setShowPageTitle} = useContextShowPageTitle()

  useEffect(()=>{setShowPageTitle('edit blogpost')}, [])

  const Displayeditor= Blogposteditor({ 
    toCreateNewBlogpost: false, 
    id: fetchBlogpost?.id,
    imageExist: fetchBlogpost?.image,
    titleExist: fetchBlogpost?.title,
    bodyExist: fetchBlogpost?.body,
    slugExist: fetchBlogpost?.slug,
    catigoryExist: fetchBlogpost?.cartigory,
    tagsExist: fetchBlogpost?.tags,
    Published: fetchBlogpost?.Published
  })

  return <main>
    <div className=" container w-screen min-h-[80vh] pt-4">
      {Displayeditor}
    </div>
  </main>
}

export default Editblogpost
