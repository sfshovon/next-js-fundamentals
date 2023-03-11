import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import apiRoute from '../../public/apiRoutes.jpg';

const apiRoutes = () => {
  return (
    <div className="pt-20 bg-slate-100 px-10 md:px-32 pb-10">
      <Head>
        <title>API Routes - Next.Js</title>
      </Head>

      <h1 className="text-dark text-3xl md:text-5xl text-center font-extrabold mb-8">This is the basic API Routes Page of Next.Js</h1>

      <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6">
        <Link href="/api">
          <button className="btn btn-primary bg-teal-800 px-8 md:px-12 py-3 rounded-full text-white hover:scale-105 hover:bg-cyan-700 hover:text-gray-800 mb-4 md:mb-0">API</button>
        </Link>
        <Link href="/api/dashboardAPI">
          <button className="btn btn-primary bg-teal-800 px-8 md:px-12 py-3 rounded-full text-white hover:scale-105 hover:bg-cyan-700 hover:text-gray-800 mb-4 md:mb-0">Dashboard API</button>
        </Link>
        <Link href="/api/blogAPI">
          <button className="btn btn-primary bg-teal-800 px-8 md:px-12 py-3 rounded-full text-white hover:scale-105 hover:bg-cyan-700 hover:text-gray-800 mb-4 md:mb-0">Blog API</button>
        </Link>
        <Link href="/api/blogAPI/recent">
          <button className="btn btn-primary bg-teal-800 px-8 md:px-12 py-3 rounded-full text-white hover:scale-105 hover:bg-cyan-700 hover:text-gray-800 mb-4 md:mb-0">Recent API</button>
        </Link>
        <Link href="/apiRoutes/comments">
          <button className="btn btn-primary bg-teal-800 px-8 md:px-12 py-3 rounded-full text-white hover:scale-105 hover:bg-cyan-700 hover:text-gray-800 mb-4 md:mb-0">Comments (API GET/POST/DELETE Request)</button>
        </Link>
      </div>

      <div className="mt-10 flex justify-center items-center hover:scale-105">
        <Image src={apiRoute} className="rounded-xl" alt="screenshot" width={800} height={400}></Image>
      </div>

    </div>
  );
};

export default apiRoutes;