import Head from "next/head";
import Link from "next/link";

const Sweater = () => {
  return (
    <div className="bg-slate-100 h-screen px-5 md:px-20 lg:px-32">
      <Head>
        <title>Product - Sweater</title>
      </Head>
      <div className="flex flex-col justify-center items-center h-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">Sweater Page</h2>
        <Link href="/routing/product">
          <button className="btn btn-primary bg-teal-800 px-6 py-3 rounded-full text-white hover:scale-105 hover:bg-cyan-700 hover:text-gray-800">Back</button>
        </Link>
      </div>
    </div>
  );
};

export default Sweater;