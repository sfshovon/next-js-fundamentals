import Head from "next/head";
import Link from "next/link";

const Product = () => {
  return (
    <div className="pt-20 bg-slate-100 h-screen px-4 md:px-32">
      <Head>
        <title>Product Page</title>
      </Head>

      <div className="flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-dark mb-8">This is the Dynamic Routing Page of Next.Js</h1>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Product Page</h2>
          <p className="text-lg md:text-xl font-medium text-justify leading-relaxed mb-6">To match a dynamic segment, you can use the bracket syntax. This allows you to match named parameters.</p>
          <ul className="list-disc list-inside mt-2">
            <li className="text-lg md:text-xl font-medium text-justify leading-relaxed">pages/blog/[slug].js → /blog/:slug (/blog/hello-world)</li>
            <li className="text-lg md:text-xl font-medium text-justify leading-relaxed">pages/[username]/settings.js → /:username/settings (/foo/settings)</li>
            <li className="text-lg md:text-xl font-medium text-justify leading-relaxed">pages/post/[...all].js → /post/* (/post/2020/id/title) </li>
          </ul>
        </div>
      </div>
      
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Link href="product/1">
          <div className="border border-gray-200 rounded-lg p-4 shadow-lg hover:shadow-xl transition duration-300 ease-in-out cursor-pointer">
            <button className="text-2xl md:text-3xl lg:text-4xl text-cyan-800 font-bold focus:outline-none hover:text-gray-800 hover:scale-105">
              Product 1
            </button>
          </div>
        </Link>
        <Link href="product/2">
          <div className="border border-gray-200 rounded-lg p-4 shadow-lg hover:shadow-xl transition duration-300 ease-in-out cursor-pointer">
            <button className="text-2xl md:text-3xl lg:text-4xl text-cyan-800 font-bold focus:outline-none hover:text-gray-800 hover:scale-105">
              Product 2
            </button>
          </div>
        </Link>
        <Link href="product/3">
          <div className="border border-gray-200 rounded-lg p-4 shadow-lg hover:shadow-xl transition duration-300 ease-in-out cursor-pointer">
            <button className="text-2xl md:text-3xl lg:text-4xl text-cyan-800 font-bold focus:outline-none hover:text-gray-800 hover:scale-105">
              Product 3
            </button>
          </div>
        </Link>
        <Link href="product/4">
          <div className="border border-gray-200 rounded-lg p-4 shadow-lg hover:shadow-xl transition duration-300 ease-in-out cursor-pointer">
            <button className="text-2xl md:text-3xl lg:text-4xl text-cyan-800 font-bold focus:outline-none hover:text-gray-800 hover:scale-105">
              Product 4
            </button>
          </div>
        </Link>
        <Link href="product/5">
          <div className="border border-gray-200 rounded-lg p-4 shadow-lg hover:shadow-xl transition duration-300 ease-in-out cursor-pointer">
            <button className="text-2xl md:text-3xl lg:text-4xl text-cyan-800 font-bold focus:outline-none hover:text-gray-800 hover:scale-105">
              Product 5
            </button>
          </div>
        </Link>
        <Link href="product/sweater">
          <div className="border border-gray-200 rounded-lg p-4 shadow-lg hover:shadow-xl transition duration-300 ease-in-out cursor-pointer">
            <button className="text-2xl md:text-3xl lg:text-4xl text-cyan-800 font-bold focus:outline-none hover:text-gray-800 hover:scale-105">
              Sweater
            </button>
          </div>
        </Link>
      </div>
      <div className="flex justify-center mt-8">
        <Link href="/routing">
          <button className="btn btn-primary bg-teal-800 px-6 py-3 rounded-full text-white hover:scale-105 hover:bg-cyan-700 hover:text-gray-800">
            Back
          </button>
        </Link>
      </div>
    </div>
  );
};


export default Product;