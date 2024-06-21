import { Footer, Listblogposts } from '../components'
import { H1 } from '../ui/Text'
import { blogpostdata } from '../database/blogpost'

const Home = () => {
    return <>
        <main>
            <div className='container flex flex-col items-center'>
                <div >
                    <div className='mt-2'>
                        <H1 className='text-center'>Blogpost</H1>
                    </div>
                    <div className='mt-2 md:mt-4'>
                        <Listblogposts blogposts={blogpostdata} />
                    </div>
                </div>
            </div>
        </main>
        <Footer />
    </>
}

export default Home
