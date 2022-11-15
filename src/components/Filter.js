import React, { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';
const Filter = ({ job, kota, company, salary }) => {
  const { state, otherFunction } = useContext(GlobalContext);
  const { search, setSearch } = state;
  // const {
  //   handleFilterJob,
  //   handleFilterKota,
  //   handleFilterCompany,
  //   handleFilterSalary,
  // } = handleFunction;
  const { formatNumber } = otherFunction;
  const handleFilterJob = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
    job(e.target.value);
  };
  const handleFilterKota = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
    kota(e.target.value);
  };
  const handleFilterCompany = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
    company(e.target.value);
  };
  const handleFilterSalary = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
    salary(formatNumber(e.target.value));
  };
  return (
    <>
      <div className="bg-teal-100 p-4 md:rounded-md md:flex md:space-x-4 md:h-24 items-center justify-between mx-auto">
        {/* Search by jobs  */}

        <div className="flex-1">
          <div className="relative w-full my-2">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-teal-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                />
              </svg>
            </div>
            <input
              type="text"
              name="job"
              id=""
              value={search.job}
              onChange={handleFilterJob}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
              placeholder="Search by Job"
              required
            />
          </div>
        </div>

        <div className="md:flex space-x-3 items-center flex-1">
          {/* Search By Kota */}

          <div>
            <div className="relative w-full my-2">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none mb">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-teal-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                  />
                </svg>
              </div>
              <input
                type="text"
                name="kota"
                id=""
                value={search.kota}
                onChange={handleFilterKota}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
                placeholder="Kota"
                required
              />
            </div>
          </div>
          {/* Search By Company */}

          <div>
            <div className="relative w-full my-2">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-teal-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                  />
                </svg>
              </div>
              <input
                type="text"
                name="company"
                id=""
                value={search.company}
                onChange={handleFilterCompany}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
                placeholder="Company"
                required
              />
            </div>
          </div>
          {/* Search By Min Salary */}
          <div>
            <div className="relative w-full my-2">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-teal-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <input
                type="text"
                name="salary"
                id=""
                value={formatNumber(search.salary)}
                onChange={handleFilterSalary}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
                placeholder="Min Salary"
                required
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
