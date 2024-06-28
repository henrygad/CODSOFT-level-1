import { ReactElement, createContext, useState } from "react";

type Contextprops = {
  displayPageTitle: string,
  setDisplayPageTitle: React.Dispatch<React.SetStateAction<string>>
}

export const Context = createContext<Contextprops | {}>({})

const PageTitleUpdater = ({ Children }: { Children: ReactElement }) => {
  const [displayPageTitle, setDisplayPageTitle] = useState('')

  return <Context.Provider value={{ displayPageTitle, setDisplayPageTitle }}>
    {Children}
  </Context.Provider>
}

export default PageTitleUpdater
