import React, { useContext } from 'react'
import { Context } from '../contexts/CommentData'

const useContextComments = () => {
  const Props = useContext(Context)
  const comments = Props.state.Comments
  const dispatch = Props.dispatch
  return {comments, dispatch}
}

export default useContextComments
