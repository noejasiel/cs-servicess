'use client';

// components/Navbar.js
import { useState } from 'react';
import Image from 'next/image';
import { useScroll } from './hooks/useScroll';

export const Navbar = () => {
    const scrollPosition = useScroll();
    const isScrolled = scrollPosition > 50;
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className='z-50'>
            <div
                className={`fixed top-0 w-full transition duration-300 z-50 backdrop-blur-lg ${isScrolled ? 'bg-[#00123d6e]/30 shadow-sm' : 'bg-transparent'
                    } ${isOpen ? 'bg-[#00123d6e]/30 backdrop-blur-3xl' : ''}`}
            >
                <div className="container mx-auto p-4 flex justify-between items-center">
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={250}
                        height={70}
                    />

                    {/* Botón de hamburguesa para móviles */}
                    <div className={`lg:hidden ${isOpen ? 'hidden' : 'block'}`} >
                        <button
                            onClick={toggleMenu}
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
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </button>
                    </div>

                    {/* Botón para cerrar el menú en móviles */}
                    <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
                        <button onClick={closeMenu} className="text-white">
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
                                    d="M6 18L18 6M6 6l12 12"
                                ></path>
                            </svg>
                        </button>
                    </div>

                    {/* Menú de navegación */}
                    {/* <ul
        className={`lg:flex space-x-4 items-center transition-all duration-300 ${
            isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'
        } lg:translate-y-0 lg:opacity-100`}
    >
        <li>
            <a href="#home" className="text-white hover:text-gray-300">
                Home
            </a>
        </li>
        <li>
            <a href="#about" className="text-white hover:text-gray-300">
                About
            </a>
        </li>
        <li>
            <a href="#services" className="text-white hover:text-gray-300">
                Services
            </a>
        </li>
        <li>
            <a href="#contact" className="text-white hover:text-gray-300">
                Contact
            </a>
        </li>
    </ul> */}
                </div>

            </div>

            {/* Menú desplegable para móviles */}
            <div
                className={`lg:hidden ${isOpen ? 'block' : 'hidden'
                    } bg-[#00123d6e]/60 text-white shadow-md transition duration-300 w-[60%] h-screen fixed right-0 backdrop-blur-3xl top-20 z-40`}
            >
                <ul className="space-y-2 p-4">
                    <li>
                        <a href="#home" className="block hover:text-gray-300">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#about" className="block hover:text-gray-300">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#services" className="block hover:text-gray-300">
                            Services
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="block hover:text-gray-300">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );

};
