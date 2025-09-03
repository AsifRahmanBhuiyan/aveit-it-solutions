import React from 'react';
import logo from '../../assets/logo.png'

const Navbar = () => {
    return (
        <div>
            <div className=' container mx-auto py-8'>
                <div className="navbar bg-base-100 text-gray-800 font-medium">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                <li><a>HOME</a></li>
                                <li><a>ABOUT</a></li>
                                <li><a>SERVICES</a></li>
                                <li><a>PROJECTS</a></li>
                                <li><a>BLOG</a></li>
                                <li><a>CONTACT</a></li>
                            </ul>
                        </div>
                        <img className=' w-34' src={logo} alt="" />
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><a>HOME</a></li>
                            <li><a>ABOUT</a></li>
                            <li><a>SERVICES</a></li>
                            <li><a>PROJECTS</a></li>
                            <li><a>BLOG</a></li>
                            <li><a>CONTACT</a></li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto bg-gray-100" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;