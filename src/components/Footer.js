import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className=" container mx-auto p-4 bg-white rounded-lg  md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2022{' '}
          <a href="https://flowbite.com/" className="hover:underline">
            FindCareer™
          </a>
          . All Rights Reserved.
        </span>
      </footer>
    </>
  );
};

export default Footer;
