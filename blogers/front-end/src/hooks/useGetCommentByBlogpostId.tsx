import { commentsdata } from "../database/blogpostcomments"

const useGetCommentByBlogpostId = () => {   
  return {getComments: ({finder}: {finder: string})=> commentsdata.filter((comment) => comment.blogpostId === finder) }
}


export default useGetCommentByBlogpostId
