import { Blogposteditor } from "../component"


const Creatablogpost = () => {
  const {Displayeditor, body} = Blogposteditor({toCreateNewBlogpost: true, navList: ['Publish', 'draff']})

   return <Displayeditor />
}

export default Creatablogpost


