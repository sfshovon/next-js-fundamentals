import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import getServerSideProps1 from '../../../public/getServerSideProps1.jpg';
import getServerSideProps2 from '../../../public/getServerSideProps2.jpg';

const News = ({ articles }) => {
  return (
    <div className="pt-20 bg-slate-100 px-10 lg:px-32 pb-10 min-h-screen">
      <Head>
        <title>News - Next.Js</title>
      </Head>

      <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
        <div className="mt-6 flex justify-center items-center hover:scale-105">
          <Image src={getServerSideProps1} className="rounded-xl" alt="screenshot" width={800} height={400}></Image>
        </div>
        <div className="mt-6 flex justify-center items-center hover:scale-105">
          <Image src={getServerSideProps2} className="rounded-xl" alt="screenshot" width={800} height={400}></Image>
        </div>
      </div>

      <div className="mt-10 lg:mt-16 flex flex-col lg:flex-row justify-center items-center gap-8">
        {articles.map((article) => {
          return (
            <div key={article.id} className="card w-full lg:w-96 bg-base-100 shadow-xl hover:shadow-2xl">
              <div className="card-body">
                <h2 className="card-title">ID: <span className="font-normal text-lg">{article.id}</span></h2>
                <h3 className="card-title inline">Title: <span className="font-normal text-lg">{article.title}</span></h3>
                <p className="text-lg font-semibold"><span className="font-normal text-lg">{article.description}</span></p>
                <p className="text-lg font-semibold">Category: <span className="font-normal text-lg">{article.category}</span></p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center mt-10 lg:mt-16 gap-8">
        <Link href="/preRendering/ssr">
          <button className="mt-5 btn btn-primary bg-teal-800 px-6 py-3 rounded-full text-white hover:scale-105 hover:bg-cyan-700 hover:text-gray-800">Back</button>
        </Link>
        <Link href="/preRendering/news/sports">
          <button className="mt-5 btn btn-primary bg-teal-800 px-6 py-3 rounded-full text-white hover:scale-105 hover:bg-cyan-700 hover:text-gray-800">Category: Sports</button>
        </Link>
        <Link href="/preRendering/news/politics">
          <button className="mt-5 btn btn-primary bg-teal-800 px-6 py-3 rounded-full text-white hover:scale-105 hover:bg-cyan-700 hover:text-gray-800">Category: Politics</button>
        </Link>
      </div>
    </div>
  );
};

export default News;

export async function getServerSideProps() {
  const response = await fetch('http://localhost:3000/api/news');
  const data = await response.json();

  return {
    props: {
      articles: data,
    }
  }
}