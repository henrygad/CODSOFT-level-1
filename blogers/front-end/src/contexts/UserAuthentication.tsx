import { ReactElement, createContext, useState } from "react"

type Contextprops = {
  isLogin: boolean
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>> 
  loginUser: string 
  setLoginUser: React.Dispatch<React.SetStateAction<string>>
}

export const Context = createContext<Contextprops | {}>({})


const userLogined: string  = localStorage.getItem('userLogined')

export const UserAuthentication = ({ Children }: { Children: ReactElement }) => {
  const [isLogin, setIsLogin] = useState(userLogined !== null)
  const [loginUser, setLoginUser] = useState(userLogined)


  return <Context.Provider value={{ isLogin, setIsLogin, loginUser, setLoginUser }}>
    {Children}
  </Context.Provider>
}

export default UserAuthentication
