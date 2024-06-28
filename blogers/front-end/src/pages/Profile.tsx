import { H4, P, Pdefault, Psm } from '../ui/Text'
import { Listblogposts, Followbutton, Nav, Listcomments, Listuserquickinfor, Listsingleinterested, Scrollhorizontalnav } from '../components'
import { useContextBlogpost, useContextComments, useContextOnCreateBlogpost, useContextShowPageTitle, useContextUserData, useGetBlogpostByUsername, useGetCommentsByUsername, useGetUserQuicktInfor, useIsAccountOwner, useReturnComponent } from '../hooks'
import { NavLink, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Navlist } from '../ui/List'
import { Roundedbtn } from '../ui/buttons'


const Profile = () => {
  const { userName } = useParams()
  if (!userName) return;
  const { setShowPageTitle } = useContextShowPageTitle()
  const { setOnCreateBlogpost } = useContextOnCreateBlogpost()

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
    setOnCreateBlogpost(false)
  }, [isOwnerOfAccount])


  return <main className='mt-2'>
    <div className='container relative pb-16'>
      {!loading && userNotFound ?
        <div className='space-y-4'>
          <div className='flex justify-between space-y-6 pb-1'>
            <div id='profile-details' className='flex-1 space-y-3'>
              <div >
                <div id='profile image'><img className='h-14 w-14 rounded-full object-contain' src={profileData?.image} alt="" /></div>
                <div id='name'><Pdefault className='text-base  first-letter:capitalize'>{profileData?.name}</Pdefault> </div>
                <div id='username'><Pdefault className='text-[.8rem] text-stone-400'>{profileData?.userName}</Pdefault></div>
              </div>
              <div id='bio' className='spcae-y-1'>
                <div className='max-w-[480px]'><P>{profileData?.bio}</P> </div>
                <div >
                  <div id='age' className=' max-w-[100px]'><Psm className='text-slate-500'>{profileData?.age}</Psm></div>
                  <div id='email' className=' max-w-[100px]'><Psm className='text-slate-500'>{profileData?.email}</Psm></div>
                  <div id='phonenumber' className=' max-w-[100px]'><Psm className='text-slate-500'>{profileData?.phonenumber}</Psm></div>
                  <div id='website' className=' max-w-[100px]'><Psm className='text-slate-500'>{profileData?.website}</Psm></div>
                  <div id='country'><Psm className='text-slate-500 first-letter:capitalize'>{profileData?.country}</Psm></div>
                </div>
              </div>
            </div>
            <div id='buttons' className='flex-1 flex flex-col items-end gap-6'>
              {!isOwnerOfAccount ?
                <div className='flex gap-6  '>
                  <button className=' block h-8 px-4 rounded-md font-text text-sm font-semibold text-white bg-pink-600'>dm</button>
                  <Followbutton userName={profileData.userName} />
                </div> :
                <div> <NavLink to='/editprofile' ><Roundedbtn >edit profile</Roundedbtn></NavLink></div>
              }
              <Nav className='w-full grid grid-cols-2 grid-rows-2 justify-items-end gap-4' Children={
                <>
                  <Navlist><button onClick={() => setTo('followers')} >Followers  <span className='block text-slate-400 text-sm font-semibold'>{profileData?.followers.length}</span> </button></Navlist>
                  <Navlist ><button onClick={() => setTo('following')} >Following <span className='block text-slate-400 text-sm font-semibold'>{profileData?.following.length}</span></button></Navlist>
                  <Navlist onClick={() => setTo('Interested')} className='col-span-2 '><button>Interested<span className='block text-slate-400 text-sm font-semibold'>{profileData?.interested.length}</span></button></Navlist>
                </>
              } />
            </div>
          </div>
          <div className='w-full sticky top-0 z-50 '>
            {<Nav className='w-full flex justify-between gap-6 p-2' Children={
              <Scrollhorizontalnav Children={
                <>
                  <Navlist className='basis-1/3 md:basis-1/6 grow-0 shrink-0 snap-center snap-always' ><button onClick={() => setTo('posts')} >Posts</button></Navlist>
                  {
                    isOwnerOfAccount && <>
                      <Navlist className='basis-1/3 md:basis-1/6 grow-0 shrink-0 snap-center snap-always' ><button onClick={() => setTo('comments')} >Comments</button></Navlist>
                      <Navlist className='basis-1/3 md:basis-1/6 grow-0 shrink-0 snap-center snap-always' ><button onClick={() => setTo('media')} >Media</button></Navlist>
                      <Navlist className='basis-1/3 md:basis-1/6 grow-0 shrink-0 snap-center snap-always'><button onClick={() => setTo('draft')} >Draft</button></Navlist>
                      <Navlist className='basis-1/3 md:basis-1/6 grow-0 shrink-0 snap-center snap-always' ><button onClick={() => setTo('saved')} >Saved</button></Navlist>
                    </>
                  }
                </>
              } />

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
