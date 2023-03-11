import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

const ProductDetails = () => {
  const router = useRouter();
  const productId = router.query.productId;
  return (
    <div className="pt-20 bg-slate-100 min-h-screen px-4 md:px-8 lg:px-20">
      <Head>
        <title>Product {productId} Page</title>
      </Head>
      <h2 className="text-4xl mt-5 font-bold text-center">Details of Product #{productId}</h2>

      <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-6">
        <Link href={`/routing/product/${productId}/review/1`}>
          <button className="btn btn-primary bg-teal-800 px-6 py-3 rounded-full text-white hover:scale-105 hover:bg-cyan-700 hover:text-gray-800">Check Review 1</button>
        </Link>
        <Link href={`/routing/product/${productId}/review/2`}>
          <button className="btn btn-primary bg-teal-800 px-6 py-3 rounded-full text-white hover:scale-105 hover:bg-cyan-700 hover:text-gray-800">Check Review 2</button>
        </Link>
        <Link href={`/routing/product/${productId}/review/3`}>
          <button className="btn btn-primary bg-teal-800 px-6 py-3 rounded-full text-white hover:scale-105 hover:bg-cyan-700 hover:text-gray-800">Check Review 3</button>
        </Link>
      </div>
      <div className="flex justify-center items-center">
        <Link href="/routing/product">
          <button className="btn btn-primary bg-teal-800 px-6 py-3 rounded-full text-white mt-8 hover:scale-105 hover:bg-cyan-700 hover:text-gray-800">Back</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductDetails;