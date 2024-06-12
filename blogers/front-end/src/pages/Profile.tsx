import { H3, H4, P } from '../ui/Text'
import { Listblogposts, Followbutton} from '../component'
import { userData } from '../database/userdata'
import { useGetBlogpostByUsername } from '../hooks'

const Profile = () => {
  const user = '@henrygad'
  const fetchUserData = userData.find((items)=> items.userName === user)
  const followersNum = fetchUserData?.followers.length
  const followingNum = fetchUserData?.following.length
  const {getBlogposts} = useGetBlogpostByUsername()
  

  return <main className='mt-16 pb-10'>
        <div className='container relative'>
          <div className='sticky -top-[260px] space-y-6 bg-white shadow-sm px-2 pb-2 z-40'>
            <div className='flex justify-between'>
                <div className='space-y-[1px]'>
                    <div id='profile image'><img className='h-14 w-14 rounded-full object-contain' src={fetchUserData?.image} alt="" /></div>
                    <div id='name'><H4 className='text-base text-stone-600'>{fetchUserData?.name}</H4> </div>
                    <div id='username'><H4 className='text-[.75rem] text-slate-400'>{fetchUserData?.userName}</H4></div>
                </div>
                <div id='follow button' className='mt-3'>
                    <Followbutton />
                </div>
            </div>
            <div id='bio' className='max-w-[480px]'><P>{fetchUserData?.bio}</P></div>
            <div>
              <div id='date-of-birth' className='border-b max-w-[100px] pb-1'><H4 className='text-slate-500 text-sm'>{fetchUserData?.birthday}</H4></div>
              <div id='email' className='border-b max-w-[100px] pb-1'><H4 className='text-slate-500 text-sm'>{fetchUserData?.email}</H4></div>
              <div id='phonenumber' className='border-b max-w-[100px] pb-1'><H4 className='text-slate-500 text-sm'>{fetchUserData?.phonenumber}</H4></div>
              <div id='website' className='border-b max-w-[100px] pb-1'><H4 className='text-slate-500 text-sm'>{fetchUserData?.website}</H4></div>
              <div id='country'><H4 className='text-slate-500 text-sm'>{fetchUserData?.country}</H4></div>
            </div>
            <div className='flex gap-16'>
                <div id='followers'>
                  <H3 className='text-[1rem] text-stone-800 font-bold cursor-pointer'>Followers <span className='block text-slate-400 text-sm font-semibold'>{followersNum}</span></H3> 
                </div>
                <div id='followers'>
                  <H3 className='text-[1rem] text-stone-800 font-bold cursor-pointer'>Following <span className='block text-slate-400 text-sm font-semibold'>{followingNum}</span></H3>
                </div>
            </div>
          </div>
          <div className='mt-4  flex justify-center'>
            <Listblogposts blogposts={getBlogposts({finder: user})} />
          </div>
        </div>
  </main>
}

export default Profile
