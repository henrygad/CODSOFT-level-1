import React from 'react'
import { Button, Textarea } from '../ui/form'

const Commenteditor = () => {
    return <form className='w-full space-y-6'>
        <div className=' w-full flex justify-center'>
            <Textarea className='w-full h-[90px]  max-w-[480px]'></Textarea>
        </div>
        <div className='w-full flex justify-center'>
            <Button>Add comment</Button>
        </div>
    </form>
}

export default Commenteditor
