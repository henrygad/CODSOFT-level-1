import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useContextShowPageTitle } from '../hooks'

const Page404 = () => {
    const Navigate = useNavigate()
    const {setShowPageTitle} = useContextShowPageTitle()

    useEffect(()=>{setShowPageTitle('error, return back')}, [])
    const handleRedirect = ()=>{
        Navigate(-1)
    }
  
    return <main>
        <div className="font-text font-semibold text-stone-900 w-full h-screen flex justify-center items-center"> 
            404, page not found  <button className='text-blue-800 text-sm p-2' onClick={handleRedirect}>return back</button>
        </div>
    </main>

}

export default Page404
