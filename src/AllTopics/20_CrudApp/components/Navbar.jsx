import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Navbar = () => {

    let token = sessionStorage.getItem("token");

    const navigate = useNavigate();

    const handleLogout = () =>{
        let confirmMsg = confirm("Are you sure?")
        if(confirmMsg){
            sessionStorage.removeItem("token");
            toast.success("Logged out")
            navigate("/login")
        }
    }

    return (
        <header className="p-5 flex justify-between items-center fixed top-0 w-full z-50 backdrop-blur-lg bg-white/20 border-b border-white/30 shadow-lg">
            
            <figure className="text-3xl font-bold text-white tracking-wide">
                🚀 QManager
            </figure>

            <nav className="flex items-center gap-6 font-semibold">

            {token ?(
                <>
                <Link 
                    to={"/"} 
                    className="px-4 py-2 rounded-xl bg-white text-purple-600 shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:bg-purple-600 hover:text-white active:translate-y-1 active:shadow-md"
                >
                    Dashboard
                </Link>

                <Link 
                    to="/create-user" 
                    className="px-4 py-2 rounded-xl bg-white text-purple-600 shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:bg-purple-600 hover:text-white active:translate-y-1 active:shadow-md"
                >
                    Create User
                </Link>

                <Link 
                    to="/all-users" 
                    className="px-4 py-2 rounded-xl bg-white text-purple-600 shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:bg-purple-600 hover:text-white active:translate-y-1 active:shadow-md"
                >
                    All User
                </Link>

                <div 
                    onClick={handleLogout}
                    className="px-4 py-2 rounded-xl bg-red-500 text-white shadow-lg cursor-pointer transform transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:bg-red-700 active:translate-y-1 active:shadow-md"
                >
                    Logout
                </div>
                </>
            ):(
                <>
                <Link 
                    to={"/login"} 
                    className="px-4 py-2 rounded-xl bg-white text-purple-600 shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:bg-purple-600 hover:text-white active:translate-y-1 active:shadow-md"
                >
                    Login
                </Link>
                </>
            )}
                   
            </nav>

        </header>
    )
}

export default Navbar;