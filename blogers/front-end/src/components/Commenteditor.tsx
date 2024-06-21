import React, { useRef, useState } from 'react'
import { Button, Textarea } from '../ui/form'
import { useContextComments } from '../hooks'
import { useContextAuthentication } from '../hooks'
import useContextLoginDialog from '../hooks/useContextLoginDialog'

const Commenteditor = ({ blogpostId, parentComment }: { parentComment?: string, blogpostId: string }) => {
    const { isLogin, loginUser } = useContextAuthentication()
    const {logingDialog, setLoginDialog} = useContextLoginDialog()
    const [body, setBody] = useState('')
    const bodyRef = useRef(null)
    const { dispatch } = useContextComments()

    const handleCommentForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (isLogin) {
            const comment = {
                id: new Date(),
                blogpostId,
                commentorUsername: loginUser,
                body,
            }

            dispatch({ type: 'CREATE_COMMENT', payload: comment })
            setBody('')
            bodyRef.current?.focus()
        }else {
            setLoginDialog(!logingDialog)
        }
    }

    return <form className='w-full space-y-6' onSubmit={handleCommentForm}>
        <div className=' w-full flex justify-center'>
            <Textarea ref={bodyRef} className='w-full h-[60px]  max-w-[480px] rounded-full p-4' value={body} onChange={(e) => setBody(e.target.value)} />
        </div>
        <div className='w-full flex justify-center'>
            <Button>Add comment</Button>
        </div>
    </form>
}

export default Commenteditor
