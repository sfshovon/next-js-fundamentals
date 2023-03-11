
const User = ({user}) => {
  return (
    <div className="bg-gray-100 w-full mx-auto mt-8 rounded-md shadow-2xl overflow-hidden">
      <div className="px-6 py-4">
        <h2 className="text-xl font-bold mb-2">Name: {user.firstName} {user.lastName}</h2>
        <p className="text-lg font-semibold mb-2">Email: <span className="text-cyan-800 underline">{user.email}</span></p>
      </div>
      <div className="px-6 py-4 flex justify-end">
        <button className="btn btn-primary text-white py-2 px-4 rounded-full">More Info</button>
      </div>
    </div>
  );
};

export default User;