import React, { ReactElement, createContext, useReducer } from 'react'
import { Commentprops } from '../entities'

type State = {
    Comments: Commentprops[]
}

type Action =
    | { type: "DISPLAY_COMMENTS", payload: Commentprops[] }
    | { type: "CREATE_COMMENT", payload: Commentprops }
    | { type: "DELETE_COMMENT", payload: { id: string } }

type Contextprops = {
    state: { Comments: Commentprops[] }
    dispatch: React.Dispatch<Action>
}

export const Context = createContext<Contextprops | {}>({})

const reducer = (state: State, action: Action): State => {
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


const CommentData = ({ Children }: { Children: ReactElement }) => {
    const [state, dispatch] = useReducer(reducer, {
        Comments: []
    })

    return <Context.Provider value={{ state, dispatch }}>
        {Children}
    </Context.Provider>
}

export default CommentData
