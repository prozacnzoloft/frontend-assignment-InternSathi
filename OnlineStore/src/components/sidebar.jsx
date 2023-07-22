import React from "react";
import { Link } from "react-router-dom";

const SideBar = (props) => {
  return (
    <div className="fixed h-full  inset-0 flex flex-col items-center justify-center bg-black bg-opacity-10 backdrop-blur-0">
      <div className="bg-white ml-auto p-8 w-40 h-full rounded shadow-md">
        <div className=" block align-middle text-center" onClick={props.onClose}>
          <Link
            to="/"
            className=" hover:text-slate-900 text-slate-600 hover:cursor-pointer"
          >
            Home
          </Link>
        </div>
        <div
          className=" block align-middle text-center"
          onClick={props.onClose}
        >
          Close
        </div>
      </div>
    </div>
  );
};

export default SideBar;
