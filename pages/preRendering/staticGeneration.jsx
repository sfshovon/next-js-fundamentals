import Head from "next/head";
import Image from "next/image";
import staticGen from "../../public/staticGeneration.jpg";
import staticGenerationCondition from "../../public/staticGenerationCondition.jpg";
import staticGenerationData from "../../public/staticGenerationData.jpg";

const StaticGeneration = () => {
  return (
    <div className="pt-20 bg-gray-100 px-8 sm:px-16 md:px-24 lg:px-32 pb-10">
      <Head>
        <title>Static Generation - Next.Js</title>
      </Head>
      <h1 className="text-dark text-3xl md:text-5xl text-center font-extrabold mb-10">
        This is the basic Static Generation Page of Next.Js
      </h1>

      <div className="flex justify-center items-center mb-10">
        <div className="w-full md:w-3/4 lg:w-2/3 flex justify-center items-center hover:scale-110">
          <Image src={staticGen} className="rounded-xl" alt="screenshot" width={800} height={400} />
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10">
        <div className="w-full md:w-1/2 flex justify-center items-center hover:scale-110">
          <Image src={staticGenerationCondition} className="rounded-xl" alt="screenshot" width={800} height={400} />
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center hover:scale-110">
          <Image src={staticGenerationData} className="rounded-xl" alt="screenshot" width={800} height={400} />
        </div>
      </div>
      
    </div>
  );
};

export default StaticGeneration;