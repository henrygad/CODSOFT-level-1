import React, { ReactElement, useState } from 'react'

const useReturnComponent = (callBackFn: (to: string, setTo:React.Dispatch<React.SetStateAction<string>>)=> ReactElement) => {
    const [to, setTo] = useState('')
  return{ Displayreturnedcomponent: ()=> callBackFn(to, setTo), setTo} 
}

export default useReturnComponent
