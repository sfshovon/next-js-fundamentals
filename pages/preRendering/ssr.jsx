import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import problemStaticGeneration1 from '../../public/problemStaticGeneration1.jpg';
import problemStaticGeneration2 from '../../public/problemStaticGeneration2.jpg';
import serverSideRendering1 from '../../public/serverSideRendering1.jpg';
import serverSideRendering2 from '../../public/serverSideRendering2.jpg';

const ServerSideRendering = () => {
  return (
    <div className="pt-20 bg-slate-100 px-10 md:px-20 lg:px-32 pb-10">
      <Head>
        <title>Server-Side Rendering - Next.Js</title>
      </Head>
      <h1 className="text-dark text-3xl md:text-5xl text-center font-extrabold mb-10 md:mb-16">Server-Side Rendering</h1>
      
      <div className="flex justify-center items-center mb-10 md:mb-16">
        <Link href="/preRendering/news">
          <button className="btn btn-primary bg-teal-800 px-8 md:px-12 py-3 rounded-full text-white hover:scale-105 hover:bg-cyan-700 hover:text-gray-800">News (getServerSideProps)</button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 mb-10 md:mb-16">
        <div className="flex justify-center items-center hover:scale-105">
          <Image src={problemStaticGeneration1} className="rounded-xl" alt="screenshot" width={800} height={400}></Image>
        </div>
        <div className="flex justify-center items-center hover:scale-105">      
          <Image src={problemStaticGeneration2} className="rounded-xl" alt="screenshot" width={800} height={400}></Image>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 mb-10 md:mb-16">
        <div className="flex justify-center items-center hover:scale-105">
          <Image src={serverSideRendering1} className="rounded-xl" alt="screenshot" width={800} height={400}></Image>
        </div>
        <div className="flex justify-center items-center hover:scale-105">      
          <Image src={serverSideRendering2} className="rounded-xl" alt="screenshot" width={800} height={400}></Image>
        </div>
      </div>
    
    </div>
  );
};

export default ServerSideRendering;