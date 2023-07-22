import { useState } from "react";
import { Link } from "react-router-dom";
export const Navbar = () => {
  const [searchFieldInput, updateSearchFieldInput] = useState();

  const updateInput = (value) =>{
    updateSearchFieldInput(value)

  }

  const searchForItem = (event) =>{
   

  }
  return (
    <div className="relative flex px-2 py-2 w-full">
      <div className=" w-full align-middle flex justify-between">
        <Link
          to="/"
          className="  text-3xl flex align-middle font-bold hover:cursor-pointer origin-center hover:translate-x-1 text-slate-800"
        >
          OnlineStore
        </Link>

        <div className=" hidden md:flex w-96 align-middle h-full justify-between ">
          <Link
            to="/"
            className="hover:text-slate-900 text-slate-600 hover:cursor-pointer"
          >
            Home
          </Link>
          {/* <p className="hover:text-slate-900 text-slate-600 hover:cursor-pointer">Blog</p>
            <p className="hover:text-slate-900 text-slate-600 hover:cursor-pointer">Contact</p> */}
        </div>
        <div className="flex flex-wrap align-middle">
          <input onKeyDown={searchForItem} onChange={(event)=>{updateInput(event.target.value)}} id="search" type="text" className="w-80 p-2 rounded-3xl border border-black" />
          <span onClick={searchForItem} className="text-xl hover:scale-110 active:scale-90 hover:cursor-pointer mr-2">🔍</span>
          <p className="hover:text-slate-900 text-slate-600 hover:cursor-pointer align-middle flex">
            Login
          </p>
        </div>
      </div>
    </div>
  );
};
