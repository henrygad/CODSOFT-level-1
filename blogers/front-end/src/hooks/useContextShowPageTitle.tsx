import { useContext } from "react"
import { Context } from "../contexts/PageTitleUpdater"

const useContextShowPageTitle = () => {
    const Props = useContext(Context)
    const showPageTitle = Props.displayPageTitle
    const setShowPageTitle = Props.setDisplayPageTitle
  return {showPageTitle, setShowPageTitle}
}

export default useContextShowPageTitle
