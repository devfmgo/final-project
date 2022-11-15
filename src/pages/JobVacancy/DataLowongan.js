import axios from 'axios';
import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Filter from '../../components/Filter';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import GlobalContext from '../../context/GlobalContext';
const DataLowongan = () => {
  const { state, handleFunction, otherFunction } = useContext(GlobalContext);
  const { data, setData, fetchStatus, setFetchStatus } = state;
  const {
    handleDeleteJob,
    handleEditJob,
    handleSearchCompany,
    handleSearchFilter,
    handleSearchKota,
    handleSearchSalary,
  } = handleFunction;
  const { formatNumber, sliceText } = otherFunction;
  useEffect(() => {
    axios
      .get('https://dev-example.sanbercloud.com/api/job-vacancy')
      .then((res) => {
        setData([...res.data.data]);
      })
      .catch((err) => {});

    setFetchStatus(false);
  }, [fetchStatus, setFetchStatus]);

  //short text

  return (
    <>
      <ToastContainer />
      <div className=" text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800 my-2">
        <div>
          <Filter
            job={handleSearchFilter}
            kota={handleSearchKota}
            company={handleSearchCompany}
            salary={handleSearchSalary}
          />
        </div>
      </div>

      <div className="overflow-x-auto relative shadow-md sm:rounded-lg w-auto">
        <table className="w-auto text-sm text-left text-gray-500 dark:text-gray-400 overflow-scroll ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {/* <th scope="col" className="py-3 px-6">
                #
              </th> */}
              <th scope="col" className="py-3 px-6">
                Job Title
              </th>
              <th scope="col" className="py-3 px-6">
                Description
              </th>
              <th scope="col" className="py-3 px-6">
                Qualification
              </th>
              <th scope="col" className="py-3 px-6">
                Job Type
              </th>
              <th scope="col" className="py-3 px-6">
                Tenure
              </th>
              <th scope="col" className="py-3 px-6">
                Status
              </th>
              <th scope="col" className="py-3 px-6">
                Company
              </th>
              <th scope="col" className="py-3 px-6">
                Brand
              </th>
              <th scope="col" className="py-3 px-6">
                City
              </th>
              <th scope="col" className="py-3 px-6">
                Salary
              </th>

              <th scope="col" className="py-3 px-6">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data !== null &&
              data.map((res, index) => {
                return (
                  <tr
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    key={index}
                  >
                    {/* <td className="py-4 px-6">{res.id}</td> */}
                    <td className="py-4 px-6 text-gray-700 font-semibold">
                      {res.title}
                    </td>
                    <td className="py-4 px-6 max-text">
                      {sliceText(res.job_description, 50)}
                    </td>
                    <td className="py-4 px-6 max-text">
                      {sliceText(res.job_qualification, 50)}
                    </td>
                    <td className="py-4 px-6">{res.job_type}</td>
                    <td className="py-4 px-6">{res.job_tenure}</td>
                    <td className="py-4 px-6 text-xs">
                      {res.job_status === 1 ? (
                        <span className="bg-teal-200 text-teal-700 p-1.5 rounded-md font-semibold">
                          Open
                        </span>
                      ) : (
                        <span className="bg-red-200 text-red-700 p-1.5 rounded-md font-semibold">
                          Close
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-6">{res.company_name}</td>
                    <td className="py-4 px-6">
                      <img
                        src={res.company_image_url}
                        alt=""
                        className="w-20"
                      />
                    </td>
                    <td className="py-4 px-6 capitalize font-semibold">
                      {res.company_city}
                    </td>
                    <td className="py-4 px-6 text-gray-700 font-semibold">
                      <div>
                        <span>{formatNumber(res.salary_min)}</span> - &nbsp;
                        <span>{formatNumber(res.salary_max)}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex  items-center justify-between space-x-2">
                        <Link
                          to={`/dashboard/job-data/edit/${res.id}`}
                          className="bg-yellow-100 p-2 rounded-md"
                          onClick={() => handleEditJob(res.id)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 text-gray-600"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                            />
                          </svg>
                        </Link>
                        <Link
                          className="bg-red-200 p-2 rounded-md"
                          onClick={() => handleDeleteJob(res.id)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 text-red-700"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                          </svg>
                        </Link>
                      </div>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DataLowongan;
