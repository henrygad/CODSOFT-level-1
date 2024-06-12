import { useState } from "react"
import {Form, Label, Input, Button} from '../ui/form'
import { H2 } from "../ui/Text"

const Login = ({closeDialog, setTo}:{closeDialog: ()=> void, setTo: React.Dispatch<React.SetStateAction<string>>}) => {
      const [password, setPassword] = useState('')
      const [value, setValue] = useState('')
      const [error, setError] = useState()
      const [loading, setLoading]= useState('')

      const handleLogin = async(e:React.FormEvent<HTMLFormElement>)=>{
              e.preventDefault()
      }


  return <Form onSubmit={handleLogin} action="">
            <div className="cursor-pointer flex justify-end ">
                <div onClick={closeDialog} className="font-text text-red-800 font-semibold" >X</div>
            </div>
            <div><H2 className="text-center text-green-500">Log in</H2></div>
            <div className="space-y-2">
                <Label>Username/email</Label>
                <Input value={value} onChange={(e)=> setValue(e.target.value)} type="text" id="username/email" name="username" placeholder="username"/>
            </div>
            <div className="space-y-2">
                <Label>Passowrd</Label>
                <Input value={value} onChange={(e)=> setValue(e.target.value)} type="text" id="password" name="password" placeholder="password"/>
            </div>
            <div className="flex flex-col items-center gap-4">
                <Button >{loading? "Loading": "Login"}</Button>
                <div className="text-red-800 border border-red-700" >{error}</div>
            </div>
            <div className="w-full flex justify-end">
                <div onClick={()=> setTo('signup')} className="font-text font-semibold text-sm text-green-500 cursor-pointer">Sign up</div>
            </div>
        </Form> 
}

export default Login
