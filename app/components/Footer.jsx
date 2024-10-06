import Image from "next/image";
import { SparklesCore } from "../components/ui/sparkles";

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center md:flex-row justify-between">
          {/* Logo */}
          {/* <div className=" w-full bg-transparent flex flex-col items-center justify-center overflow-hidden rounded-xl">
            <h1 className="md:text-2xl text-3xl lg:text-5xl font-bold text-center text-white relative z-20">
              CS Services
            </h1>
          </div> */}
          <div className="mb-4 md:mb-0 md:w-1/3 text-center md:text-left">
            <Image src="/logo.png" alt="Logo" width={200} height={50} />
          </div>

          {/* Links */}
          <div className="flex space-x-6 mb-4 md:mb-0 md:w-1/3 justify-center">
            <a href="#Inicio" className="hover:text-gray-400">Inicio</a>
            {/* <a href="#" className="hover:text-gray-400">About</a> */}
            <a href="#Servicios" className="hover:text-gray-400">Servicios</a>
            <a href="#Contacto" className="hover:text-gray-400">Contacto</a>
          </div>

          {/* Social Media */}
          <div className="flex space-x-4 md:w-1/3 justify-center md:justify-end">
            <a href="#" aria-label="Facebook" className="hover:text-gray-400">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-gray-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-gray-400">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-6 mb-6">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} CS Services - Todos los derechos reservados
          </p>
        </div>
      </div>
      <div className="w-screen relative h-[30px]">
  {/* Gradients */}
  <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
  <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
  <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
  <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

  {/* Core component */}
  <SparklesCore
    background="transparent"
    minSize={0.4}
    maxSize={1}
    particleDensity={1200}
    className="w-full h-full"
    particleColor="#FFFFFF"
  />

  {/* Radial Gradient to prevent sharp edges */}
  <div className="absolute inset-0 w-full h-full [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
</div>
    </footer>
  );
};
