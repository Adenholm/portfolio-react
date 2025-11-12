import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {LeavesUnderline} from '../assets/icons/leaves';
import LeafUnderline from '../assets/icons/leaf';


const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <nav className="bg-transparent p-4 w-screen sticky top-0 z-50">
            <div className="container mx-auto max-w-6xl flex justify-between items-center">
                <div className='group relative w-max'>
                    <div className="text-white text-xl font-[Josefin_sans] cursor-pointer" onClick={() => navigate('/')}>Hanna Adenholm</div>
                    <LeafUnderline size={160} color="#fff" className="absolute -bottom-4 left-0 right-0 mx-auto"/>
                </div>
                <div className="block lg:hidden bg-transparent">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                            ></path>
                        </svg>
                    </button>
                </div>
                <div
                    className={`${
                        isOpen ? 'block' : 'hidden'
                    } w-full lg:flex lg:items-center lg:w-auto`}
                >
                    <ul className="lg:flex lg:space-x-4">
                        <li className="group relative w-max py-2 px-4">
                            <Link to="/" className="block text-white">
                                Home
                            </Link>
                            <LeavesUnderline size={48} color="#fff" className="absolute -bottom-2 left-0 right-0 mx-auto"/>
                        </li>
                        <li className="group relative w-max py-2 px-4">
                            <Link to="/about" className="block text-white">
                                About
                            </Link>
                            <LeavesUnderline size={48} color="#fff" className="absolute -bottom-2 left-0 right-0 mx-auto"/>
                        </li>
                        <li className="group relative w-max py-2 px-4">
                            <Link to="/projects" className="block text-white">
                                Projects
                            </Link>
                            <LeavesUnderline size={48} color="#fff" className="absolute -bottom-2 left-0 right-0 mx-auto"/>
                        </li>
                        <li className="group relative w-max py-2 px-4">
                            <Link to="/contact" className="block text-white">
                                Contact
                            </Link>
                            <LeavesUnderline size={48} color="#fff" className="absolute -bottom-2 left-0 right-0 mx-auto"/>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;