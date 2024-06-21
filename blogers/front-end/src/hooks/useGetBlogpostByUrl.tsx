import { blogpostdata } from '../database/blogpost'

const useGetBlogpostByUrl = () => {
  return {getBlogpostsByUrl: ({authorUserName, slug }: {authorUserName: string, slug: string})=>  blogpostdata.find((items) => items.authorUserName === authorUserName && items.slug === slug) }
}

export default useGetBlogpostByUrl

