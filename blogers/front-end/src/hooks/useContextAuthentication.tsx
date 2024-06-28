import { useContext } from "react"
import { Context } from "../contexts/UserAuthentication"

const useContextAuthentication = () => {
   const props = useContext(Context)
   const isLogin = props?.isLogin
   const setIsLogin = props?.setIsLogin
   const loginUser = props?.loginUser
   const setLoginUser = props?.setLoginUser

   return {isLogin,  setIsLogin, loginUser, setLoginUser }
}

export default useContextAuthentication
