import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Loader from '../components/loader/Loader';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const AllUserPage = () => {

  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getUsers() {
    setLoading(true)
    try {
      let resp = await axios.get("http://localhost:9000/users");

      setTimeout(() => {
        setAllUsers(resp.data);
        setLoading(false);
      }, 2000);

    } catch (error) {
      console.log(error);
      setAllUsers([]);
    }
  }

  async function deleteUser(id) {
    try {
      let resp = await axios.delete(`http://localhost:9000/users/${id}`);
      // setAllUsers(allUsers.filter(user => user.id !== id));
      console.log(resp);
      toast.success("User Deleted");
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUsers();
  }, [])

  if (loading) {
    return <Loader />
  }

  return (
    <section className='min-h-screen p-6 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 animate-gradient'>

      <h1 className='text-3xl font-bold text-center text-white mb-10 animate-fadeIn'>
        👥 All Users
      </h1>

      {allUsers.length === 0 ? (
        <p className='text-center text-white text-lg'>No Users Available</p>
      ) : (

        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>

          {allUsers.map((user) => {
            return (
              <div
                key={user.id}
                className='backdrop-blur-lg bg-white/20 border border-white/30 p-6 rounded-3xl shadow-2xl transform transition-all duration-500 hover:scale-105 hover:bg-white/30'
              >

                <p className='text-white mb-2'>
                  <strong>Username: </strong> {user.username}
                </p>

                <p className='text-white mb-4'>
                  <strong>Email: </strong> {user.email}
                </p>

                <div className='flex justify-between'>
                <Link to={`/edit-user/${user.id}`}>Edit</Link>
                  {/* <button className='px-4 py-1 rounded-xl bg-white text-blue-600 font-semibold shadow-lg hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 active:scale-95'>
                    ✏️ Edit
                  </button> */}

                  <button
                    onClick={() => deleteUser(user.id)}
                    className='px-4 py-1 rounded-xl bg-white text-red-600 font-semibold shadow-lg hover:bg-red-600 hover:text-white transition-all duration-300 transform hover:scale-105 active:scale-95'
                  >
                    🗑 Delete
                  </button>

                </div>

              </div>
            )
          })}

        </div>
      )}

      {/* ANIMATION CSS */}
      <style>
        {`
        .animate-gradient {
          background-size: 400% 400%;
          animation: gradientMove 10s ease infinite;
        }

        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-in-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        `}
      </style>

    </section>
  )
}

export default AllUserPage;