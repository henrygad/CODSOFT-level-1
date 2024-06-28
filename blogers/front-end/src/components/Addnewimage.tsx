import React, { useState } from 'react'
import tw from 'tailwind-styled-components'
import { useUploadImage } from '../hooks'
import {Addphotoicon} from './Icons'

const Addnewimage = ({image}: {image: string}) => {
  const [getImage, setgetImage] = useState<string | ArrayBuffer>(image)
  const [isImageChanged, setisImageChanged] = useState(false)

  const handleReadFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return
    const file = e.target.files[0]
    await useUploadImage({ file }).then((image) => setgetImage(image.data.link)).catch((error) => console.log(error))
    setisImageChanged(!isImageChanged)
  }



  return {
    Displayimageinput: () => <div className='relative'>
      <Addphotoicon/>
      <input className='absolute top-0 right-0 left-0 bottom-0 opacity-0 cursor-pointer' type='file' onChange={(e) => handleReadFile(e)} accept="image/png, image/gif, image/jpeg" />
    </div>, getImage, setgetImage, isImageChanged, setisImageChanged
  }
}
export default Addnewimage

const Image = tw.img`
  block 
  h-6 
  w-6
  absolute 
  top-1/2 
  left-1/2 
  -translate-x-1/2 
  -translate-y-1/2 
  object-cover 
  bg-gray-400 
  opacity-60 
  cursor-pointer
`
