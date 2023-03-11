import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <button className="text-white text-xl font-bold tracking-wide">My Site</button>
            </Link>
          </div>
          <div className="flex items-center">
            <div className="hidden md:block">
              <Link href="/">
                <button className="text-gray-300 hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </button>
              </Link>
              <Link href="/routing">
                <button className="text-gray-300 hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium">
                  Routing
                </button>
              </Link>
              <Link href="/preRendering">
                <button className="text-gray-300 hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium">
                  Pre-Rendering
                </button>
              </Link>
              <Link href="/apiRoutes">
                <button className="text-gray-300 hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium">
                  API Routes
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;