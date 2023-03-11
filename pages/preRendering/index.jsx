import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import formofPrerendering from '../../public/formofPrerendering.jpg';
import whatisPrerendering from '../../public/whatisPrerendering.jpg';
import whatisPrerenderingAns from '../../public/whatisPrerenderingAns.jpg';
import whyPrerender from '../../public/whyPrerender.jpg';

const preRender = () => {
  return (
    <div className="pt-20 bg-slate-100 px-10 md:px-20 lg:px-32 pb-10">
      <Head>
        <title>Pre-Rendering - Next.Js </title>
      </Head>
      <h1 className="text-dark text-3xl md:text-5xl text-center font-extrabold mb-10">This is the basic Pre-Rendering Page of Next.Js</h1>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        <Link href="/preRendering/staticGeneration">
          <button className="mt-5 btn btn-primary bg-teal-800 px-6 md:px-12 py-2 md:py-3 rounded-full text-white hover:scale-105 hover:bg-cyan-700 hover:text-gray-800">Static Generation</button>
        </Link>
        <Link href="/preRendering/users">
          <button className="mt-5 btn btn-primary bg-teal-800 px-6 md:px-12 py-2 md:py-3 rounded-full text-white hover:scale-105 hover:bg-cyan-700 hover:text-gray-800">Users (getStaticProps)</button>
        </Link>
        <Link href="/preRendering/posts">
          <button className="mt-5 btn btn-primary bg-teal-800 px-6 md:px-12 py-2 md:py-3 rounded-full text-white hover:scale-105 hover:bg-cyan-700 hover:text-gray-800">Posts (SSG with Dynamic Parameters)</button>
        </Link>
        <Link href="/preRendering/ssr">
          <button className="mt-5 btn btn-primary bg-teal-800 px-6 md:px-12 py-2 md:py-3 rounded-full text-white hover:scale-105 hover:bg-cyan-700 hover:text-gray-800">Server-Side Rendering</button>
        </Link>
        <Link href="/preRendering/clientSideDF">
          <button className="mt-5 btn btn-primary bg-teal-800 px-6 md:px-12 py-2 md:py-3 rounded-full text-white hover:scale-105 hover:bg-cyan-700 hover:text-gray-800">Client-Side Data Fetching</button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
        <div className="flex justify-center items-center hover:scale-105">
          <Image src={whatisPrerendering} className="rounded-xl" alt="screenshot" width={800} height={400}></Image>
        </div>
        <div className="flex justify-center items-center hover:scale-105">      
          <Image src={whatisPrerenderingAns} className="rounded-xl" alt="screenshot" width={800} height={400}></Image>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
        <div className="flex justify-center items-center hover:scale-105">
          <Image src={whyPrerender} className="rounded-xl" alt="screenshot" width={800} height={400}></Image>
        </div>
        <div className="flex justify-center items-center hover:scale-105">      
          <Image src={formofPrerendering} className="rounded-xl" alt="screenshot" width={800} height={400}></Image>
        </div>
      </div>
         
    </div>
  );
};

export default preRender;