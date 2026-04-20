import { useState } from "react";
import SearchBar from "../components/SearchBar";
import Sorting from "../components/Sorting";
import Pagination from "../components/Pagination";
import { usePost } from "../hooks/usePost";
import { useDebounce } from "../hooks/useDebounce";

const Dashboard = () => {
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [skip, setSkip] = useState(0);

  let debounceQuery = useDebounce(query, 2000);

  const { post, loading } = usePost({ query: debounceQuery, sortBy, skip });

  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 animate-gradient pt-20 px-4 md:px-10">

      {/* HEADER */}
      <header className="my-6 flex items-center justify-between text-white animate-fadeIn">
        <div>
          <h1 className="text-3xl font-bold tracking-wide">📊 Dashboard</h1>
          <p className="text-white/80 text-sm">
            Manage and explore posts efficiently
          </p>
        </div>
      </header>

      {/* CONTROLS */}
      <div className="backdrop-blur-lg bg-white/20 border border-white/30 p-4 rounded-2xl shadow-xl mb-6 flex flex-col items-center md:flex-row gap-4 justify-between transition-all duration-500 hover:scale-[1.02]">
        <SearchBar query={query} setQuery={setQuery} />
        <Sorting sortBy={sortBy} setSortBy={setSortBy} />
      </div>

      {/* TABLE CARD */}
      <div className="backdrop-blur-lg bg-white/20 border border-white/30 rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]">

        {loading ? (
          <div className="p-10 text-center text-white animate-pulse text-lg">
            ⏳ Loading...
          </div>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">

                {/* HEADER */}
                <thead className="bg-white/30 text-white backdrop-blur sticky top-0">
                  <tr>
                    <th className="p-4">ID</th>
                    <th className="p-4">TITLE</th>
                    <th className="p-4">VIEWS</th>
                  </tr>
                </thead>

                {/* BODY */}
                <tbody>
                  {post.length > 0 ? (
                    post.map((item) => (
                      <tr 
                        key={item.id} 
                        className="border-b border-white/20 hover:bg-white/20 transition duration-300"
                      >
                        <td className="p-4 font-medium text-white">
                          #{item.id}
                        </td>
                        <td className="p-4 text-white/90">
                          {item.title}
                        </td>
                        <td className="p-4 text-yellow-300 font-semibold">
                          {item.views}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="3" className="text-center p-6 text-white/70">
                        ❌ No Data Found
                      </td>
                    </tr>
                  )}
                </tbody>

              </table>
            </div>

            {/* PAGINATION */}
            <div className="p-4 border-t border-white/20 bg-white/10">
              <Pagination skip={skip} setSkip={setSkip} />
            </div>
          </>
        )}
      </div>

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
  );
};

export default Dashboard;