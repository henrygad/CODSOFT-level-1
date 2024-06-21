import React, { useContext } from 'react'
import { Context } from '../contexts/LoginDialog'

const useContextLoginDialog = () => {
    const Props = useContext(Context)
    const { logingDialog, setLoginDialog } = Props

    return { logingDialog, setLoginDialog }
}

export default useContextLoginDialog
