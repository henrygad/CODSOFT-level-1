import React from 'react'
import Singleinterested from './Singleinterested'

const Listsingleinterested = ({interested}: {interested:[]}) => {
  return <div className='space-y-3'>
    {interested && interested.map((interest)=>
     <Singleinterested interest={interest} />
    )}
  </div>
}

export default Listsingleinterested
