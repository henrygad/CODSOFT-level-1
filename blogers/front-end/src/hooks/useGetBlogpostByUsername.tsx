import { blogpostdata } from "../database/blogpost"

const useGetBlogpostByUsername =() => {   
    return {getBlogposts: ({finder}: {finder: string})=>  blogpostdata.filter((items) => items.authorUserName === finder) }
}

export default useGetBlogpostByUsername
