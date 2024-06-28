import React, { useContext } from 'react'
import { Context } from '../contexts/CreateBlogpost'
const useContextOnCreateBlogpost = () => {
    const props = useContext(Context)
    const onCreateBlogpost = props.onCreateBlogpost
    const setOnCreateBlogpost = props.setOnCreateBlogpost
    return { onCreateBlogpost, setOnCreateBlogpost }
}
export default useContextOnCreateBlogpost
