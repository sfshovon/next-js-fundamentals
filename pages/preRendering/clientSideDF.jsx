import Head from "next/head";
import Link from "next/link";

const clientSideDataFetching = () => {
  return (
    <div className="pt-20 bg-gray-100 px-10 pb-10 min-h-screen">
      <Head>
        <title>Client Side Data Fetching - Next.Js </title>
      </Head>
      <h1 className="text-dark text-3xl md:text-5xl text-center font-extrabold mb-10">This is the basic Client-Side Data Fetching Page of Next.Js</h1>
    
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
        <Link href="/preRendering/dashboard">
          <button className="mt-5 btn btn-primary bg-teal-800 px-8 sm:px-12 py-3 rounded-full text-white hover:scale-105 hover:bg-cyan-700 hover:text-gray-800">Dashboard (useSWR)</button>
        </Link>
        <Link href="/preRendering/events">
          <button className="mt-5 btn btn-primary bg-teal-800 px-8 sm:px-12 py-3 rounded-full text-white hover:scale-105 hover:bg-cyan-700 hover:text-gray-800">Events (Pre rendering + Client side Data Fetching)</button>
        </Link>
      </div>
    
    </div>
  );
};

export default clientSideDataFetching;