import { useEffect } from "react"
import { Blogposteditor } from "../components"
import { useContextOnCreateBlogpost, useContextShowPageTitle } from "../hooks"

const Creatablogpost = () => {
  const { setShowPageTitle } = useContextShowPageTitle()
  const { setOnCreateBlogpost } = useContextOnCreateBlogpost()

  useEffect(() => {
    setShowPageTitle('add blogpost')
    setOnCreateBlogpost(true)
  }, [])

  return <main>
    <div className=" container w-screen min-h-[80vh] pt-4 pb-20">
      <Blogposteditor toCreateNewBlogpost={true} />
    </div>
  </main>
}

export default Creatablogpost


