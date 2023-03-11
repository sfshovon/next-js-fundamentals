import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const EventList = ({ eventList }) => {
  const [events, setEvents] = useState(eventList);
  const router = useRouter();

  const fetchSportsEvent = async() => {
    const response = await fetch('http://localhost:3000/api/events?category=sports')
    //const response = await fetch('http://localhost:4000/events?category=sports')
    const data = await response.json();
    setEvents(data);
    router.push('/preRendering/events?category=sports', undefined, { shallow: true })
  };

  return (
    <div className="container mx-auto px-4 py-10 md:py-20 bg-gray-100">
      <Head>
        <title>Events - Next.Js </title>
      </Head>
 
      <button onClick={fetchSportsEvent} className="mt-5 btn btn-primary bg-teal-800 px-12 py-3 rounded-full text-white hover:scale-105 hover:bg-cyan-700 hover:text-gray-800">
        See Sports Event Only
      </button>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-10 mx-5 md:mx-10">
        {
          events.map(event => {
            return(
              <div className="flex flex-col justify-between">
                <div key={event.id} className="bg-gray-100 w-full mx-auto mt-8 rounded-md shadow-2xl overflow-hidden">
                  <div className="card-body">
                    <h2 className="text-3xl text-center">{event.id}</h2>
                    <h5 className="text-lg font-semibold">Title: {event.title} </h5>
                    <h5 className="text-lg font-semibold">Date: {event.date} </h5>
                    <h5 className="text-lg font-semibold">Category: {event.category} </h5>
                    <h5 className="text-lg font-semibold">Description: {event.description}</h5>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div> 

      <div className="flex justify-center items-center">
        <Link href="/preRendering/clientSideDF">
          <button className="mt-5 btn btn-primary bg-teal-800 px-6 py-3 rounded-full text-white hover:scale-105 hover:bg-cyan-700 hover:text-gray-800">Back</button>
        </Link>
      </div>
      
    </div>
  );
};

export default EventList;

export const getServerSideProps = async(context) => {
  const { query } = context;
  const { category } = query;
  const queryString = category ? 'category=sports' : '';

  const response = await fetch(`http://localhost:3000/api/events/${queryString}`)
  //const response = await fetch(`http://localhost:4000/events/${queryString}`)
  const data = await response.json()

  return {
    props: {
      eventList: data
    }
  }
}