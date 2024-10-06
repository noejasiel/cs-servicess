'use client';

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
        <nav className='z-50'
        style={{
            backgroundColor: isScrolled ? '#00123d6e' : 'transparent',
            backdropFilter: isOpen ? 'blur(3px)' : 'none',
            zIndex: 100,
        }}>
            <div
                className={`fixed top-0 w-full transition duration-300 z-50 backdrop-blur-lg ${isScrolled ? 'bg-[#00123d6e]/30 shadow-sm' : 'bg-transparent'
                    } ${isOpen ? 'bg-[#00123d6e]/60 backdrop-blur-3xl' : ''}`}
                    style={{ zIndex: "100 !important" }}
            >
                <div className="container mx-auto px-4 flex justify-between items-center">
                <Image
  src="/logo.png"
  alt="Logo"
  width={400} // Tamaño por defecto para pantallas grandes
  height={70}
  className="w-[200px] h-auto sm:w-[250px] sm:h-auto lg:w-[400px] lg:h-auto"
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

                    {/* Menú de navegación para pantallas grandes */}
                    <ul
                        className={`hidden lg:flex space-x-4 items-center`}
                    >
                        <li>
                            <a href="#home" className="text-white hover:text-gray-300">
                                Inicio
                            </a>
                        </li>
                        {/* <li>
                            <a href="#about" className="text-white hover:text-gray-300">
                                About
                            </a>
                        </li> */}
                        <li>
                            <a href="#services" className="text-white hover:text-gray-300">
                                Servicios
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="text-white hover:text-gray-300">
                                Contacto
                            </a>
                        </li>
                    </ul>
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
                            Inicio
                        </a>
                    </li>
                    {/* <li>
                        <a href="#about" className="block hover:text-gray-300">
                            About
                        </a>
                    </li> */}
                    <li>
                        <a href="#services" className="block hover:text-gray-300">
                            Servicios
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="block hover:text-gray-300">
                            Contacto
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
