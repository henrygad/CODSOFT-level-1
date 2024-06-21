import { useState } from "react"
import {Form, Label, Input, Button, Errorformmessage} from '../ui/form'
import { H2 } from "../ui/Text"
import { useAuthentication } from "../hooks"

const Login = ({closeDialog, setTo}:{closeDialog: ()=> void, setTo: React.Dispatch<React.SetStateAction<string>>}) => {
      const [password, setPassword] = useState('')
      const [value, setValue] = useState('')
      const {loading, error, fetch} = useAuthentication({url: 'hfhffhh'})

      const handleLogin = async(e:React.FormEvent<HTMLFormElement>)=>{
              e.preventDefault()
              const body ={
                password,
                value
              }
             
             await fetch(body)
             .then((response)=> {
                setPassword('')
                setValue('')
            })
             .catch((err)=> {
              setPassword('')
             }) 
      }


  return <Form onSubmit={handleLogin} action="">
            <div className="cursor-pointer flex justify-end ">
                <div onClick={closeDialog} className="font-text text-red-800 font-semibold" >X</div>
            </div>
            <div><H2 className="text-center text-green-500">Log in</H2></div>
            <div className="space-y-1">
                <Label>Username/email</Label>
                <Input className={`${error === 'user not found' || error === 'filds most not be emthy'? ' border border-red-600': ''}`} value={value} onChange={(e)=> setValue(e.target.value)} type="text" id="username/email" name="username" placeholder="username"/>
                {error === 'user not found' && <Errorformmessage>{error + ' ' + 'try Sign up'}</Errorformmessage>}
            </div>
            <div className="space-y-2">
                <Label>Passowrd</Label>
                <Input className={`${error && ' border border-red-600'}`} value={password} onChange={(e)=> setPassword(e.target.value)} type="text" id="password" name="password" placeholder="password"/>
                {error === 'wrong password' && <Errorformmessage>{error}</Errorformmessage>}
            </div>
            <div className="flex flex-col items-center gap-4">
                <Button >{loading? "Loading": "Log in"}</Button>
                {error === 'filds most not be emthy' && <Errorformmessage>{error}</Errorformmessage>}
            </div>
            <div className="w-full flex justify-end">
                <div onClick={()=> setTo('signup')} className="font-text font-semibold text-sm text-green-500 cursor-pointer">Sign up</div>
            </div>
        </Form> 
}

export default Login
