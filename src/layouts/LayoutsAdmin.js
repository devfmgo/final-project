import React from 'react';
import Sidebar from '../components/Sidebar';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
export const LayoutsAdmin = (props) => {
  let { name, image_url } = JSON.parse(Cookies.get('user'));
  const navigate = useNavigate();
  /**Handle Log Out */
  const handleLogOut = () => {
    Cookies.remove(`token`);
    Cookies.remove(`user`);
    navigate('/');
  };
  return (
    <>
      <div className="flex h-screen justify-between">
        <Sidebar />
        <div className="w-full">
          <header className="p-4 bg-teal-100 flex items-center justify-between">
            <h1 className="text-teal-800 text-2xl font-semibold">
              Dashboard Admin Find Career
            </h1>
            <div>
              <div className="md:flex items-center md:space-x-2">
                <img
                  src={image_url}
                  alt=""
                  className="w-10 h-10 rounded-full"
                />
                <label htmlFor="" className="text-sm text-gray-700">
                  {name}
                </label>
                <span
                  onClick={handleLogOut}
                  to="/login"
                  className=" p-3 rounded-md bg-teal-200 text-teal-800 font-semibold text-sm items-center cursor-pointer"
                >
                  Log Out
                </span>
              </div>
            </div>
          </header>
          <div className="p-4">{props.children}</div>
        </div>
      </div>
    </>
  );
};
