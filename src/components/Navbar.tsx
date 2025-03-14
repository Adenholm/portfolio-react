import React, { useState } from 'react';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-transparent p-4 w-screen">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">MyPortfolio</div>
                <div className="block lg:hidden bg-transparent">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white focus:outline-none bg-blue-500"
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
                        <li>
                            <a href="#" className="block text-white py-2 px-4">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block text-white py-2 px-4">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block text-white py-2 px-4">
                                Projects
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block text-white py-2 px-4">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;