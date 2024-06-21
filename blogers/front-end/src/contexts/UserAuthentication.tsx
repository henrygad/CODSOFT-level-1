import { ReactElement, createContext, useState } from "react"


export const Context = createContext({})


const userLogined: string  = localStorage.getItem('userLogined')

export const UserAuthentication = ({ Children }: { Children: ReactElement }) => {
  const [isLogin, setIsLogin] = useState(userLogined !== null)
  const [loginUser, setLoginUser] = useState(userLogined)


  return <Context.Provider value={{ isLogin, setIsLogin, loginUser, setLoginUser }}>
    {Children}
  </Context.Provider>
}

export default UserAuthentication
