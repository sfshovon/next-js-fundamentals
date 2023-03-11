import Link from "next/link";

const Post = ({ post }) => {
  return (
    <div className="pt-20 bg-slate-100 md:px-32 px-2 pb-10 h-screen">
      <div className="flex justify-center items-center">
        <div className="bg-gray-100 mt-8 rounded-md shadow-2xl overflow-hidden">
          <div className="card-body">
            <h2 className="card-title">ID: <span className="font-normal text-lg">{post.id}</span></h2>
            <h3 className="card-title inline">Title: <span className="font-normal text-lg">{post.title}</span></h3>
            <p className="text-lg font-semibold"> <span className="font-normal text-lg">{post.body}</span></p>
            <p className="text-lg font-semibold"> Reactions: <span className="font-normal text-lg">{post.reactions}</span></p>
            <div className="mt-2 card-actions justify-end">
              <Link href="/preRendering/posts">
                <button className="btn btn-primary">Back</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(`https://dummyjson.com/posts/${params.postId}`);
  const data = await res.json();

  return {
    props: {
      post: data,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch("https://dummyjson.com/posts");
  const data = await res.json();
  const posts = data.posts;

  // if(!posts.id){
  //   return{
  //     notFound: true,
  //   }
  // }

  const paths = posts.map((post) => {
    return {
      params: {
        postId: `${post.id}`,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

// export async function getStaticPaths() {
//   return {
//     paths: [
//       { 
//         params: {postId: '1'} 
//       }, 
//       { 
//         params: {postId: '2'} 
//       }, 
//       { 
//         params: {postId: '3'} 
//       }, 
//     ],
//     fallback: false, // can also be true or 'blocking'
//   }
// }