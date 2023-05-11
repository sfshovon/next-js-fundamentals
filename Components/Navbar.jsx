import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import NavLogo from '../public/Next.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('rgb(240 253 250)');
  const handleNav = () => {
    setNav(!nav);
  };
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={shadow
        ? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300'
        : 'fixed w-full h-20 z-[100]'
      }
    >
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Link href='/'>
          <Image
            src={NavLogo}
            alt='/'
            width='125'
            height='50'
            className='cursor-pointer block box-border h-14 w-14 md:h-16 md:w-16 overflow-hidden rounded-full transform hover:scale-110'
          />
        </Link>
        <div>
          <ul className="hidden md:flex md:space-x-6 md:space-y-0">
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
          <div
            onClick={handleNav}
            className='md:hidden'
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
              <Link href='/'>
                  <Image
                    className='block box-border h-14 w-14 md:h-16 md:w-16 overflow-hidden rounded-full transform hover:scale-110'
                    src={NavLogo}
                    width='87'
                    height='35'
                    alt='/'
                  />
              </Link>
              <div
                onClick={handleNav}
                className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
              >
                <AiOutlineClose />
              </div>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <Link href='/'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Home
                </li>
              </Link>
              <Link href='/routing'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Routing
                </li>
              </Link>
              <Link href='/preRendering'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Pre-Rendering
                </li>
              </Link>
              <Link href='/apiRoutes'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  API Routes
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;


