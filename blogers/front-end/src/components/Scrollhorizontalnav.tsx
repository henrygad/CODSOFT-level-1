import React, { ReactElement } from 'react'

const Scrollhorizontalnav = ({Children}:{Children: ReactElement}) => {
  return <div className='no-scrollbar w-screen overflow-x-scroll flex scroll-snap-x mandatory transition-all hover:border-b-2 pb-1'>
    {Children}
  </div>
}

export default Scrollhorizontalnav
