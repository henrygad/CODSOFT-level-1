import React, { ReactElement, createContext, useState } from 'react'

type Contextprops = {
    logingDialog: boolean,
    setLoginDialog: React.Dispatch<React.SetStateAction<boolean>>
}

export const Context = createContext<Contextprops | {}>({})

const LoginDialog = ({ Children }: { Children: ReactElement }) => {
    const [logingDialog, setLoginDialog] = useState(false)

    return <Context.Provider value={{ logingDialog, setLoginDialog }}>
        {Children}
    </Context.Provider>
}

export default LoginDialog
