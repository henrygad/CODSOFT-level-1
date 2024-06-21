import useContextBlogpost from "./useContextBlogpost"

const useDeleteBlogpostBtn = ({id}: {id:string }) => {
  const {dispatch} = useContextBlogpost()

  const deleteBlogpost = ()=>  dispatch({type: 'DELETE_BLOGPOST', payload: {id}})
  return { deleteBlogpost}
}

export default useDeleteBlogpostBtn
