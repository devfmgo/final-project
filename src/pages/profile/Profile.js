import React from 'react';
import Cookies from 'js-cookie';
const Profile = () => {
  let { id, name, email, image_url } = JSON.parse(Cookies.get('user'));
  return (
    <>
      <div className="bg-gray-50 rounded-md p-4 shadow-sm">
        <div className="md:flex justify-between space-x-4">
          <div class=" relative h-32 w-32   sm:mb-0 mb-3">
            <img
              src={
                image_url
                  ? image_url
                  : 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
              }
              alt="aji"
              class=" w-32 h-32 object-cover rounded-2xl"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-gray-700 my-2">
              {name} <span className="text-teal-400">id:{id}</span>
            </h2>
            <p className="text-gray-600 text-sm">{email}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
