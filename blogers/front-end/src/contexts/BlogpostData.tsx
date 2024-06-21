import { createContext, useReducer, ReactElement, useEffect } from "react";
import { blogpostdata } from "../database/blogpost";
import { useContextAuthentication } from "../hooks";

export const Context = createContext({})

const reducer = (state: { Blogpost: { id: string }[] }, action: { type: string, payload: {}[] }) => {
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