import { Children, ReactElement } from 'react'
import tw from 'tailwind-styled-components'

type Props = {
  minWidth?: string
  Children: ReactElement
  enableAjduster?: boolean
  className?: string
}

const Screenpanel = ({Children, minWidth, enableAjduster, className}: Props) => {
  const innitailWidth = ''
  return <><div className={`relative ${className}`} style={{width: innitailWidth&&innitailWidth}} >
        {Children}
        {enableAjduster && <div className='hidden md:block w-[1.5px] absolute top-0 bottom-0 right-0 bg-gray-200 hover:bg-blue-600 cursor-grabbing'></div>}
      </ div> 
    </>  
}

export default Screenpanel