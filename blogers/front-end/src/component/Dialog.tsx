import { ReactElement, useState, forwardRef, useImperativeHandle} from "react"
import {Formwrapper} from '../ui/form'

const Dialog = forwardRef(({Children}: {Children: ReactElement}, ref) => {
    const [dialog, setDialog] = useState(false)
    
    useImperativeHandle(ref, ()=> ({
      toggleDialog(){setDialog(!dialog)},
    }))
      
  return <div>
          <Formwrapper className={`${!dialog&& 'hidden'}`}>
            {Children}
          </Formwrapper>
      </div>
})

export default Dialog
