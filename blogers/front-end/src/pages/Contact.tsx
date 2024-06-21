import React, { useEffect } from 'react'
import { useContextShowPageTitle } from '../hooks'

const Contact = () => {
  const {setShowPageTitle} = useContextShowPageTitle()
  useEffect(()=>{setShowPageTitle('contact us')}, [])
  return <main>
    <h1>Contact us</h1>
  </main>
}

export default Contact
