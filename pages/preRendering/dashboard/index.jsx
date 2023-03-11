import Head from 'next/head';
import Link from 'next/link';
import useSWR from 'swr';

const fetcher = async() => {
  const response = await fetch("http://localhost:3000/api/dashboard");
  const data = await response.json();
  return data;
}

const DashboardSWR = () => {
  const { data, error } = useSWR('dashboard', fetcher);
  
  if(error){
    return <h2>An error has occurred</h2>
  }
  if(!data){
    return <h2>Loading...</h2>
  }

  return (
    <div className="pt-20 bg-slate-100 px-6 md:px-32 pb-10 h-screen">
      <Head>
        <title>Dashboard - Next.Js </title>
      </Head>
    
      <div className="flex flex-col items-center md:flex-row md:justify-center md:items-start md:gap-8">
        <div className="card w-80 md:w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="text-3xl text-center mb-5 md:mb-8">Dashboard</h2>
            <h5 className="text-lg font-semibold mb-3 md:mb-4">Posts: {data.posts} </h5>
            <h5 className="text-lg font-semibold mb-3 md:mb-4">Likes: {data.likes} </h5>
            <h5 className="text-lg font-semibold mb-3 md:mb-4">Followers: {data.followers} </h5>
            <h5 className="text-lg font-semibold mb-3 md:mb-4">Following: {data.following} </h5>
          </div>
        </div>
    
       
      </div>
      <div className="flex justify-center items-center">
        <Link href="/preRendering/clientSideDF">
          <button className="mt-5 btn btn-primary bg-teal-800 px-6 py-3 rounded-full text-white hover:scale-105 hover:bg-cyan-700 hover:text-gray-800">Back</button>
        </Link>
      </div>
    </div>  
  );
};

export default DashboardSWR;