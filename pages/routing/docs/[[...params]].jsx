import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import catchAllRoutes from '../../../public/catchAllRoutes.jpg';

const Docs = () => {
  const router = useRouter();
  const { params = [] } = router.query;
  console.log(params);

  if(params.length === 3){
    return (
      <div className="pt-20 px-10 lg:px-20 bg-gradient-to-r from-gray-800 to-gray-600 h-screen">
        <h2 className="text-4xl mt-5 font-bold text-center text-gray-200 lg:text-5xl lg:mt-20">Viewing Docs for Feature {params[0]} and Concept {params[1]} and Example {params[2]}</h2>
        <div className="flex justify-center mt-10">
          <Link href="/routing/docs" > 
            <button className="bg-gradient-to-r from-teal-400 to-cyan-500 px-8 py-3 rounded-full text-white hover:scale-105 hover:bg-cyan-700 hover:text-gray-800 transition-all duration-300 ease-in-out">Back</button>
          </Link>
        </div>
      </div>
    )
  }
  else if(params.length === 2){
    return (
      <div className="pt-20 px-10 lg:px-20 bg-gradient-to-r from-gray-800 to-gray-600 h-screen">
        <h2 className="text-4xl mt-5 font-bold text-center text-gray-200 lg:text-5xl lg:mt-20">Viewing Docs for Feature {params[0]} and Concept {params[1]}</h2>
        <div className="flex justify-center mt-10">
          <Link href="/routing/docs" > 
            <button className="bg-gradient-to-r from-teal-400 to-cyan-500 px-8 py-3 rounded-full text-white hover:scale-105 hover:bg-cyan-700 hover:text-gray-800 transition-all duration-300 ease-in-out">Back</button>
          </Link>
        </div>
      </div>
    )
  }
  else if (params.length === 1){
    return (
      <div className="pt-20 px-10 lg:px-20 bg-gradient-to-r from-gray-800 to-gray-600 h-screen">
        <h2 className="text-4xl mt-5 font-bold text-center text-gray-200 lg:text-5xl lg:mt-20">Viewing Docs for Feature {params[0]}</h2>
        <div className="flex justify-center mt-10">
          <Link href="/routing/docs" > 
            <button className="bg-gradient-to-r from-teal-400 to-cyan-500 px-8 py-3 rounded-full text-white hover:scale-105 hover:bg-cyan-700 hover:text-gray-800 transition-all duration-300 ease-in-out">Back</button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-20 bg-slate-100 h-screen px-32 bg-gradient-to-r from-gray-800 to-gray-100">
      <Head>
        <title>Docs Page</title>
      </Head>
      <div className="container mx-auto py-10">
        <h2 className="text-4xl font-bold text-center mb-10">Docs Page</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <Link href="/routing/docs/feature1/concept1/example1" > 
            <button className="bg-teal-800 hover:bg-cyan-700 text-white rounded-full px-6 py-3 transform hover:scale-105 transition-all duration-300 ease-out">3 Params</button>
          </Link>
          <Link href="/routing/docs/feature1/concept1" > 
            <button className= "bg-teal-800 hover:bg-cyan-700 text-white rounded-full px-6 py-3 transform hover:scale-105 transition-all duration-300 ease-out">2 Params</button>
          </Link>
          <Link href="/routing/docs/feature1" > 
            <button className="bg-teal-800 hover:bg-cyan-700 text-white rounded-full px-6 py-3 transform hover:scale-105 transition-all duration-300 ease-out">1 Param</button>
          </Link>
        </div>
        <div className="flex justify-center items-center mt-10">
          <Image src={catchAllRoutes} alt="screenshot" className="w-full max-w-3xl rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-out" />
        </div>
        <div className="flex justify-center mt-10">
          <Link href="/routing">
            <button className="bg-teal-800 hover:bg-cyan-700 text-white rounded-full px-12 py-3 transform hover:scale-105 transition-all duration-300 ease-out">Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Docs;