import Head from 'next/head';
import Link from 'next/link';

const NotFound = () => {
  return (
    <section className="min-h-screen- flex items-center p-16 h-screen bg-gradient-to-r from-gray-800 to-gray-100">
      <Head>
        <title>Not Found - Next.Js Fundamentals</title>
      </Head>
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl font-semibold md:text-3xl my-5">Sorry, we couldn't find this page.</p>
          <Link href="/" className="btn px-8 py-3 font-semibold roundedhover:scale-105 hover:bg-cyan-700 hover:text-gray-800">
            <button>Back to Homepage</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;