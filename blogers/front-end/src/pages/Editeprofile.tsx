import React, { useState, useEffect } from 'react'
import tw from 'tailwind-styled-components'
import Addnewimage from '../components/Addnewimage'
import { useContextOnCreateBlogpost, useContextShowPageTitle, useContextUserData } from '../hooks'
import { Roundedbtn } from '../ui/buttons'
import { Label } from '../ui/form'


const Editeprofile = () => {
    const { userData, dispatch } = useContextUserData()
    const { setShowPageTitle } = useContextShowPageTitle()
    const {setOnCreateBlogpost} = useContextOnCreateBlogpost()

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
    const { Displayimageinput, getImage, setgetImage, isImageChanged, setisImageChanged } = Addnewimage({ image: userData.image })

    const [isEdited, setIsEdited] = useState(false)

    useEffect(() => { 
        setShowPageTitle('edit profile') 
        setOnCreateBlogpost(false)
    }, [])

    const cancleEditname = () => { setEditname(userData.name); setIsEdited(false) }
    const cancleEditbio = () => { setEditbio(userData.bio); setIsEdited(false) }
    const cancleEditbirthday = () => { setEditbirthday(userData.age); setIsEdited(false) }
    const cancleEditemail = () => { setEditemail(userData.email); setIsEdited(false) }
    const cancleEditphonenumber = () => { setEditphonenumber(userData.phonenumber); setIsEdited(false) }
    const cancleEditwebsite = () => { setEditwebsite(userData.website); setIsEdited(false) }
    const cancleEditcountry = () => { setEditcountry(userData.country); setIsEdited(false) }
    const cancleChangeImaged = () => { setgetImage(userData.image); setisImageChanged(!isImageChanged) }

    const handleEdited = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (isEdited || isImageChanged) {
            const body = {
                getImage,
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
        <div className='container pt-4 pb-16'>
            <form action="" className='space-y-6' onSubmit={handleEdited}>
                <div className=' flex justify-between items-center'>
                    <div className='flex items-center gap-4' >
                        <div className='h-16 w-16 flex justify-center items-center rounded-full bg-no-repeat bg-center bg-contain' style={{ backgroundImage: `url(${getImage})` }}>
                            <Displayimageinput />
                        </div>
                        {isImageChanged && <input className='text-sm font-text font-semibold cursor-pointer' type='button' value='Cancle' onClick={cancleChangeImaged} />}
                    </div>
                    <div className={`${isEdited || isImageChanged ? 'block' : 'hidden'}`}><Roundedbtn>save</Roundedbtn></div>
                </div>
                <Wrapper>
                    <Label className='pl-3'>Name</Label>
                    {!toEditname ?
                        <Title className='first-letter:capitalize'>{editname}</Title> :
                        <Input autoFocus value={editname} onChange={(e) => { setEditname(e.target.value); setIsEdited(true) }} />}
                    <Editbtn type="button" className='right-2' onClick={() => { setToEditname(!toEditname); toEditname && cancleEditname() }} value={!toEditname ? 'edit' : "cancle"} />
                </Wrapper>
                <Wrapper>
                    <Label className='pl-3'>Bio</Label>
                    {!toEditbio ?
                        <Title className='first-letter:capitalize'>{editbio}</Title> :
                        <Textarea autoFocus value={editbio} onChange={(e) => { setEditbio(e.target.value); setIsEdited(true) }} />}
                    <Editbtn type="button" className='right-2' onClick={() => { setToEditbio(!toEditbio); toEditbio && cancleEditbio() }} value={!toEditbio ? 'edit' : "cancle"} />
                </Wrapper>
                <Wrapper>
                    <Label className='pl-3'>Date of birth</Label>
                    {!toEditbirthday ?
                        <Title>{editbirthday}</Title> :
                        <Input type='date' autoFocus value={editbirthday} onChange={(e) => { setEditbirthday(parseFloat(e.target.value)); setIsEdited(true) }} />}
                    <Editbtn type="button" className='right-2' onClick={() => { setToEditbirthday(!toEditbirthday); toEditbirthday && cancleEditbirthday() }} value={!toEditbirthday ? 'edit' : "cancle"} />
                </Wrapper>
                <Wrapper>
                    <Label className='pl-3'>Email</Label>
                    {!toEditemail ?
                        <Title>{editemail}</Title> :
                        <Input type='email' autoFocus value={editemail} onChange={(e) => { setEditemail(e.target.value); setIsEdited(true) }} />}
                    <Editbtn type="button" className='right-2' onClick={() => { setToEditemail(!toEditemail); toEditemail && cancleEditemail() }} value={!toEditemail ? 'edit' : "cancle"} />
                </Wrapper>
                <Wrapper>
                    <Label className='pl-3'>Number</Label>
                    {!toEditphonenumber ?
                        <Title>{editphonenumber}</Title> :
                        <Input autoFocus type='number' value={editphonenumber} onChange={(e) => { setEditphonenumber(parseFloat(e.target.value)); setIsEdited(true) }} />}
                    <Editbtn type="button" className='right-2' onClick={() => { setToEditphonenumber(!toEditphonenumber); toEditphonenumber && cancleEditphonenumber() }} value={!toEditphonenumber ? 'edit' : "cancle"} />
                </Wrapper>
                <Wrapper>
                    <Label className='pl-3'>Website</Label>
                    {!toEditwebsite ?
                        <Title>{editwebsite}</Title> :
                        <Input autoFocus value={editwebsite} onChange={(e) => { setEditwebsite(e.target.value); setIsEdited(true) }} />}
                    <Editbtn type="button" className='right-2' onClick={() => { setToEditwebsite(!toEditwebsite); toEditwebsite && cancleEditwebsite() }} value={!toEditwebsite ? 'edit' : "cancle"} />
                </Wrapper>
                <Wrapper>
                    <Label className='pl-3'>Country</Label>
                    {!toEditcountry ?
                        <Title className='first-letter:capitalize'>{editcountry}</Title> :
                        <Input autoFocus value={editcountry} onChange={(e) => { setEditcountry(e.target.value); setIsEdited(true) }} />}
                    <Editbtn type="button" className='right-2' onClick={() => { setToEditcountry(!toEditcountry); toEditcountry && cancleEditcountry() }} value={!toEditcountry ? 'edit' : "cancle"} />
                </Wrapper>
            </form>
        </div>
    </main>
}

export default Editeprofile


const Title = tw.p`
  w-full 
  p-3
  font-text 
  text-sm 
  outline-none
  rounded-md
  white-wrap
`

const Input = tw.input`
  w-full 
  p-3
  pr-14
  font-text 
  text-sm 
  outline-none
  rounded
  bg-transparent
  border

`

const Textarea = tw.textarea`
  w-full  
  font-text 
  text-sm 
  min-h-20
  py-3
  pl-3
  pr-14
  outline-none
  rounded
   bg-transparent
  border
  overflow-hidden
`

const Editbtn = tw.input`
    absolute
    top-[70%]
    -translate-y-1/2
    hover:font-semibold
    active:text-blue-300
    cursor-pointer
    transition-all
    text-sm
`
const Wrapper = tw.div`
    w-full
    relative
    max-w-[400px]
`
