import Head from "next/head";
import Link from "next/link";

const blog = () => {
  return (
    <div className="pt-20 bg-slate-100 h-screen px-32">
      <Head>
        <title>Blog Page</title>
      </Head>
   
      <div className="flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-dark mb-8">This is the Nesting Routing Page of Next.Js</h1>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Blog Page</h2>
          <p className="text-lg md:text-xl font-medium text-justify leading-relaxed mb-6">The router supports nested files. If you create a nested folder structure, files will automatically be routed in the same way still.</p>
          <ul className="list-disc list-inside mt-2">
            <li className="text-lg md:text-xl font-medium text-justify leading-relaxed">pages/blog/first-post.js → /blog/first-post</li>
            <li className="text-lg md:text-xl font-medium text-justify leading-relaxed">pages/dashboard/settings/username.js → /dashboard/settings/username</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center md:flex-row md:space-x-10">
          <Link href="blog/blog1">
            <div className="mt-4 md:mt-0">
            <button className="mt-5 btn btn-primary bg-teal-800 px-8 md:px-12 py-3 rounded-full text-white hover:scale-105 hover:bg-cyan-700 hover:text-gray-800">
              Blog Page 1
            </button>
            </div>
          </Link>
          <Link href="blog/blog2">
            <div className="mt-4 md:mt-0">
            <button className="mt-5 btn btn-primary bg-teal-800 px-8 md:px-12 py-3 rounded-full text-white hover:scale-105 hover:bg-cyan-700 hover:text-gray-800">
              Blog Page 2
            </button>
            </div>
          </Link>
        </div>
        <Link href="/routing">
          <button className="mt-5 btn btn-primary bg-teal-800 px-8 md:px-12 py-3 rounded-full text-white hover:scale-105 hover:bg-cyan-700 hover:text-gray-800">
            Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default blog;