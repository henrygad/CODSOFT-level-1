import React, { useEffect, useState } from 'react'
import useContextAuthentication from './useContextAuthentication'

const useAuthentication = ({ url }: { url?: string }) => {
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const strongpassword = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*?+=._-]).{8,}$/
    const correctemail = /^([a-z0-9_.-]+)@([a-z0-9.-]+).([a-z.]{2,5})$/

    const {isLogin, setIsLogin, setLoginUser } = useContextAuthentication()
    
    const fetch = (body: { password: string, value: string, email: string, userName: string }) => new Promise((res, rej) => {
        const userNameGreaterThan6Letter = body.userName.length
        setLoading(true)
        setError('')
        if (!body.password ||
            !body.email ||
            !body.userName
        ) {
            setLoading(false)
            setError('filds most not be emthy')
            rej('filds most not be emthy')
        } else {
            setTimeout(() => {
                setError('')
                setLoading(false)
                setIsLogin(true)
                setLoginUser('@'+body.userName)
                res('user create and login')
            }, 1000)
        }
    })

     
    return { error, loading, fetch }
}

export default useAuthentication
