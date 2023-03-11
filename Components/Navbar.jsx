import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [zoom, setZoom] = useState(1);
 
  return (
    <nav className="fixed top-0 z-50 w-full shadow-lg bg-gray-100">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-3 md:block">
            <div
              className="relative flex items-center justify-between gap-5"
              onMouseEnter={() => setZoom(1.5)}
              onMouseLeave={() => setZoom(1)}
            >
              <Image
                src="/Next.png"
                alt="logo"
                width={48}
                height={48}
                style={{ transform: `scale(${zoom})` }}
              />
              <h2 className="text-lg font-bold text-dark font-mono">
                Next.Js Fundamentals
              </h2>
            </div>

            <div className="md:hidden">
              <button
                className="p-2 rounded-md outline-none border-zinc-900 border shadow-2xl"
                onClick={() => setMenu(!menu)}
              >
              {menu ? (
                <FaTimes className="text-gray-600 h-6 w-6 flex justify-center items-center" />
              ) : (
                <FaBars className="text-gray-600 h-6 w-6 flex justify-center items-center" />
              )}
              </button>
            </div>
          </div>
        </div>

        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              menu ? "block" : "hidden"
            }`}
          >
            {/* Menu For Mobile Devices */}
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="md:ml-4">
                <Link
                  href="/"
                  className="no-underline font-bold md:border-none md:mx-5 md:p-0 md:text-l p-2"
                >
                  <span className="hover:text-teal-900 hover:border-b-2 hover:border-gray-900 hover:animation-ease-in-out hover:animatoin-pulse hover:duration-300 hover:text-xl">
                    Home
                  </span>
                </Link>
              </li>
              <li className="md:ml-4">
                <Link
                  href="/routing"
                  className="no-underline font-bold md:border-none md:mx-5 md:p-0 md:text-lg p-2"
                >
                  <span className="hover:text-teal-900 hover:border-b-2 hover:border-gray-900 hover:animation-ease-in-out hover:animation-pulse hover:duration-300 hover:text-xl">
                    Routing
                  </span>
                </Link>
              </li>
              <li className="md:ml-4">
                <Link
                  href="/preRendering"
                  className="no-underline font-bold md:border-none md:mx-5 md:p-0 md:text-lg p-2"
                >
                  <span className="hover:text-teal-900 hover:border-b-2 hover:border-gray-900 hover:animation-ease-in-out hover:animation-pulse hover:duration-300 hover:text-xl">
                    Pre-Rendering
                  </span>
                </Link>
              </li>
              <li className="md:ml-4">
                <Link
                  href="/apiRoutes"
                  className="no-underline font-bold md:border-none md:mx-5 md:p-0 md:text-lg p-2"
                >
                  <span className="hover:text-teal-900 hover:border-b-2 hover:border-gray-900 hover:animation-ease-in-out hover:animation-pulse hover:duration-300 hover:text-xl">
                    API Routes
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

  </div>
</nav>
  
  );
};

export default Navbar;