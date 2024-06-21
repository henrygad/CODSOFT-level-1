import { useEffect } from "react"
import { Blogposteditor } from "../components"
import { useContextShowPageTitle } from "../hooks"

const Creatablogpost = () => {
  const {setShowPageTitle} = useContextShowPageTitle()
  
  useEffect(()=>{setShowPageTitle('add blogpost')}, [])
  return <main>
    <div className=" container w-screen min-h-[80vh] pt-4">
       <Blogposteditor toCreateNewBlogpost={true} />
    </div>
  </main>
}

export default Creatablogpost


