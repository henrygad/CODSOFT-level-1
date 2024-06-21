import React, { useEffect } from 'react'
import { useContextShowPageTitle } from '../hooks'

const About = () => {
  const {setShowPageTitle} = useContextShowPageTitle()

  useEffect(()=>{setShowPageTitle('about us')}, [])

  return <main>
    <h1>About us</h1>
  </main>
}

export default About
