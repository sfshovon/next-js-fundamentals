import Link from "next/link";

const Post= ({post}) => {
  return (
    <div className="flex flex-col justify-between">
      <div className="bg-gray-100 w-full mx-auto mt-8 rounded-md shadow-2xl">
        <div className="px-6 py-4 md:h-64 h-auto">
          <h1 className="text-2xl font-bold mb-2">ID: {post.id}</h1>
          <h2 className="text-xl font-bold mb-2">Title: {post.title}</h2>
          <p className="text-lg font-semibold mb-2">${post.body}</p>
        </div>
        <div className="px-6 py-4 flex justify-end">
          <Link href={`/preRendering/posts/${post.id}`}>
            <button className="btn btn-primary text-white py-2 px-4 rounded-full">More Info</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Post;