import React from 'react'
import Singleinterested from './Singleinterested'
import { useSeeMore } from '../hooks'

const Listsingleinterested = ({ interested, defaultPerLoad = 6 }: { interested: [], defaultPerLoad?: number }) => {
  const { Displayseemore, perLoad } = useSeeMore({ arrLength: interested.length, defaultPerLoad })

  return <div className='space-y-3'>
    {interested && interested.map((interest, index) =>
      index >= perLoad ? '' : <Singleinterested interest={interest} />
    )}
    <Displayseemore />
  </div>
}

export default Listsingleinterested
