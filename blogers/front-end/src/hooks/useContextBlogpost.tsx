import { Context } from "../contexts/BlogpostData"
import { useContext } from "react"

const useContextBlogpost = () => {
    const {state, dispatch} = useContext(Context)
    const blogPost = state.Blogpost
  return {blogPost, dispatch}
}

export default useContextBlogpost
