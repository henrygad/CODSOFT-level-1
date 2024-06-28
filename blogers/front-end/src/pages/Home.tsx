import { Allsearchresault, Footer, Listblogposts } from '../components'
import { blogpostdata } from '../database/blogpost'
import { userData } from '../database/userdata'
import { Psm } from '../ui/Text'

const Home = () => {
    return <>
        <main >
            <div className='container pb-10'>
                <div className='mt-5'>
                    <div className='text-center'><Psm>Treading</Psm></div>
                    <div className='mt-4'>
                        <Allsearchresault profilesSearchResault={userData} blogpostsSearchResault={blogpostdata} />
                    </div>
                </div>
            </div>
        </main>
        <Footer />
    </>
}

export default Home
