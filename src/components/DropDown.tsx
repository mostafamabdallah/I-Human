import React, { useState } from "react";

const DropDown = () => {
  const [display, setDisplay] = useState("hidden");
  return (
    <div className="flex flex-col ">
      <button
        onClick={() => {
          if (display === "hidden") {
            setDisplay("block");
          } else {
            setDisplay("hidden");
          }
        }}
        id="dropdownDefault"
        data-dropdown-toggle="dropdown "
        className="text-black bg-white  focus:ring-4 focus:outline-none border-gray-300 border focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        اختر النوع
        <svg
          className="ml-2 w-4 h-4"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      <div
        id="dropdown"
        className={`${display} z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700`}
      >
        <ul 
          className="py-1 text-sm text-gray-700 dark:text-gray-200 list-none"
          aria-labelledby="dropdownDefault"
        >
          <li>
            <a
              href="#"
              className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              هندسة
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              طب
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              علوم
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DropDown;
