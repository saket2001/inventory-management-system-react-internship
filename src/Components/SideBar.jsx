import React from "react";
import { Link } from "react-router-dom";

const unActiveClass = "flex gap-2 items-center ease-in transition-all";

// const activeClass = "flex gap-2 items-center text-blue-700 bg-gray-100 fill-blue-900";


export const SideBar = () => {

  return (
    <nav className="h-100 w-1/4 flex flex-col gap-3 py-5 bg-gray-100 shadow-lg">
      {/* company name */}
      <h1 className="flex items-center gap-2 lg:text-3xl font-bold text-blue-800 py-3 px-5">
        <Link to="/" className="unActiveClass">Inventory</Link >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 font-bold"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
      </h1>

      {/* nav */}
      <ul className="flex flex-col gap-4 py-3 my-4 lg:text-lg font-medium text-gray-600">
        <li className="flex gap-2 items-center px-5 py-2 hover:border-r-blue-700 hover:border-r-4 hover:bg-gray-100 ease-in transition-all">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          <Link to="/" className={unActiveClass}>Dashboard</Link>
        </li>
        <li className="flex gap-2 items-center px-5 py-2 hover:border-r-blue-700 hover:border-r-4 hover:bg-gray-100 ease-in transition-all">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4v16m8-8H4"
            />
          </svg>
          <Link to="/add-item" className={unActiveClass}>Add Item</Link>
        </li>
        <li className="flex gap-2 items-center px-5 py-2 hover:border-r-blue-700 hover:border-r-4 hover:bg-gray-100 ease-in transition-all">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          <Link to="/" className={unActiveClass}>Profile</Link>
        </li>
        <li className="flex gap-2 items-center px-5 py-2 hover:border-r-blue-700 hover:border-r-4 hover:bg-gray-100 ease-in transition-all">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <Link to="/" className={unActiveClass}>Settings</Link>
        </li>
        <li className="flex gap-2 items-center px-5 py-2 hover:border-r-blue-700 hover:border-r-4 hover:bg-gray-100 ease-in transition-all">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
          <Link to="/" className={unActiveClass}>Support</Link>
        </li>
      </ul>
    </nav>
  );
};
