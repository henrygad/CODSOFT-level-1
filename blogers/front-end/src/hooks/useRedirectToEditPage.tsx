import { ReactElement } from "react"
import { NavLink } from "react-router-dom"
import useContextAuthentication from "./useContextAuthentication"
import useContextLoginDialog from "./useContextLoginDialog"

const useRedirectToEditPage = ({ slug }: {slug: string }) => {
  const {isLogin} = useContextAuthentication()
  const {logingDialog, setLoginDialog} = useContextLoginDialog()

  return {
    Displayeditbtn: ({ Children }: { Children: ReactElement }) =>{
     if(isLogin) return <NavLink to={`/${slug}/editblogpost`}>{Children}</NavLink>
     else ()=> setLoginDialog(!logingDialog)
    }
  }
}

export default useRedirectToEditPage
