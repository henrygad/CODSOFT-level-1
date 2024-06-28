import { Context } from "../contexts/BlogpostData"
import { useContext } from "react"

const useContextBlogpost = () => {
  const props = useContext(Context)
  
  const dispatch = props?.dispatch
  const blogPost = props?.state.Blogpost
  return { blogPost, dispatch }
}

export default useContextBlogpost
