import axios from 'axios';
import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import GlobalContext from '../../context/GlobalContext';
const CreateJob = () => {
  const { state, handleFunction } = useContext(GlobalContext);
  const {
    inputJob,
    setInputJob,
    fetchStatus,
    setFetchStatus,

    setCurrentId,
  } = state;
  const {
    handleClikJobStatusChange,
    handleChangeInputNewJob,
    handleSubmitJob,
  } = handleFunction;
  let { id } = useParams();
  console.log(id);
  useEffect(() => {
    if (id !== undefined) {
      axios
        .get(`https://dev-example.sanbercloud.com/api/job-vacancy/${id}`)
        .then((res) => {
          setInputJob({
            title: res.data.title,
            job_description: res.data.job_description,
            job_qualification: res.data.job_qualification,
            job_type: res.data.job_type,
            job_tenure: res.data.job_tenure,
            job_status: res.data.job_status,
            company_name: res.data.company_name,
            company_image_url: res.data.company_image_url,
            company_city: res.data.company_city,
            salary_min: res.data.salary_min,
            salary_max: res.data.salary_max,
          });
        })
        .catch((err) => {});
    }
    // setCurrentId(id);
  }, [fetchStatus, setFetchStatus]);

  return (
    <>
      <div>
        <ToastContainer />
        <form onSubmit={handleSubmitJob}>
          <div className="w-full bg-white shadow-sm md:flex p-4 justify-between md:space-x-4">
            {/* Job Content */}
            <div className="md:flex-1">
              <h2 className="w-1/2 text-md font-semibold text-teal-700  border-b-2 border-b-teal-600 my-4">
                Job Content
              </h2>
              <div className="my-2">
                <label
                  htmlFor=""
                  className="text-sm font-semibold text-gray-700"
                >
                  Job Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={inputJob.title}
                  onChange={handleChangeInputNewJob}
                  id=""
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
                />
              </div>
              <div className="my-2">
                <label
                  htmlFor=""
                  className="text-sm font-semibold text-gray-700"
                >
                  Job Description
                </label>
                <div>
                  <textarea
                    name="job_description"
                    id=""
                    cols="30"
                    rows="10"
                    value={inputJob.job_description}
                    onChange={handleChangeInputNewJob}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
                  ></textarea>
                </div>
              </div>
              <div className="my-2">
                <label
                  htmlFor=""
                  className="text-sm font-semibold text-gray-700"
                >
                  Job Qualification
                </label>
                <div>
                  <textarea
                    name="job_qualification"
                    id=""
                    cols="30"
                    rows="10"
                    value={inputJob.job_qualification}
                    onChange={handleChangeInputNewJob}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
                  ></textarea>
                </div>
              </div>
              <div className="my-2">
                <label
                  htmlFor=""
                  className="text-sm text-gray-700 font-semibold"
                >
                  Job Type
                </label>
                <select
                  name="job_type"
                  id=""
                  cols="30"
                  rows="10"
                  value={inputJob.job_type}
                  onChange={handleChangeInputNewJob}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
                >
                  <option value="">Chosee Job Type </option>
                  <option value="OnSite" selected>
                    OnSite
                  </option>
                  <option value="WFH">WFH</option>
                  <option value="WFO">WFO</option>
                  <option value="Remote">Remote</option>
                </select>
              </div>
            </div>

            {/* Company Data  */}
            <div className="md:flex-1 mt-[2.5rem]">
              <div className="my-2">
                <label
                  htmlFor=""
                  className="text-sm font-semibold text-gray-700"
                >
                  Job Tenure
                </label>
                <div className="my-2">
                  <select
                    name="job_tenure"
                    id=""
                    cols="30"
                    rows="10"
                    value={inputJob.job_tenure}
                    onChange={handleChangeInputNewJob}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
                  >
                    <option value="">Chosee Job Tenure</option>
                    <option value="Intership">Intership</option>
                    <option value="Contract">Contract</option>
                    <option value="Permanent Employee">
                      Permanent Employee
                    </option>
                  </select>
                </div>
              </div>
              <div className="md:flex my-2 justify-between md:space-x-2 md:flex-1">
                <div className="w-full">
                  <label
                    htmlFor=""
                    className="text-sm font-semibold text-gray-700"
                  >
                    Salary Min
                  </label>
                  <input
                    type="text"
                    name="salary_max"
                    id=""
                    value={inputJob.salary_max}
                    onChange={handleChangeInputNewJob}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor=""
                    className="text-sm font-semibold text-gray-700"
                  >
                    Salary Max
                  </label>
                  <input
                    type="text"
                    name="salary_min"
                    id=""
                    value={inputJob.salary_min}
                    onChange={handleChangeInputNewJob}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
                  />
                </div>
              </div>
              <div className="my-2">
                <label
                  htmlFor=""
                  className="text-sm font-semibold text-gray-700"
                >
                  Job Status
                </label>
                <div className="my-4">
                  <label
                    htmlFor="checked-toggle"
                    className="inline-flex relative items-center cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      id="checked-toggle"
                      className="sr-only peer"
                      name="job_status"
                      defaultChecked={inputJob.job_status}
                      onChange={handleClikJobStatusChange}
                    />

                    <div
                      className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 
                     dark:peer-focus:ring-teal-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-teal-600"
                    />
                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                      {inputJob.job_status === 1 ? (
                        <div className="flex items-center space-x-2 text-green-500 font-semibold text-xs p-1 bg-green-100 rounded-lg">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-4 h-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          Open
                        </div>
                      ) : (
                        <div className="flex items-center space-x-2 text-red-500 font-semibold text-xs bg-red-100 p-1 rounded-lg">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-4 h-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          Close
                        </div>
                      )}
                    </span>
                  </label>
                </div>
              </div>
              <h2 className="text-md font-semibold text-teal-700  border-b-2 border-b-teal-600 my-4">
                Company Profile
              </h2>

              <div className="my-2">
                <label
                  htmlFor=""
                  className="text-sm font-semibold text-gray-700"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  name="company_name"
                  id=""
                  value={inputJob.company_name}
                  onChange={handleChangeInputNewJob}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
                />
              </div>

              <div className="my-2">
                <label
                  htmlFor=""
                  className="text-sm font-semibold text-gray-700"
                >
                  Company City
                </label>
                <input
                  type="text"
                  name="company_city"
                  id=""
                  value={inputJob.company_city}
                  onChange={handleChangeInputNewJob}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
                />
              </div>
              <div className="my-2">
                <label
                  htmlFor=""
                  className="text-sm font-semibold text-gray-700"
                >
                  Logo Company
                </label>
                <input
                  type="text"
                  name="company_image_url"
                  id=""
                  value={inputJob.company_image_url}
                  onChange={handleChangeInputNewJob}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
                />
              </div>
              <div className=" h-40 w-40">
                <img
                  className="w-32 h-32 object-cover"
                  src={
                    !inputJob.company_image_url
                      ? 'https://flowbite.com/docs/images/examples/image-1@2x.jpg'
                      : inputJob.company_image_url
                  }
                  alt=""
                />
              </div>
              <button
                type="submit"
                className=" my-4 w-full text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-400 font-semibold rounded-lg text-sm  px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateJob;
