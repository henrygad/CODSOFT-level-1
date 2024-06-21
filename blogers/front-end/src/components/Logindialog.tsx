import { ReactElement } from "react"
import { Formwrapper } from '../ui/form'
import useContextLoginDialog from "../hooks/useContextLoginDialog"

const Logindialog = ({ Children }: { Children: ReactElement }) => {
    const { logingDialog } = useContextLoginDialog()
    
    return <div>
        <Formwrapper className={`${logingDialog ? 'flex' : 'hidden'}`}>
            {Children}
        </Formwrapper>
    </div>
}

export default Logindialog
