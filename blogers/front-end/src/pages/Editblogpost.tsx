import React from 'react'
import { Blogposteditor } from '../component'

const Editblogpost = () => {
    const {Displayeditor, body} = Blogposteditor({toEditBlogpost: true, navList: ['Publish', 'View', 'draff', 'new post', 'delete']})
  return <Displayeditor /> 
}

export default Editblogpost
