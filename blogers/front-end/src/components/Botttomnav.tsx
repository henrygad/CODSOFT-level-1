import Nav from './Nav'
import { Navlist } from '../ui/List'
import { NavLink } from 'react-router-dom'
import { useContextAuthentication, useContextOnCreateBlogpost } from '../hooks'
import { Penicon,  Homeicon, Notificationsicon, Mailicon, Profileicon, Searchicon} from './Icons'


const Botttomnav = () => {
    const { loginUser } = useContextAuthentication()
    const { onCreateBlogpost } = useContextOnCreateBlogpost()

    const bottomNavList = [
        { url: '/timeline', displayName: <Homeicon/>, linkName: 'home' },
        { url: '/search', displayName: <Searchicon size='2'/>, linkName: 'search'},
        { url: '/notification', displayName: <Notificationsicon/>, linkName: 'notification' },
        { url: '/directmessage', displayName: <Mailicon/>, linkName: 'message' },
        { url: '/' + loginUser, displayName: <Profileicon/>, linkName: 'profile page' },
    ]

    return <div className='relative '>
        <div className='container fixed right-0 left-0 bottom-0 border-t bg-white dark:bg-stone-900 py-4 shadow-sm z-[100]'>
            <Nav className=' justify-between w-full' Children={<>
                {bottomNavList.map((list) =>
                    <Navlist key={list.linkName} className='first-letter:capitalize'> <NavLink to={list.url} >{list.displayName}</NavLink></Navlist>
                )}
            </>} />
            <div className='relative '>
                {!onCreateBlogpost &&
                    <div className='absolute -top-40 right-1'>
                        <NavLink to='/createblogpost' >
                            <button className='flex justify-center items-center h-10 w-10 border rounded-full shadow-md'>
                                <Penicon />
                            </button>
                        </NavLink>
                    </div>}
            </div>
        </div>
    </div>
}

export default Botttomnav
