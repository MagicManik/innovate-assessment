import React from 'react';
import logo from '../../assets/logo/logo.png';
import { Link } from 'react-router-dom';

const NavItems = ({ user, logout }) => {
    const menuItems = <>
        {
            user && <li><Link to="/dashboard">Dashboard</Link></li>
        }
        <li className=' list-none'>{user ? <button onClick={logout} className="btn btn-ghost">Sign Out</button> : <button type="submit" className="btn bg-[#0010B5] outline-none border-none hover:bg-[#F8AF41] hover:text-black normal-case font-normal text-white h-[40px] w-[85px]"><Link to="/login">Sign in</Link></button>}</li>
    </>

    return (
        <div className="border-2 border-b-[#F7F3F7]">
            <div className='max-w-7xl navbar mx-auto lg:px-0 px-4'>
                <div className="flex-1">
                    <Link to='/' className="lg:w-32 w-20">
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                    </div>
                    <div className="dropdown dropdown-end">
                        <div>
                            {menuItems}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavItems