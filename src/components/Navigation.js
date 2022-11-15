import React from 'react';
import { Navbar } from 'flowbite-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
const Navigation = () => {
  const url = useLocation();
  const link = url.pathname;
  const navigate = useNavigate();
  /**Handle Log Out */
  const handleLogOut = () => {
    Cookies.remove(`token`);
    Cookies.remove(`user`);
    navigate('/login');
  };
  return (
    <>
      <Navbar fluid={false} rounded={true} className="shadow-sm mb-4">
        <div className="container flex flex-wrap justify-between items-center mx-auto py-4">
          <Navbar.Brand href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-10 h-10 text-teal-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5"
              />
            </svg>

            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Find <span className="text-teal-700 font-semibold">Career</span>
            </span>
          </Navbar.Brand>
          <div className="flex md:order-2">
            {!Cookies.get(`token`) && (
              <div className="hidden md:flex space-x-4">
                <Link
                  to="/login"
                  className="flex p-3 rounded-md bg-teal-200 text-teal-800 font-semibold text-sm items-center"
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="flex p-3 rounded-md bg-teal-700 text-gray-100 font-semibold text-sm items-center"
                >
                  Sign Up
                </Link>
              </div>
            )}
            {Cookies.get(`token`) && (
              <span
                onClick={handleLogOut}
                to="/login"
                className="flex p-3 rounded-md bg-red-200 text-red-800 font-semibold text-md items-center cursor-pointer"
              >
                Log Out
              </span>
            )}

            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
            <li
              className={`${
                link === '/'
                  ? 'text-teal-700 md:border-b-2 md:border-teal-500'
                  : 'text-gray-700'
              }`}
            >
              <Link
                to="/"
                className="block py-2 pr-4 pl-3 font-semibold  rounded md:bg-transparent  md:p-0 text-md"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li
              className={`${
                link === '/job-vacancy'
                  ? 'text-teal-700 md:border-b-2 md:border-teal-500   '
                  : 'text-gray-700'
              }`}
            >
              <Link
                to="/job-vacancy"
                className="flex items-center py-2 pr-4 pl-3  font-semibold text-md rounded md:bg-transparent  md:p-0"
                aria-current="page"
              >
                Job Vacancy
              </Link>
            </li>
            {!Cookies.get(`token`) && (
              <div className=" relative block md:hidden space-y-2  text-center">
                <Link
                  to="/login"
                  className="flex p-3 rounded-md bg-teal-200 text-teal-800 font-semibold text-sm items-center"
                >
                  Sign In
                </Link>

                <Link
                  to="/register"
                  className="flex p-3 rounded-md bg-teal-700 text-gray-100 font-semibold text-sm items-center"
                >
                  Sign Up
                </Link>
              </div>
            )}
            {Cookies.get(`token`) && (
              <li
                onClick={handleLogOut}
                to="/login"
                className="flex p-3 rounded-md bg-red-200 text-red-800 font-semibold text-md items-center cursor-pointer"
              >
                Log Out
              </li>
            )}
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
};

export default Navigation;
