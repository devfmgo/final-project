import React, { useContext } from 'react';

import { ToastContainer } from 'react-toastify';
import GlobalContext from '../../context/GlobalContext';
const ChangePassword = () => {
  const { state, handleFunction } = useContext(GlobalContext);
  const { inputChangePassword, error, button } = state;
  const {
    handleInputChangePassword,
    handleSubmitChangePassword,
    validateInput,
  } = handleFunction;
  return (
    <>
      <ToastContainer />
      <div className="bg-white shadow-md mt-10 container mx-auto w-96 p-4 rounded-md">
        <div className="my-4">
          <h2 className="text-xl text-center text-teal-800 font-semibold">
            Change Password
          </h2>
        </div>
        <form onSubmit={handleSubmitChangePassword}>
          <div className="mb-6">
            <input
              type="password"
              id="current_password"
              name="current_password"
              value={inputChangePassword.current_password}
              onChange={handleInputChangePassword}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500 dark:shadow-sm-light"
              placeholder="Enter current password"
              required
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              id="password"
              name="new_password"
              min={8}
              value={inputChangePassword.new_password}
              onChange={handleInputChangePassword}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500 dark:shadow-sm-light"
              required
              placeholder="Enter new password"
              onBlur={validateInput}
            />
            {error.new_password && (
              <span className="text-xs text-red-400">{error.new_password}</span>
            )}
          </div>
          <div className="mb-6">
            <input
              type="password"
              id="repeat-password"
              name="new_confirm_password"
              min={8}
              value={inputChangePassword.new_confirm_password}
              onChange={handleInputChangePassword}
              onBlur={validateInput}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900
            text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block
            w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
            dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500
            dark:focus:border-teal-500 dark:shadow-sm-light"
              required
              placeholder="Repeat new password"
            />
            {error.new_confirm_password && (
              <span className="text-xs text-red-400">
                {error.new_confirm_password}
              </span>
            )}
          </div>

          <button
            type="submit"
            className={`block w-full text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800 ${
              button === true ? 'cursor-not-allowed' : ''
            }`}
            disabled={button}
          >
            Change Password
          </button>
        </form>
      </div>
    </>
  );
};

export default ChangePassword;
