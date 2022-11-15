import React, { useContext } from 'react';

import { Link } from 'react-router-dom';
import GlobalContext from '../../context/GlobalContext';
const Login = () => {
  const { state, handleFunction } = useContext(GlobalContext);
  let { input } = state;
  let { handleLoginSubmit, handleInputChangeLogin } = handleFunction;

  return (
    <>
      <div className="bg-gradient-to-r from-teal-100 to-teal-700 w-screen h-screen p-3">
        <div className=" relative md:w-96 mx-auto shadow-md p-4 bg-gray-100  rounded-md top-52">
          <header className="flex items-center p-2 my-6 md:ml-24">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-10 h-10 text-teal-700 text-center"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5"
              />
            </svg>

            <span className="whitespace-nowrap text-xl font-semibold dark:text-white">
              Find <span className="text-teal-700 font-semibold">Career</span>
            </span>
          </header>
          <form onSubmit={handleLoginSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
                placeholder="Enter email"
                value={input.email}
                onChange={handleInputChangeLogin}
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={input.password}
                name="password"
                onChange={handleInputChangeLogin}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
                placeholder="Enter password"
                required
              />
            </div>
            <div className="">
              <button
                type="submit"
                className="w-full text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-400 font-semibold rounded-lg text-sm  px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
              >
                Submit
              </button>
            </div>

            <div className="my-4 text-sm text-gray-600">
              Not registered ?
              <Link
                to="/register"
                className=" mx-2 cursor-pointer text-teal-600 hover:text-teal-800"
              >
                Create an account
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
