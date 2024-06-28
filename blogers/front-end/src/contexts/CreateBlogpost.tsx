import React, { Children, ReactElement, ReactNode, createContext, useState } from 'react'

type Contextprops = {
    onCreateBlogpost: boolean
    setOnCreateBlogpost: React.Dispatch<React.SetStateAction<boolean>>
}

export const Context = createContext<Contextprops | {}>({})

const CreateBlogpost = ({ Children }: { Children: ReactElement }) => {
    const [onCreateBlogpost, setOnCreateBlogpost] = useState(false)
    
    return <Context.Provider value={{ onCreateBlogpost, setOnCreateBlogpost }}>
        {Children}
    </Context.Provider>
}

export default CreateBlogpost
