import { ReactElement } from "react"
import { NavLink } from "react-router-dom"

const useRedirectToEditPage = ({authorUserName, slug}: {authorUserName:string, slug: string}) => {
  return {Displayeditbtn: ({Children}: {Children: ReactElement})=> <NavLink to={`/${slug}/editblogpost`}>{Children}</NavLink>}
}
export default useRedirectToEditPage
