import React, { useState } from 'react'
import imageicon from '../assert/imageicon.png'
import tw from 'tailwind-styled-components'

const Addnewimage = ({ image }: { image?: string }) => {
  const [putImage, setPutImage] = useState(image)
  const [isImageChanged, setisImageChanged] = useState(false)

  function handleReadFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)

    reader.onload = function (e) {
      setPutImage(e.target.result)
    }
  }

  const cancleChangeImaged = ()=> {setPutImage(image); setisImageChanged(false)}

  return {
    Displayimage: ({ className }: { className?: string }) =>
      <label htmlFor="image" className={`${className} block relative object-contain bg-center bg-contain bg-no-repeat `} style={{ backgroundImage: `url(${putImage})` }}>
        <Image src={imageicon} alt={''} />
        <input className='absolute top-0 right-0 left-0 bottom-0 opacity-0 cursor-pointer' type='file' onChange={(e) => { handleReadFile(e); setisImageChanged(true) }} accept="image/png, image/gif, image/jpeg" />
      </label>, putImage, isImageChanged, setisImageChanged, cancleChangeImaged
  }
}

export default Addnewimage

const
 Image = tw.img`
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
