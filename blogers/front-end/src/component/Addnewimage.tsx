import React, { useState } from 'react'
import imageicon from '../assert/imageicon.png'
import tw from 'tailwind-styled-components'

const Addnewimage = ({ image}: { image?: string}) => {
  const [addImage, setAddImage] = useState(image)
  const [isImageChangeed, setisImageChangeed] = useState(false)

  function handleReadFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)

    reader.onload = function (e) {
      setAddImage(e.target.result)
    };
  }



  return {Displayimage: ( {className}: {className?: string })=> <label htmlFor="image" className={`${className} block relative object-contain bg-center bg-contain bg-no-repeat `} style={{ backgroundImage: `url(${addImage})` }}>
    <Image src={imageicon} alt={''} />
    <input className='absolute top-0 right-0 left-0 bottom-0 opacity-0 cursor-pointer' type='file' onChange={(e) => {handleReadFile(e); setisImageChangeed(true)}} accept="image/png, image/gif, image/jpeg" />
  </label>, isImageChangeed, setisImageChangeed}
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

