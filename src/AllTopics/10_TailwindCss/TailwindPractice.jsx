import React from 'react'

const TailwindPractice = () => {
  return (
    <div>

        {/* <h1 className="bg-violet-900 text-white text-[50px] rounded-4xl text-center">TailwindPractice</h1>
        <button className="bg-green-700 text-white py-1 px-2.5 rounded-4xl">Submit</button> */}

        <nav className="bg-violet-700 p-2 text-white font-semibold md:bg-amber-300 
        md:text-3xl md:text-black lg:bg-pink-400 xl:bg-red-500 flex justify-between items-center">
            <div>Navbar</div>
            <ul className="gap-10 hidden md:flex">
                <li className="hover:text-white cursor-pointer">About</li>
                <li className="hover:text-white cursor-pointer">Services</li>
                <li className="hover:text-white cursor-pointer">Contact us</li>
                <li className="hover:text-white cursor-pointer">Home</li>
            </ul>
        </nav>
    </div>
    
  )
}

export default TailwindPractice;