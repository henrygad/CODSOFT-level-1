import { createContext, useReducer, ReactElement, useEffect, Dispatch } from "react";
import { blogpostdata } from "../database/blogpost";
import { useContextAuthentication } from "../hooks";
import { Blogpostprops } from "../entities";

type State = { Blogpost: Blogpostprops[] }

type Action =
    | { type: "DISPLAY_BLOGPOST", payload: Blogpostprops[] }
    | { type: "CREATE_BLOGPOST", payload: Blogpostprops }
    | { type: "EDIT_BLOGPOST", payload: { id: string } }
    | { type: "DELETE_BLOGPOST", payload: { id: string } }


type Contextprops = {
    state: { Blogpost: Blogpostprops[] }
    dispatch: React.Dispatch<Action>
}


export const Context = createContext<Contextprops | {}>({})

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "DISPLAY_BLOGPOST":
            return {
                Blogpost: action.payload
            }
        case "CREATE_BLOGPOST":
            return {
                Blogpost: [...state.Blogpost, action.payload]
            }
        case "EDIT_BLOGPOST":
            return {
                Blogpost: state.Blogpost.map((items) => items.id === action.payload.id ? { ...items, ...action.payload } : items)
            }
        case "DELETE_BLOGPOST":
            return {
                Blogpost: state.Blogpost.filter((items) => items.id !== action.payload.id)
            }
        default:
            return state
    }
}

const BlogpostData = ({ Children }: { Children: ReactElement }) => {
    const [state, dispatch] = useReducer(reducer, {
        Blogpost: [],
    })

    const { loginUser } = useContextAuthentication()
    useEffect(() => {
        const fetchBlogpost = blogpostdata.filter((items) => items.authorUserName === loginUser)
        dispatch({ type: 'DISPLAY_BLOGPOST', payload: fetchBlogpost })
    }, [loginUser])

    return <Context.Provider value={{ state, dispatch }}>
        {Children}
    </Context.Provider>
}

export default BlogpostData