// components/WhatsAppButton.jsx

import React from 'react';

export default function WhatsAppButton() {
  const phoneNumber = "5540808799"; // Reemplaza con tu número de WhatsApp
  const message = "Hola, estoy interesado en tus servicios."; // Mensaje inicial
  
  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 transition-colors"
    >
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        className="w-8 h-8 text-white"
      >
        <path
          fill="currentColor"
          d="M16 0C7.163 0 0 7.163 0 16c0 2.841.744 5.554 2.166 7.964L.191 31.897l8.225-2.053C10.456 30.59 13.186 31 16 31c8.837 0 16-7.163 16-15.999C32 7.163 24.837 0 16 0zm.032 29.031c-2.664 0-5.267-.674-7.597-1.958l-.544-.307-4.885 1.218 1.289-4.768-.349-.56A12.946 12.946 0 0 1 3.031 16C3.031 8.719 8.718 3.032 16 3.032c7.282 0 12.969 5.687 12.969 12.969 0 7.283-5.687 12.969-12.969 12.969zm7.246-9.238c-.4-.2-2.361-1.166-2.726-1.3-.365-.134-.631-.2-.898.2s-1.031 1.3-1.263 1.566c-.232.266-.465.3-.865.1-.4-.2-1.688-.623-3.216-1.988-1.189-1.062-1.988-2.376-2.223-2.776-.232-.4-.025-.615.175-.815.18-.182.4-.482.6-.732.2-.25.266-.433.4-.732.133-.266.067-.565-.033-.732-.1-.2-.898-2.164-1.23-2.964-.333-.8-.665-.682-.898-.682-.232 0-.498-.025-.765-.025s-.732.1-1.116.565c-.365.482-1.402 1.366-1.402 3.332 0 1.965 1.432 3.864 1.631 4.132.2.266 2.816 4.3 6.828 5.677.956.333 1.7.533 2.285.682.965.3 1.844.258 2.54.158.774-.116 2.361-.964 2.694-1.897.332-.932.332-1.73.232-1.897-.1-.166-.365-.266-.765-.466z"
        />
        </svg>
    </a>
  );
}