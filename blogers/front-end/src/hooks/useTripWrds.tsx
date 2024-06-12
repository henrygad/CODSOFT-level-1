import { ReactElement, useState } from "react"

const useTripWrds = ({ body, num , disableFn}: { body: string, num: number , disableFn: boolean}): ReactElement[] => {
    const [updateNum, setUpdateNum] = useState(num)
    let triped = ''
    if (!body) return [<>{triped}</>]
    let arr = body.split(' ')
    const more = (text: string, {nagative}: {nagative: boolean}) => <span onClick={() => disableFn?setUpdateNum(!nagative?num+=updateNum: num): num} className="font-text font-semibold text-[.8rem] text-slate-400 cursor-pointer pl-2">...{text}</span>

    console.log(num)
    if (arr.length > updateNum) { triped = arr.slice(0, updateNum).join(' '); return [<>{triped}<>{more('more', {nagative: false})}</></>] }
    else { triped = body; return [<>{triped}<>{ arr.length >= num && more('see less', {nagative: true})}</></>] }
}

export default useTripWrds
