import { ReactElement, createContext, useState } from "react";

export const Context = createContext({})

const PageTitleUpdater = ({Children}: {Children: ReactElement}) => {
    const [displayPageTitle, setDisplayPageTitle] = useState('')

  return <Context.Provider value={{displayPageTitle, setDisplayPageTitle}}>
    {Children}
  </Context.Provider>
}

export default PageTitleUpdater
