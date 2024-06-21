import { commentsdata } from '../database/blogpostcomments'


const useGetCommentsByUsername = () => {
    const getComments = ({ finder }: { finder: string })=> commentsdata.filter((comments) => comments.commentorUsername === finder)
    return { getComments }
}

export default useGetCommentsByUsername
