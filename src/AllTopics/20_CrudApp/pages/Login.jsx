import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    let { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleForm = (e) => {
    e.preventDefault();
    let payload = {
      email: form.email.trim(),
      password: form.password.trim(),
    };
    console.log(payload);
    sessionStorage.setItem("token", Date.now());
    toast.success("Logged in")
    navigate("/");

  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 animate-gradient">

      <form 
        className="backdrop-blur-lg bg-white/20 border border-white/30 p-10 rounded-3xl shadow-2xl w-full max-w-md transform transition-all duration-500 hover:scale-105"
        onSubmit={handleForm}
      >

        <h1 className="text-3xl font-bold text-center text-white mb-6 tracking-wide animate-fadeIn">
          🔐 Login Form
        </h1>

        <div className="flex flex-col mb-5 group">
          <label htmlFor="email" className="text-white text-sm mb-1">
            Email
          </label>
          <input 
            type="email" 
            name="email" 
            value={form.email} 
            onChange={handleChange} 
            id="email" 
            placeholder="Enter Email" 
            className="px-4 py-2 rounded-xl bg-white/30 text-white placeholder-gray-200 outline-none border border-transparent focus:border-white focus:ring-2 focus:ring-white transition-all duration-300 group-hover:bg-white/40"
          />
        </div>

        <div className="flex flex-col mb-5 group">
          <label htmlFor="password" className="text-white text-sm mb-1">
            Password
          </label>
          <input 
            type="password" 
            name="password" 
            value={form.password} 
            onChange={handleChange} 
            id="password" 
            placeholder="Enter Password" 
            className="px-4 py-2 rounded-xl bg-white/30 text-white placeholder-gray-200 outline-none border border-transparent focus:border-white focus:ring-2 focus:ring-white transition-all duration-300 group-hover:bg-white/40"
          />
        </div>

        <div>
          <button 
            type="submit" 
            className="w-full py-2 rounded-xl bg-white text-purple-600 font-semibold shadow-lg hover:bg-purple-600 hover:text-white transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            🚀 Login
          </button>
        </div>

      </form>

      {/* Same Animation CSS */}
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
};

export default Login;