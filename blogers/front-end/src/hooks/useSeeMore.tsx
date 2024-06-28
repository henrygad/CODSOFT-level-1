import React, { useState } from 'react'

const useSeeMore = ({ defaultPerLoad, arrLength }: { defaultPerLoad: number, arrLength: number }) => {
    const [perLoad, setPerLoad] = useState(defaultPerLoad)

    const seeMore = () => {
        if (arrLength <= perLoad) {
            setPerLoad(defaultPerLoad)
        } else setPerLoad(defaultPerLoad += perLoad)
    }

    return { Displayseemore: () => arrLength > defaultPerLoad && <div > <button onClick={seeMore} className='text-slate-700 text-sm font-text font-semibold'>{arrLength <= perLoad ? 'see less' : 'see more'}</button></div>, perLoad, }
}

export default useSeeMore
