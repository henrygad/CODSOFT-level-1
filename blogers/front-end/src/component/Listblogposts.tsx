import Singlelogpost from './Singlelogpost'
import Loadingblogpost from './Loadingblogpost'
import { Blogpostprops } from '../entities'


const Listblogposts = ( {blogposts}: {blogposts: Blogpostprops[]}) => {
  
  return <div className='space-y-8'>
    {blogposts? blogposts.map((items) =>
      <Singlelogpost key={items.id}
        id={items.id}
        authorUserName={items.authorUserName}
        slug={items.slug}
        title={items.title}
        body={items.body}
        cartigory={items.cartigory}
        tags={items.tags}
        image={items.image}
        date={items.date}
        likes={items.likes}
        views={items.views} />) :
      <Loadingblogpost />}
  </div>
}

export default Listblogposts
