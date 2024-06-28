import Singleblogpost from './Singleblogpost'
import Loadingblogpost from './Loadingblogpost'
import { Blogpostprops } from '../entities'
import { useSeeMore } from '../hooks'

const Listblogposts = ({ blogposts, defaultPerLoad = 6 }: { blogposts: Blogpostprops[], defaultPerLoad?: number }) => {
  const { perLoad, Displayseemore } = useSeeMore({ arrLength: blogposts.length, defaultPerLoad })

  return <div className='space-y-2'>
    {blogposts ?
      blogposts.map((blogpost, index) => index >= perLoad ? '' : <Singleblogpost  key={blogpost.id} id={blogpost.id} authorUserName={blogpost.authorUserName} slug={blogpost.slug} title={blogpost.title} body={blogpost.body} cartigory={blogpost.cartigory} tags={blogpost.tags} image={blogpost.image} date={blogpost.date} likes={blogpost.likes} views={blogpost.views} Published={blogpost.Published} />) :
      <Loadingblogpost />
    }
    <Displayseemore />
  </div>

}

export default Listblogposts
