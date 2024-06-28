import { Navlist } from "../ui/List"
import { H4 } from "../ui/Text"
import Displayuserquickinfor from "./Userquickinfor"
import Listblogposts from "./Listblogposts"
import Nav from "./Nav"
import { Blogpostprops, Userprops } from "../entities"
import Scrollhorizontalnav from "./Scrollhorizontalnav"


export const Allsearchresault = ({ profilesSearchResault, blogpostsSearchResault }: { profilesSearchResault: Userprops[], blogpostsSearchResault: Blogpostprops[] }) =>
    <div className='space-y-6 overflow-x-hidden'>
        <Scrollhorizontalnav Children={
            <>
                {profilesSearchResault ?
                    profilesSearchResault.map((profile: { userName: string }) =>
                        <div key={profile.userName} className="basis-1/2 md:basis-1/3 grow-0 shrink-0 snap-center snap-always"  ><Displayuserquickinfor authorUserName={profile.userName} /></div>
                    ) : <div>loading...</div>
                }
                {profilesSearchResault ?
                    profilesSearchResault.map((profile: { userName: string }) =>
                        <div key={profile.userName} className="basis-1/2 md:basis-1/3 grow-0 shrink-0 snap-center snap-always"  ><Displayuserquickinfor authorUserName={profile.userName} /></div>
                    ) : <div>loading...</div>
                }
            </>
        } />
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
