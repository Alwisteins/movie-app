import { Navbar } from "../navbar/Navbar";
import { IoMdSearch } from "react-icons/io";

export const Topbar = () => {
  return (
    <div className="fixed w-full h-16 sm:h-20 px-5 sm:px-10 flex items-center justify-between bg-slate-950 z-10">
      <div className="flex items-center gap-8">
        <h1 className="font-bold text-2xl">MovieAPP</h1>
        <div className="sm:block hidden">
          <Navbar />
        </div>
      </div>
      <div className="sm:flex sm:items-center sm:gap-8">
        <form className="hidden -space-x-2 sm:flex items-center">
          <input
            type="text"
            placeholder="Search here..."
            className="py-1 px-3 h-8 w-40 rounded-sm bg-slate-900 focus:bg-slate-800 outline-none"
          />
          <button
            type="submit"
            className="text-2xl p-2 rounded-full bg-blue-400"
          >
            <IoMdSearch />
          </button>
        </form>
        <button className="px-4 py-2 text-sm sm:text-base font-medium bg-blue-400 rounded-md">
          Login
        </button>
      </div>
    </div>
  );
};
