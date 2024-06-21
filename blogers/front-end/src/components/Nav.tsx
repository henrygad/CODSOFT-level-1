import React, {ReactElement } from 'react'

type Props = {
      className?: string
      Children: ReactElement
}

const Nav = ({Children, className}: Props) => {
  return <nav id='decktop-nav' className='flex gap-20'>
         <ul className={`flex ${className}`}>
            {Children}
         </ul>
      </nav>
}

export default Nav
