import React, { useContext } from 'react'
import { Context } from '../contexts/LoginDialog'

const useContextLoginDialog = () => {
    const props = useContext(Context)
    const logingDialog = props?.logingDialog
    const setLoginDialog  = props?.setLoginDialog

    return { logingDialog, setLoginDialog }
}

export default useContextLoginDialog
