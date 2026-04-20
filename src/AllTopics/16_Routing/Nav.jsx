import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <header className="p-5 bg-violet-600 text-white font-bold ">
      <nav className="flex gap-10">
        {/* <Link to="/about">About</Link>
            <Link to="/">Home</Link> */}

        <NavLink to="/" className={({ isActive }) => {
          return `${isActive && "bg-white text-black"} px-5 py-1 rounded`
        }}>
          Home
        </NavLink>

        <NavLink to="/about" className={({ isActive }) => {
          return `${isActive && "bg-white text-black"} px-5 py-1 rounded`
        }}>
          About
        </NavLink>
      </nav>
    </header>
  )
}

export default Nav;