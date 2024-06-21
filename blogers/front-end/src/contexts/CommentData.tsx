import React, {ReactElement, createContext, useReducer } from 'react'

export const Context = createContext({})

const reducer = (state: {Comments: {id: string }[] },  action: {type: string, payload: {}[]})=> {
    switch (action.type) {
        case "DISPLAY_COMMENTS":
            return {
                Comments: action.payload
            }
        case "CREATE_COMMENT": 
            return {
                Comments: [...state.Comments, action.payload]
            }
        case "DELETE_COMMENT": 
            return {
                Comments: state.Comments?.filter((items) => items.id !== action.payload.id)
            }
        default:
            return state
    }
}


const CommentData = ({Children}: {Children: ReactElement}) => {
        const [state, dispatch] = useReducer(reducer, {
            Comments: []
        })

  return <Context.Provider value={{state, dispatch}}>
    {Children}
  </Context.Provider>
}

export default CommentData
