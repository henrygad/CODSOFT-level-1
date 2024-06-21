import React, { useState, useEffect } from 'react'
import tw from 'tailwind-styled-components'
import Addnewimage from '../components/Addnewimage'
import { useContextShowPageTitle, useContextUserData } from '../hooks'

const Editeprofile = () => {
    const { userData, dispatch } = useContextUserData()
    const { setShowPageTitle } = useContextShowPageTitle()

    const [toEditname, setToEditname] = useState(false)
    const [toEditbio, setToEditbio] = useState(false)
    const [toEditbirthday, setToEditbirthday] = useState(false)
    const [toEditemail, setToEditemail] = useState(false)
    const [toEditphonenumber, setToEditphonenumber] = useState(false)
    const [toEditwebsite, setToEditwebsite] = useState(false)
    const [toEditcountry, setToEditcountry] = useState(false)

    const [editname, setEditname] = useState(userData.name)
    const [editbio, setEditbio] = useState(userData.bio)
    const [editbirthday, setEditbirthday] = useState(userData.birthday)
    const [editemail, setEditemail] = useState(userData.email)
    const [editphonenumber, setEditphonenumber] = useState(userData.phonenumber)
    const [editwebsite, setEditwebsite] = useState(userData.website)
    const [editcountry, setEditcountry] = useState(userData.country)
    const { Displayimage, putImage, isImageChanged, setisImageChanged, cancleChangeImaged } = Addnewimage({ image: userData.image })

    const [isEdited, setIsEdited] = useState(false)

    useEffect(() => { setShowPageTitle('edit profile') }, [])

    const cancleEditname = () => { setEditname(userData.name); setIsEdited(false) }
    const cancleEditbio = () => { setEditbio(userData.bio); setIsEdited(false) }
    const cancleEditbirthday = () => { setEditbirthday(userData.age); setIsEdited(false) }
    const cancleEditemail = () => { setEditemail(userData.email); setIsEdited(false) }
    const cancleEditphonenumber = () => { setEditphonenumber(userData.phonenumber); setIsEdited(false) }
    const cancleEditwebsite = () => { setEditwebsite(userData.website); setIsEdited(false) }
    const cancleEditcountry = () => { setEditcountry(userData.country); setIsEdited(false) }

    const handleEdited = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (isEdited || isImageChanged) {
            const body = {
                putImage,
                editname,
                editbio,
                editbirthday,
                editemail,
                editphonenumber,
                editwebsite,
                editcountry
            }
            dispatch({ type: 'EDIT_USERDATA', payload: body })

            setIsEdited(false)
            setisImageChanged(false)

            setToEditname(false)
            setToEditbirthday(false)
            setToEditemail(false)
            setToEditcountry(false)
            setToEditbio(false)
            setToEditphonenumber(false)
            setToEditwebsite(false)
            setToEditcountry(false)
        }
    }


    return <main>
        <div className='container pt-4'>
            <form action="" className='space-y-10' onSubmit={handleEdited}>
                <div className=' flex justify-between items-center'>
                    <div className='flex items-center gap-4' >
                        <Displayimage className='h-16 w-16 rounded-full' />
                        {isImageChanged && <input className='text-sm font-text font-semibold cursor-pointer' type='button' value='Cancle' onClick={cancleChangeImaged} />}
                    </div>
                    <div className={`${isEdited || isImageChanged ? 'block' : 'hidden'}`}> <Savebtn>save changes</Savebtn></div>
                </div>
                <Wrapper>
                    {!toEditname ? <Title className='first-letter:capitalize'>{editname}</Title> : <Input autoFocus value={editname} onChange={(e) => { setEditname(e.target.value); setIsEdited(true) }} />}
                    <Editbtn type="button" className='right-2' onClick={() => { setToEditname(!toEditname); toEditname && cancleEditname() }} value={!toEditname ? 'edit' : "cancle"} />
                </Wrapper>
                <Wrapper>
                    {!toEditbio ? <Title className='first-letter:capitalize'>{editbio}</Title> : <Textarea autoFocus value={editbio} onChange={(e) => { setEditbio(e.target.value); setIsEdited(true) }} />}
                    <Editbtn type="button" className='right-2' onClick={() => { setToEditbio(!toEditbio); toEditbio && cancleEditbio() }} value={!toEditbio ? 'edit' : "cancle"} />
                </Wrapper>
                <Wrapper>
                    {!toEditbirthday ? <Title>{editbirthday}</Title> : <Input type='date' autoFocus value={editbirthday} onChange={(e) => { setEditbirthday(parseFloat(e.target.value)); setIsEdited(true) }} />}
                    <Editbtn type="button" className='right-2' onClick={() => { setToEditbirthday(!toEditbirthday); toEditbirthday && cancleEditbirthday() }} value={!toEditbirthday ? 'edit' : "cancle"} />
                </Wrapper>
                <Wrapper>
                    {!toEditemail ? <Title>{editemail}</Title> : <Input type='email' autoFocus value={editemail} onChange={(e) => { setEditemail(e.target.value); setIsEdited(true) }} />}
                    <Editbtn type="button" className='right-2' onClick={() => { setToEditemail(!toEditemail); toEditemail && cancleEditemail() }} value={!toEditemail ? 'edit' : "cancle"} />
                </Wrapper>
                <Wrapper>
                    {!toEditphonenumber ? <Title>{editphonenumber}</Title> : <Input autoFocus type='number' value={editphonenumber} onChange={(e) => { setEditphonenumber(parseFloat(e.target.value)); setIsEdited(true) }} />}
                    <Editbtn type="button" className='right-2' onClick={() => { setToEditphonenumber(!toEditphonenumber); toEditphonenumber && cancleEditphonenumber() }} value={!toEditphonenumber ? 'edit' : "cancle"} />
                </Wrapper>
                <Wrapper>
                    {!toEditwebsite ? <Title>{editwebsite}</Title> : <Input autoFocus value={editwebsite} onChange={(e) => { setEditwebsite(e.target.value); setIsEdited(true) }} />}
                    <Editbtn type="button" className='right-2' onClick={() => { setToEditwebsite(!toEditwebsite); toEditwebsite && cancleEditwebsite() }} value={!toEditwebsite ? 'edit' : "cancle"} />
                </Wrapper>
                <Wrapper>
                    {!toEditcountry ? <Title className='first-letter:capitalize'>{editcountry}</Title> : <Input autoFocus value={editcountry} onChange={(e) => { setEditcountry(e.target.value); setIsEdited(true) }} />}
                    <Editbtn type="button" className='right-2' onClick={() => { setToEditcountry(!toEditcountry); toEditcountry && cancleEditcountry() }} value={!toEditcountry ? 'edit' : "cancle"} />
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
  font-text 
  text-sm 
  text-stone-800"
  outline-none
  rounded-md
`

const Editbtn = tw.input`
    absolute
    top-1/2
    -translate-y-1/2
    font-text 
    text-base
    cursor-pointer
`
const Savebtn = tw.button`
    px-4 
    py-2 
    bg-green-800 
    text-white 
    font-text 
    text-sm 
    rounded-full 
    cursor-pointer
`

const Wrapper = tw.div`
    flex 
    w-full
    relative
    max-w-[400px]
   
`
