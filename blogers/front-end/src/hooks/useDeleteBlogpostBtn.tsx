import useContextAuthentication from "./useContextAuthentication"
import useContextBlogpost from "./useContextBlogpost"
import useContextLoginDialog from "./useContextLoginDialog"

const useDeleteBlogpostBtn = ({id}: {id:string}) => {
  const {dispatch} = useContextBlogpost()
  const {isLogin} = useContextAuthentication()
  const {logingDialog, setLoginDialog} = useContextLoginDialog()
  
  const deleteBlogpost = ()=>{  
    if(isLogin) dispatch({type: 'DELETE_BLOGPOST', payload: {id}})
    else setLoginDialog(!logingDialog)
  }
  return { deleteBlogpost}
}

export default useDeleteBlogpostBtn
