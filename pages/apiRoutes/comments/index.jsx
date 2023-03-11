import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

const CommentsPage = () => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');

  const fetchComments = async () => {
    const response = await fetch('/api/comments');
    const data = await response.json();
    setComments(data);
  };

  const submitComment = async () => {
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({ comment }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    setComments([...comments, data]);
    setComment('');
  };

  const deleteComment = async (commentId) => {
    const response = await fetch(`/api/comments/${commentId}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    fetchComments();
  }

  return (
    <div className="pt-20 bg-slate-100 px-32 pb-10 h-screen">
      <Head>
        <title>Comments API - Next.Js </title>
      </Head>

      <div className="mt-5 flex flex-col md:flex-row md:justify-center items-center gap-6">
        <input 
          type="text" 
          value={comment} 
          placeholder="Add a comment"
          onChange={(e) => setComment(e.target.value)}
          className="border-2 border-gray-300 p-2 rounded-lg w-full md:w-auto"
        />

        <button onClick={submitComment} className="btn btn-primary bg-teal-800 px-12 py-3 rounded-full text-white hover:scale-105 hover:bg-cyan-700 hover:text-gray-800">
          Submit Comment
        </button>
      </div>

      <div className="flex justify-center md:justify-start items-center">
        <button onClick={fetchComments}className="mt-5 btn btn-primary bg-teal-800 px-12 py-3 rounded-full text-white hover:scale-105 hover:bg-cyan-700 hover:text-gray-800">
          Load Comments
        </button>
      </div>
      
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center items-center gap-8">
        {comments.map((comment) => {
          return (
            <div key={comment.id} className="card w-full sm:w-1/2 md:w-1/3 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="text-3xl text-center">{comment.id}</h2>
                <h5 className="text-lg font-semibold">{comment.text} </h5>
                <div className="card-actions justify-end">
                  <button onClick={ () => deleteComment(comment.id) } className="btn btn-primary">Delete</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center md:justify-start items-center">
        <Link href="/apiRoutes">
          <button className="mt-5 btn btn-primary bg-teal-800 px-6 py-3 rounded-full text-white hover:scale-105 hover:bg-cyan-700 hover:text-gray-800">
            Back
          </button>
        </Link>
      </div>

    </div>
  );
};

export default CommentsPage;