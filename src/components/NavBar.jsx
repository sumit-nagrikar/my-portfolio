import { useState } from 'react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-sm border-b border-gray-800 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between p-1">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl text-gray-300 font-extrabold font-mono">
          PORTFOLIO
        </h1>

        {/* Hamburger Menu for Smaller Screens */}
        <button
          onClick={toggleMenu}
          className="text-white md:hidden focus:outline-none"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>

        {/* Navigation Links */}
        <nav
          className={`absolute top-16 left-0 w-full h-[100vh] md:h-0 bg-gray-900 md:bg-none border-t border-gray-800 md:border-0 md:static md:w-auto md:flex md:items-center ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <ul className="flex flex-col md:flex-row gap-2 md:gap-8 text-xl md:py-0">
            <li>
              <a
                href="#home"
                className="block py-2 px-4 text-white hover:text-gray-400 transition duration-200"
                onClick={closeMenu}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="block py-2 px-4 text-white hover:text-gray-400 transition duration-200"
                onClick={closeMenu}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="block py-2 px-4 text-white hover:text-gray-400 transition duration-200"
                onClick={closeMenu}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block py-2 px-4 text-white hover:text-gray-400 transition duration-200"
                onClick={closeMenu}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
