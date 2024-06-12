import React, { ReactElement, useState } from 'react'

const UsereturnComponent = (callBackFn: (to: string, setTo:React.Dispatch<React.SetStateAction<string>>)=> ReactElement) => {
    const [to, setTo] = useState('')
  return{ Displayreturnedcomponent: ()=> callBackFn(to, setTo), setTo} 
}

export default UsereturnComponent
