import Nav from "./Nav"
import { NavLink } from 'react-router-dom'
import { Navlist } from '../ui/List'

const Footer = () => {
    return <footer>
        <div className="container pt-20 border-t space-y-8 ">
            <div className="flex justify-between items-center">
                <div className=" space-y-4">
                    <div id='logo'>
                        <NavLink to="/">
                            <p className='font-secondary cursor-pointer'>
                                <span className='font-bold text-green-700 text-xl'>Blog</span>
                                <span className='font-semibold text-base '>gers</span>
                            </p>
                        </NavLink>
                    </div>
                    <Nav className=" flex-col gap-4" Children={<>
                        <Navlist><NavLink to="/">Home</NavLink></Navlist>
                        <Navlist><NavLink to="/about-us">About</NavLink></Navlist>
                        <Navlist><NavLink to="/contact-us">contact</NavLink></Navlist>
                    </>}
                    />
                </div>
            </div>
            <div id="copywrite" className="text-center font-text text-sm pb-1">copyright 2022 all right revered</div>
        </div>
    </footer>
}

export default Footer