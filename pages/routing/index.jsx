import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

const Routing = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
    // router.replace("/") //it won't allow to navigate to the page it comes from using < or > sign
  };

  return (
    <div className="px-4 md:px-32 pt-20 pb-10 bg-slate-100">
      <Head>
        <title>Routing - Next.Js </title>
      </Head>
      <div className="flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-dark mb-8">This is the basic Routing Page of Next.Js</h1>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Routing</h2>
          <p className="text-lg md:text-xl font-medium text-justify leading-relaxed mb-6">Next.js has a file-system based router built on the concept of pages. When a file is added to the pages directory, it's automatically available as a route. The files inside the pages directory can be used to define most common patterns.</p>
          <h3 className="text-2xl font-bold mb-4">Index Routes</h3>
          <p className="text-lg md:text-xl font-medium text-justify leading-relaxed">The router will automatically route files named index to the root of the directory.</p>
          <ul className="list-disc list-inside mt-2">
            <li className="text-lg md:text-xl font-medium text-justify leading-relaxed">pages/index.js → /</li>
            <li className="text-lg md:text-xl font-medium text-justify leading-relaxed">pages/routing/index.js → /routing</li>
          </ul>
        </div>
      </div>
      
      <div className="flex flex-col items-center">
        <h1 className="mt-2 text-4xl font-bold text-gray-800 mb-8">Next.Js Routing Example</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center justify-between bg-blue-200 p-4 rounded-md w-full">
            <h2 className="text-xl font-bold text-sky-800 mb-4">Nested Routing</h2>
            <Link href="/routing/docs">
              <button className="text-white font-bold bg-sky-900 hover:bg-teal-700 rounded-md px-4 py-2">
                Visit Docs Page
              </button>
            </Link>
          </div>
          <div className="flex flex-col items-center justify-between bg-violet-200 p-4 rounded-md w-full">
            <h2 className="text-xl font-bold text-violet-800 mb-4">Dynamic Routing & Nested Dynamic Routing</h2>
            <Link href="/routing/product">
              <button className="text-white font-bold bg-blue-900 hover:bg-teal-700 rounded-md px-4 py-2">
                Visit Product Page
              </button>
            </Link>
          </div>
          <div className="flex flex-col items-center justify-between bg-red-200 p-4 rounded-md w-full">
            <h2 className="text-xl font-bold text-red-800 mb-4">Catch All Routes</h2>
            <Link href="/routing/blog">
              <button className="text-white font-bold bg-red-900 hover:bg-teal-700 rounded-md px-4 py-2">
                Visit Blog Page
              </button>
            </Link>
          </div>
          <div className="flex flex-col items-center justify-between bg-teal-200 p-4 rounded-md w-full">
            <h2 className="text-xl font-bold text-teal-800 mb-4">Go Back to Home Programmatically</h2>
            <button onClick={handleClick} className="text-white font-bold bg-teal-800 hover:bg-teal-700 rounded-md px-4 py-2">
              Go Home
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Routing;