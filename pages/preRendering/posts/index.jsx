import Post from "@/Components/Post";
import Head from "next/head";

const PostList = ({posts}) => {
  return (
    <div className="container mx-auto px-4 py-10 md:py-20 bg-gray-100">
      <Head>
        <title>SSG with Dynamic Parameters - Next.Js </title>
      </Head>

  
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-8">Total Posts: {posts.length}</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-5 md:mx-10">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>

    </div>
  );
};

export default PostList;

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  // console.log(data.posts)

  return{
    props: {
      posts: data,
    }
  }
}