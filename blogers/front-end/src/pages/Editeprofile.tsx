import React, {useRef, useState } from 'react'
import tw from 'tailwind-styled-components'
import Addnewimage from '../component/Addnewimage'
import image from '../assert/henryportfolioimg.png'

const Editeprofile = () => {
    const [isEditname, setIsEditname] = useState(false)
    const [isEditbio, setIsEditbio] = useState(false)
    const [isEditage, setIsEditage] = useState(false)
    const [isEditemail, setIsEditemail] = useState(false)
    const [isEditphonenumber, setIsEditphonenumber] = useState(false)
    const [isEditwebsite, setIsEditwebsite] = useState(false)
    const [isEditcountry, setIsEditcountry] = useState(false)

     const [editname, setEditname] = useState('henry loveday')
     const [editbio, setEditbio] = useState('this is my bio i love blogger')
     const [editage, setEditage] = useState(24)
     const [editemail, setEditemail] = useState('henrygad.orji@gmail.com')
     const [editphonenumber, setEditphonenumber] = useState(+1247025672168)
     const [editwebsite, setEditwebsite] = useState('webstarter.com')
     const [editcountry, setEditcountry] = useState('Nigeria')
     const {Displayimage, isImageChangeed, setisImageChangeed} = Addnewimage({image:image})

    const handleEdited = ()=>{
        const body = {
            editname,
            editbio,
            editage,
            editemail,
            editphonenumber,
            editwebsite,
            editcountry
        }

    }

  return <main className='mt-16 pb-10'>
        <div className='container'>
            <form action="" className='max-w-[320px] space-y-10' onSubmit={(e)=> e.preventDefault()}>
                <Wrapper className=' gap-4'>
                    <Displayimage className='h-16 w-16 rounded-full' />
                    {isImageChangeed&& <input className='block font-text text-base cursor-pointer' type='button' value={'save'} onClick={()=> setisImageChangeed(false)} />}
                </Wrapper>
                <Wrapper className='flex w-full'>
                    {!isEditname? <Title className='first-letter:capitalize'>{editname}</Title> :<Input autoFocus value={editname} onChange={(e)=> setEditname(e.target.value)} />} <Button type="button" className='right-2' onClick={()=> {isEditname&&handleEdited(); setIsEditname(!isEditname)}} value={!isEditname?'edit': "save"}/> 
                </Wrapper>
                <Wrapper>
                    {!isEditbio? <Title className='first-letter:capitalize'>{editbio}</Title> : <Textarea autoFocus value={editbio} onChange={(e)=> setEditbio(e.target.value)} />} <Button type="button" className='right-2' onClick={()=> {isEditbio&&handleEdited(); setIsEditbio(!isEditbio)}} value={!isEditbio?'edit': "save"} />
                </Wrapper>
                <Wrapper>
                    {!isEditage? <Title>{editage}</Title>: <Input type='number' autoFocus value={editage} onChange={(e)=>setEditage(parseFloat(e.target.value))} />} <Button type="button" className='right-2' onClick={()=> {isEditage&&handleEdited(); setIsEditage(!isEditage)}} value={!isEditage?'edit': "save"} />
                </Wrapper>
                <Wrapper>
                    {!isEditemail? <Title>{editemail}</Title> : <Input type='email' autoFocus value={editemail} onChange={(e)=> setEditemail(e.target.value)} />} <Button type="button" className='right-2' onClick={()=> {isEditemail&&handleEdited(); setIsEditemail(!isEditemail)}} value={!isEditemail?'edit': "save"} />
                </Wrapper>
                <Wrapper>
                    {!isEditphonenumber? <Title>{editphonenumber}</Title> : <Input autoFocus type='number' value={editphonenumber} onChange={(e)=> setEditphonenumber(parseFloat(e.target.value))} />} <Button type="button" className='right-2' onClick={()=> {isEditphonenumber&&handleEdited(); setIsEditphonenumber(!isEditphonenumber)}} value={!isEditphonenumber?'edit': "save"} />
                </Wrapper>
                <Wrapper>
                    {!isEditwebsite? <Title>{editwebsite}</Title> : <Input autoFocus value={editwebsite} onChange={(e)=> setEditwebsite(e.target.value)} />}  <Button type="button" className='right-2' onClick={()=> {isEditwebsite&&handleEdited(); setIsEditwebsite(!isEditwebsite)}} value={!isEditwebsite?'edit': "save"} />
                </Wrapper>
                <Wrapper>
                    {!isEditcountry? <Title className='first-letter:capitalize'>{editcountry}</Title> : <Input autoFocus value={editcountry}  onChange={(e)=> setEditcountry(e.target.value)}/>} <Button type="button" className='right-2' onClick={()=> {isEditcountry&&handleEdited(); setIsEditcountry(!isEditcountry)}} value={!isEditcountry?'edit': "save"} />
                </Wrapper>  
            </form>
        </div>
  </main>
}

export default Editeprofile


const Title = tw.p`
  bg-gray-50 
  w-full 
  p-3
  rounded-sm 
  font-text 
  text-sm 
  text-stone-800"
  outline-none
  rounded-md
  white-wrap
`

const Input = tw.input`
  bg-gray-50 
  w-full 
  p-3
  pr-14
  rounded-sm 
  font-text 
  text-sm 
  text-stone-800"
  outline-none
  rounded-md
`

const Textarea = tw.textarea`
  bg-gray-50 
  w-full  
  p-3
  pr-14
  rounded-sm 
  font-text 
  text-sm 
  text-stone-800"
  outline-none
  rounded-md
`

const Button = tw.input`
    absolute
    top-1/2
    -translate-y-1/2
    font-text 
    text-base
    cursor-pointer
`

const Wrapper = tw.div`
    flex 
    w-full
    relative
`


