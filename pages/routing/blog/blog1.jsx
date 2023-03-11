import Head from "next/head";
import Link from "next/link";

const blog1 = () => {
  return (
    <div className="pt-20 bg-slate-100 h-screen px-6 md:px-32">
      <Head>
        <title>Blog Page 1</title>
      </Head>
      <div className="flex flex-col items-center">
        <h2 className="text-4xl mt-5 text-bold text-center">Blog Page 1</h2>
      </div>
      <div className="mt-12 flex justify-center">
        <Link href="/routing/blog">
            <button className="btn btn-primary bg-teal-800 px-6 py-3 rounded-full text-white hover:scale-105 hover:bg-cyan-700 hover:text-gray-800">Back</button>
        </Link>
      </div>
    </div>
  );
};

export default blog1;