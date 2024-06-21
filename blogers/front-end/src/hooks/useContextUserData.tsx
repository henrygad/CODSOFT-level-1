import { useContext } from "react"
import { Context } from "../contexts/UserData"

const useContextUserData = () => {
    const props  =  useContext(Context)
    const userData = props.state.userData
    const dispatch = props.dispatch
  return {userData, dispatch}
}

export default useContextUserData
