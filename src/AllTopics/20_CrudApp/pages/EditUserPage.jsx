import React, { useEffect, useState } from 'react'
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import toast from 'react-hot-toast';

const EditUserPage = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        let { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    };

    const navigate = useNavigate();
    const params = useParams();

    async function getEditUser(){
        try {
            let resp = await axios.get(`http://localhost:9000/users/${params.id}`);
            console.log(resp);
            setFormData(resp.data);
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    }

    useEffect(()=>{
        getEditUser();
    },[]);

    const handleUpdateUser = async (e) => {
        e.preventDefault();
        console.log(formData);

        try {
            let resp = await axios.put(`http://localhost:9000/users/${params.id}`,formData);
            toast.success("User Updated");
            navigate("/all-users");
        } catch (error) {
            console.log(error);
            toast.error("Unable to update");
        }
    }
       

    return (
        <section className='min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 animate-gradient'>

            <div className='backdrop-blur-lg bg-white/20 border border-white/30 p-8 rounded-3xl shadow-2xl w-full max-w-md transform transition-all duration-500 hover:scale-105'>

                <header>
                    <h1 className='text-3xl font-bold text-center text-white mb-6 tracking-wide animate-fadeIn'>
                        ✨ Edit user
                    </h1>
                </header>

                <article>
                    <form onSubmit={handleUpdateUser} className='space-y-5'>

                        <div className='group'>
                            <label htmlFor="username" className='text-white text-sm mb-1 block'>
                                Username
                            </label>
                            <input
                                type="text"
                                name='username'
                                id='username'
                                placeholder='Enter username'
                                value={formData.username}
                                onChange={handleChange}
                                className='w-full px-4 py-2 rounded-xl bg-white/30 text-white placeholder-gray-200 outline-none border border-transparent focus:border-white focus:ring-2 focus:ring-white transition-all duration-300 group-hover:bg-white/40'
                            />
                        </div>

                        <div className='group'>
                            <label htmlFor="email" className='text-white text-sm mb-1 block'>
                                Email
                            </label>
                            <input
                                type="email"
                                name='email'
                                id='email'
                                placeholder='Enter email'
                                value={formData.email}
                                onChange={handleChange}
                                className='w-full px-4 py-2 rounded-xl bg-white/30 text-white placeholder-gray-200 outline-none border border-transparent focus:border-white focus:ring-2 focus:ring-white transition-all duration-300 group-hover:bg-white/40'
                            />
                        </div>

                        <div className='group'>
                            <label htmlFor="password" className='text-white text-sm mb-1 block'>
                                Password
                            </label>
                            <input
                                type="password"
                                name='password'
                                id='password'
                                placeholder='Enter password'
                                value={formData.password}
                                onChange={handleChange}
                                className='w-full px-4 py-2 rounded-xl bg-white/30 text-white placeholder-gray-200 outline-none border border-transparent focus:border-white focus:ring-2 focus:ring-white transition-all duration-300 group-hover:bg-white/40'
                            />
                        </div>

                        <div>
                            <button
                                type="submit"
                                className='w-full py-2 rounded-xl bg-white text-purple-600 font-semibold shadow-lg hover:bg-purple-600 hover:text-white transition-all duration-300 transform hover:scale-105 active:scale-95'
                            >
                                🚀 Update
                            </button>
                        </div>

                    </form>
                </article>
            </div>

            {/* Animation CSS */}
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
    );
}

export default EditUserPage;