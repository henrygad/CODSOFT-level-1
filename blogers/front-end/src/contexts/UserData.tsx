import { ReactElement, createContext, useEffect, useReducer } from "react"
import { userData } from "../database/userdata"
import { useContextAuthentication } from "../hooks"

export const Context = createContext({})

const reducer = (state: { userData: { following: [], timeline: [], interested: [], notifications: [] } }, action: { type: string, payload: {} }) => {
    switch (action.type) {
        case "FETCH_USERDATA":
            return {
                userData: { ...action.payload }
            }
        case "EDIT_USERDATA":
            return {
                userData: { ...state.userData, ...action.payload }
            }
        case "DELETE_USERDATA":
            return {
                userData: action.payload
            }
        case "CREATE_FOLLOWING":
            return {
                userData: {
                    ...state.userData,
                    following: [...state.userData.following, action.payload],
                    timeline: [...state.userData.timeline, action.payload]
                }
            }
        case "DELETE_FOLLOWING":
            return {
                userData: { 
                    ...state.userData, 
                    following: state.userData.following.filter((following: string | {}) => following !== action.payload), 
                    timeline: state.userData.timeline.filter((interest: string | {}) => interest !== action.payload), 
                }
            }
        default:
            return state
    }
}

export const UserData = ({ Children }: { Children: ReactElement }) => {
    const [state, dispatch] = useReducer(reducer, {
        userData: { 
            following: [], 
            timeline: [] , 
            notifications: [],
            interested: [],
        },
    })
    const { loginUser } = useContextAuthentication()

    useEffect(() => {
        const fetchData = userData.find((user) => user.userName === loginUser)
        dispatch({ type: 'FETCH_USERDATA', payload: fetchData })
    }, [loginUser])

    return <Context.Provider value={{ state, dispatch }}>
        {Children}
    </Context.Provider>
}

export default UserData
