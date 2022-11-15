import React, { useContext } from 'react';

import { ToastContainer } from 'react-toastify';
import GlobalContext from '../../context/GlobalContext';
const Register = () => {
  const { state, handleFunction } = useContext(GlobalContext);
  const { inputRegister } = state;
  const { handleSubmitRegister, handleInputChangeRegister } = handleFunction;

  return (
    <>
      <ToastContainer />
      <div className="bg-gradient-to-r from-teal-100 to-teal-700 w-screen h-screen p-3">
        <div className=" relative md:w-96 mx-auto shadow-md p-4 bg-gray-100  rounded-md top-52">
          <h2 className="my-4 text-xl text-center text-teal-800 font-semibold">
            Register User
          </h2>
          <form onSubmit={handleSubmitRegister}>
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={inputRegister.name}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500 dark:shadow-sm-light"
                placeholder="Enter your name"
                required
                onChange={handleInputChangeRegister}
              />
            </div>
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
                value={inputRegister.email}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500 dark:shadow-sm-light"
                placeholder="Enter your email"
                required
                onChange={handleInputChangeRegister}
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
                name="password"
                value={inputRegister.password}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500 dark:shadow-sm-light"
                placeholder="Enter your password"
                required
                onChange={handleInputChangeRegister}
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Image Profile
              </label>
              <input
                type="text"
                id="avatar"
                name="image_url"
                value={inputRegister.image_url}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500 dark:shadow-sm-light"
                placeholder="Enter your Image"
                required
                onChange={handleInputChangeRegister}
              />
            </div>
            <button
              type="submit"
              className=" block w-full text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
            >
              Register Now
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
