import { useState } from "react"
import {Form, Label, Input, Button, Errorformmessage} from '../ui/form'
import { H2 } from "../ui/Text"
import { useAuthentication } from "../hooks"

const Signup = ({closeDialog, setTo}: {closeDialog: ()=>void, setTo: React.Dispatch<React.SetStateAction<string>>}) => {
      const [password, setPassword] = useState('')
      const [email, setEmail] = useState('')
      const [userName, setUserName] = useState('')
      const {loading, error, fetch} = useAuthentication({url: 'hfhfhffh'})

      const handleSignup = async(e:React.FormEvent<HTMLFormElement>)=>{
              e.preventDefault()
              const body ={
                password,
                email,
                userName,
              }

              await fetch(body)
              .then((response)=> {
                setPassword('')
                setEmail('')
                setUserName('')
            })
              .catch((err)=> {
                setPassword('')
              })
      }

  return<Form onSubmit={handleSignup} action="">
      <div className="cursor-pointer flex justify-end ">
          <div onClick={closeDialog} className="font-text text-red-800 font-semibold" >X</div>
      </div>
      <div><H2 className="text-center text-green-500">Sign up</H2></div>
      <div className="space-y-2">
          <Label>Username</Label>
          <Input className={`${error === 'filds most not be emthy' || 
            error === 'username too short'||
            error === 'user already exist' ? 'border border-red-600': ''}`} value={userName} onChange={(e)=> setUserName(e.target.value)} type="text" id="username" name="username" placeholder="username"/>
          { error === 'username too short'||
            error === 'user already exist'? <Errorformmessage>{error === 'username too short'? error + ' ' + '(most be atleast 6 characters long)':  error + ' '+ 'try Log in'}</Errorformmessage>: ''}
      </div>
      <div className="space-y-2">
          <Label>Email</Label>
          <Input className={`${error === 'filds most not be emthy' ||
            error === 'wrong email' ? 'border border-red-600': ''}`} value={email} onChange={(e)=> setEmail(e.target.value)} type="text" id="email" name="email" placeholder="email"/>
            { error === 'wrong email' && <Errorformmessage>{error}</Errorformmessage>}
      </div>
      <div className="space-y-2">
          <Label>Passowrd</Label>
          <Input className={`${error === 'filds most not be emthy' ||
            error === 'password not strong enough' ? 'border border-red-600': ''}`}  value={password} onChange={(e)=> setPassword(e.target.value)} type="text" id="password" name="password" placeholder="password"/>
            {error === 'password not strong enough' && <Errorformmessage>{error + ' ' + '(most contain AZaz@!%#123)'}</Errorformmessage>}
      </div>
      <div className="flex flex-col items-center gap-4">
          <Button >{loading? "Loading": "Sign up"}</Button>
          {error === 'filds most not be emthy' && <Errorformmessage>{error}</Errorformmessage>}
      </div>
      <div className="w-full flex justify-end">
          <div onClick={()=> setTo('login')} className="font-text font-semibold text-sm text-green-500 cursor-pointer">Log in</div>
      </div>
  </Form> 
}

export default Signup
