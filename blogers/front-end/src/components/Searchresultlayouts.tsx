import { Navlist } from "../ui/List"
import { H4 } from "../ui/Text"
import Displayuserquickinfor from "./Displayuserquickinfor"
import Listblogposts from "./Listblogposts"
import Nav from "./Nav"


export const Allsearchresault = ({ profilesSearchResault, blogpostsSearchResault }: { profilesSearchResault: [], blogpostsSearchResault: [] }) => <div className='space-y-2'>
    <div className='w-full flex justify-between items-center gap-8 py-2 px-1 border-y'>
        {profilesSearchResault ?
            profilesSearchResault.map((profile: { userName: string }) =>
                <Displayuserquickinfor key={profile.userName} authorUserName={profile.userName} />
            ) : <div>loading...</div>
        }
    </div>
    <div className='w-full flex flex-wrap-reverse gap-8'>
        <div className='flex-1'>
            <Listblogposts blogposts={blogpostsSearchResault} />
        </div>
        <div className='flex-1 flex flex-wrap md:flex-nowrap justify-center gap-8 md:mt-10'>
            <div className='flex-1 flex justify-center xl:justify-end'>
                <div className='space-y-4'>
                    <H4>popular tags</H4>
                    <Nav className='flex-col gap-2 ' Children={<>
                        <Navlist>#programming</Navlist>
                        <Navlist>#jsIntership</Navlist>
                        <Navlist>#workFromHome</Navlist>
                        <Navlist>#whatido</Navlist>
                    </>} />
                </div>
            </div>

            <div className='flex-1 flex justify-center xl:justify-end'>
                <div className='space-y-4'>
                    <H4>popular catigories</H4>
                    <Nav className='flex-col gap-2 ' Children={<>
                        <Navlist>online business</Navlist>
                        <Navlist>blogging</Navlist>
                        <Navlist>youTuber</Navlist>
                        <Navlist>health</Navlist>
                    </>} />
                </div>
            </div>
        </div>
    </div>
</div>

export const Blogpostssearchresault = ({ blogpostsSearchResault }: { blogpostsSearchResault: [] }) => <div className='flex justify-center'>
    <Listblogposts blogposts={blogpostsSearchResault} />
</div>

export const Profilessearchresault = ({ profilesSearchResault }: { profilesSearchResault: [] }) => <div className='flex flex-col gap-4 '>
    {profilesSearchResault ?
        profilesSearchResault.map((profile: { userName: string }) =>
            <Displayuserquickinfor key={profile.userName} authorUserName={profile.userName} />
        ) : <div>loading...</div>
    }
</div>

export const Groupssearchresault = () => <div>
    groups
</div>
