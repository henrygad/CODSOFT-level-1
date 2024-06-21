import Singlelogpost from './Singlelogpost'
import Loadingblogpost from './Loadingblogpost'
import { Blogpostprops } from '../entities'
import { useState } from 'react'


const Listblogposts = ({ blogposts, defaultPerLoad = 6}: { blogposts: Blogpostprops[], defaultPerLoad?: number }) => {
  const [perLoad, setPerLoad] = useState(defaultPerLoad)
  const handleSeeMoreBlogpost = () => {
    if(blogposts.length <= perLoad){
      setPerLoad(defaultPerLoad)
    }else setPerLoad(defaultPerLoad += perLoad)
  }

  const handleLoadMoreBlogpost = () => {
    ///refresh the page
  }

  return <div className='space-y-2'>
    <div className='space-y-8'>
      {blogposts ?
        blogposts.map((blogpost, index) => index >= perLoad ? '' : <Singlelogpost key={blogpost.id} id={blogpost.id} authorUserName={blogpost.authorUserName} slug={blogpost.slug} title={blogpost.title} body={blogpost.body} cartigory={blogpost.cartigory} tags={blogpost.tags} image={blogpost.image} date={blogpost.date} likes={blogpost.likes} views={blogpost.views} />) :
        <Loadingblogpost />
      }
    </div>

    { blogposts.length > defaultPerLoad && <div className='flex justify-center items-center'> <button onClick={handleSeeMoreBlogpost} className='text-slate-700 text-sm font-text font-semibold'>{blogposts.length <= perLoad ? 'see less' : 'see more'}</button></div>}
  </div>

}

export default Listblogposts
