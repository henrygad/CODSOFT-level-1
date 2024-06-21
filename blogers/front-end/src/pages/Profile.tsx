import { H4, P } from '../ui/Text'
import { Listblogposts, Followbutton, Nav, Listcomments, Listuserquickinfor, Listsingleinterested } from '../components'
import { useContextBlogpost, useContextComments, useContextShowPageTitle, useContextUserData, useGetBlogpostByUsername, useGetCommentsByUsername, useGetUserQuicktInfor, useIsAccountOwner, useReturnComponent } from '../hooks'
import { NavLink, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Navlist } from '../ui/List'


const Profile = () => {
  const { userName } = useParams()
  if (!userName) return;
  const { setShowPageTitle } = useContextShowPageTitle()

  const { isOwnerOfAccount } = useIsAccountOwner({ authorizedUser: userName })
  const { userData: accountOwner } = useContextUserData()
  const { blogPost: accountOwnerBlogPost } = useContextBlogpost()

  const { getUserInfor } = useGetUserQuicktInfor()
  const { getBlogposts } = useGetBlogpostByUsername()

  const [profileData, setProfileData] = useState({})
  const [profileBlogpost, setProfileBlogpost] = useState([])
  const [profileComments, setProfileComments] = useState([])

  const [loading, setLoading] = useState(true)
  const [userNotFound, setUserNotFound] = useState(false)

  const { dispatch } = useContextComments()
  const { getComments } = useGetCommentsByUsername()


  const { Displayreturnedcomponent, setTo } = useReturnComponent((to) => {
    if (to === 'comments') return <Listcomments comments={profileComments} />
    if (to === 'followers') return <Listuserquickinfor follow={profileData.followers} />
    if (to === 'following') return <Listuserquickinfor follow={profileData.following} />
    if (to === 'Interested') return <Listsingleinterested interested={profileData.interested} />
    return <Listblogposts blogposts={profileBlogpost} />
  })

  useEffect(() => {

    if (isOwnerOfAccount) {
      setShowPageTitle('profile')

      const fetchComments = getComments({ finder: accountOwner.userName })
      setProfileData({ ...accountOwner })
      setProfileBlogpost(accountOwnerBlogPost)
      dispatch({ type: 'DISPLAY_COMMENTS', payload: fetchComments })
      setProfileComments(fetchComments)

      setUserNotFound(true)
      setLoading(false)
    } else {
      //api call
      const fetchData = getUserInfor({ finder: userName })
      const userBlogpost = getBlogposts({ finder: userName })

      if (fetchData) {

        if (Object.keys(fetchData).length === 0) {
          setShowPageTitle(`user not found`)
          setLoading(false)
          setUserNotFound(true)
        } else {
          setShowPageTitle(`on ${fetchData?.name}'s page`)

          const fetchComments = getComments({ finder: fetchData.userName })
          setProfileData({ ...fetchData })
          setProfileBlogpost(userBlogpost)
          setProfileComments(fetchComments)

          setLoading(false)
          setUserNotFound(true)

        }
      }
    }

    setTo('posts')
  }, [isOwnerOfAccount])

 

  return <main className='mt-2'>
    <div className='container relative'>
      {!loading && userNotFound ?
        <div className='space-y-4'>
          <div className='flex justify-between space-y-6 pb-1'>
            <div>
              <div className='space-y-[1px]'>
                <div id='profile image'><img className='h-14 w-14 rounded-full object-contain' src={profileData?.image} alt="" /></div>
                <div id='name'><H4 className='text-base text-stone-600'>{profileData?.name}</H4> </div>
                <div id='username'><H4 className='text-[.75rem] text-slate-400'>{profileData?.userName}</H4></div>
              </div>
              <div id='bio' className='max-w-[480px]'><P>{profileData?.bio}</P></div>
              <div>
                <div id='age' className='border-b max-w-[100px] pb-1'><H4 className='text-slate-500 text-sm'>{profileData?.age}</H4></div>
                <div id='email' className='border-b max-w-[100px] pb-1'><H4 className='text-slate-500 text-sm'>{profileData?.email}</H4></div>
                <div id='phonenumber' className='border-b max-w-[100px] pb-1'><H4 className='text-slate-500 text-sm'>{profileData?.phonenumber}</H4></div>
                <div id='website' className='border-b max-w-[100px] pb-1'><H4 className='text-slate-500 text-sm'>{profileData?.website}</H4></div>
                <div id='country'><H4 className='text-slate-500 text-sm'>{profileData?.country}</H4></div>
              </div>
            </div>
            <div id='button' className=' w-full flex flex-col items-end gap-6'>
              {!isOwnerOfAccount ?
                <div className='flex gap-6 '>
                  <button className=' block h-8 px-4 rounded-md font-text text-sm font-semibold text-white bg-pink-600'>dm</button>
                  <Followbutton userName={profileData.userName} />
                </div> :
                <div> <NavLink to='/editprofile' ><button className=' border py-2 px-3 rounded-full text-sm font-text'>edit profile</button></NavLink></div>
              }
              <Nav className='w-full flex flex-col gap-4 justify-end' Children={
                <>
                  <Navlist className='flex flex-wrap gap-10'>
                    <button onClick={() => setTo('followers')} >Followers  <span className='block text-slate-400 text-sm font-semibold'>{profileData?.followers.length}</span> </button>
                    <button onClick={() => setTo('following')} >Following <span className='block text-slate-400 text-sm font-semibold'>{profileData?.following.length}</span></button>
                  </Navlist>
                  <Navlist onClick={() => setTo('Interested')} className='flex justify-end'><button>Interested<span className='block text-slate-400 text-sm font-semibold'>{profileData?.interested.length}</span></button></Navlist>
                </>
              } />
            </div>
          </div>
          <div className='w-full sticky top-0 bg-white shadow-sm  z-50 '>
            {<Nav className='w-full flex justify-between gap-6 p-2' Children={
              <>
                <Navlist><button onClick={() => setTo('posts')} >posts</button></Navlist>
                {
                  isOwnerOfAccount && <>
                    <Navlist><button onClick={() => setTo('comments')} >comments</button></Navlist>
                    <Navlist><button onClick={() => setTo('media')} >media</button></Navlist>
                    <Navlist><button onClick={() => setTo('draft')} >draft</button></Navlist>
                    <Navlist><button onClick={() => setTo('saved')} >saved</button></Navlist>
                  </>
                }

              </>
            }
            />
            }
          </div>
          <div></div>
          <div className='flex justify-start'>
            <Displayreturnedcomponent />
          </div>
        </div> : <div>loading...</div>}
    </div>
  </main>
}

export default Profile
