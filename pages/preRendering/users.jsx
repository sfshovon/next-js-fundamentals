import User from "@/Components/User";
import Head from "next/head";
import Image from "next/image";
import getStaticProps1 from '../../public/getStaticProps1.jpg';
import getStaticProps2 from '../../public/getStaticProps2.jpg';
import linkPrefetching1 from '../../public/linkPrefetching1.jpg';
import linkPrefetching2 from '../../public/linkPrefetching2.jpg';

const UserList = ({users}) => {
  return (
  <div className="container mx-auto px-4 py-10 md:py-20 bg-gray-100">
    <Head>
      <title>getStaticProps - Next.Js </title>
    </Head>

    <div className="flex flex-col mt-10 md:flex-row justify-center items-center md:gap-8 px-5 md:px-10">
      <div className="flex justify-center items-center hover:scale-105">
        <Image
          src={getStaticProps1}
          alt="screenshot"
          width={800}
          height={400}
          className="rounded-lg mb-4 md:mb-0"
        />
      </div>
      <div className="flex justify-center items-center hover:scale-105">
        <Image
          src={getStaticProps2}
          alt="screenshot"
          width={800}
          height={400}
          className="rounded-lg mb-4 md:mb-0"
        />
      </div>
    </div>

    <div className="flex flex-col mt-10 md:flex-row justify-center items-center md:gap-8 px-5 md:px-10">
      <div className="flex justify-center items-center hover:scale-105">
        <Image
          src={linkPrefetching1}
          alt="screenshot"
          width={800}
          height={400}
          className="rounded-lg mb-4 md:mb-0"
        />
      </div>
      <div className="flex justify-center items-center hover:scale-105">
        <Image
          src={linkPrefetching2}
          alt="screenshot"
          width={800}
          height={400}
          className="rounded-lg mb-4 md:mb-0"
        />
      </div>
    </div>


    <h1 className="text-center text-5xl md:text-6xl font-extrabold mb-10">Total Users: {users.length}</h1>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-5 md:mx-10">
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
    
  </div>

  );
};

export default UserList;

export async function getStaticProps() {
  const response = await fetch('https://dummyjson.com/users');
  const data = await response.json();
  // console.log(data.users)

  return{
    props: {
      users: data.users,
    }
  }
}
