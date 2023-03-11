import { Inter } from 'next/font/google'
import Head from 'next/head'
import Image from 'next/image'
import whatisNextJs from '../public/whatisNextJs.jpg'
import whatisNextJsAns from '../public/whatisNextJsAns.jpg'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>Home - Next.js Fundamentals</title>
        <meta name="description" content="Learn the fundamentals of Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-gradient-to-r from-gray-800 to-gray-100 h-full">
        <div className="container mx-auto py-20">
          <h1 className="text-white text-4xl font-bold text-center mb-12">
            Learn the Fundamentals of Next.js
          </h1>
          <div className="flex justify-center items-center hover:scale-110">
            <Image
              src={whatisNextJs}
              alt="Screenshot of What is Next.js course"
              width={600}
              height={400}
              className="rounded-xl shadow-lg"
            />
          </div>
          <div className="mt-6 flex justify-center items-center hover:scale-110">
            <Image
              src={whatisNextJsAns}
              alt="Screenshot of What is Next.js course answer"
              width={600}
              height={400}
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}