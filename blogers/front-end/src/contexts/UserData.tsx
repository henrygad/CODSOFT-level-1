import { ReactElement, createContext, useEffect, useReducer } from "react"
import { userData } from "../database/userdata"
import { useContextAuthentication } from "../hooks"
import { Userprops } from "../entities"

type State = { userData: Userprops }
type Action =
    | { type: "FETCH_USERDATA", payload: Userprops }
    | { type: "EDIT_USERDATA", payload: Userprops }
    | { type: "DELETE_USERDATA", payload: Userprops }
    | { type: "CREATE_FOLLOWING", payload: string }
    | { type: "DELETE_FOLLOWING", payload: string }

type Contextprops = {
    state: {  userData: Userprops }
    dispatch: React.Dispatch<Action>
}

export const Context = createContext<Contextprops| {}>({})

const reducer = (state: State, action: Action): State => {
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
            id: '',
            userName: '',
            name: '',
            image: '',
            birthday: '',
            bio: '',
            email: '',
            country: '',
            phonenumber: 0,
            website: '',
            followers: [],
            following: [],
            interested: [],
            timeline: [],
            notifications: [],
        }
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
