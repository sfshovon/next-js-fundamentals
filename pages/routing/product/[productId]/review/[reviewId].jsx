import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

const ProductReview = () => {
  const router = useRouter();
  const {productId, reviewId} = router.query;
  return (
    <div className="pt-20 bg-slate-100 h-screen flex flex-col justify-center items-center">
      <Head>
        <title>Review {reviewId} Product {productId} Page</title>
      </Head>
      <h2 className="text-4xl mt-5 text-bold text-center">Review #{reviewId} of Product #{productId}</h2>
      <Link href="/routing/product">
        <button className="btn btn-primary bg-teal-800 px-6 py-3 rounded-full text-white hover:scale-105 hover:bg-cyan-700 hover:text-gray-800 mt-8">Back</button>
      </Link>
    </div>
  );
};

export default ProductReview;