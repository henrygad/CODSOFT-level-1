import React, { ReactElement, createContext, useState } from 'react'


export const Context = createContext({})

const LoginDialog = ({Children}: {Children:ReactElement}) => {
    const [logingDialog, setLoginDialog] = useState(false)

    return <Context.Provider value={{logingDialog, setLoginDialog}}>
        {Children}
    </Context.Provider>
}

export default LoginDialog
