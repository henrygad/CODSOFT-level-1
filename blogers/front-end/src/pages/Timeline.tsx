import React, { useEffect, useState } from 'react'
import { Listblogposts, Nav } from '../components'
import { blogpostdata } from '../database/blogpost'
import { useContextOnCreateBlogpost, useContextShowPageTitle, useContextUserData, useReturnComponent } from '../hooks'
import { userData } from '../database/userdata'
import { Blogpostprops } from '../entities'
import { Navlist } from '../ui/List'

const Timeline = () => {
    const { setShowPageTitle } = useContextShowPageTitle()
    const {setOnCreateBlogpost} =  useContextOnCreateBlogpost()

    const { userData: { interested, timeline } } = useContextUserData()
    const [timelineBlogposts, setTimelineBlogposts] = useState<Blogpostprops[]>([])
    const [interestedBlogposts, setInterestedBlogposts] = useState<Blogpostprops[]>([])

    useEffect(() => {
        setShowPageTitle('timeline')
        setOnCreateBlogpost(false)

        const fetchTimelineForYou = blogpostdata.filter((blogpost) => timeline.includes(blogpost.authorUserName))
        setTimelineBlogposts([...fetchTimelineForYou])
        //
        const fetchTimelineInterest = () => {
            const result: Blogpostprops[] = []

            blogpostdata.forEach((blogpost) => {
                blogpost.tags.filter((tag) => {
                    const found = interested.includes(tag)
                    if(found) result.push(blogpost)
                })
            })
            return result
        }
        setInterestedBlogposts(fetchTimelineInterest())
    }, [userData])


    const { Displayreturnedcomponent, setTo } = useReturnComponent((to, setTo) => {
        if (to === 'interested') return  <Listblogposts blogposts={interestedBlogposts} />
        else return <Listblogposts blogposts={timelineBlogposts} />
    })

    return <main>
        <div className='container pb-16'>
            <div className='w-full sticky -top-0 z-50'>
                <Nav className='w-full flex justify-center items-center gap-40 py-2 bg-white dark:bg-stone-900' Children={
                    <>
                        <Navlist><button onClick={() => setTo('for you')} >For you</button></Navlist>
                        <Navlist><button onClick={() => setTo('interested')}>Interested</button></Navlist>
                    </>
                } />
            </div>
            <div className=' flex justify-center mt-3'>
                <Displayreturnedcomponent />
            </div>
        </div>
    </main>
}

export default Timeline
