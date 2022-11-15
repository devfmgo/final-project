import React, { useState } from 'react';
import Moment from 'react-moment';
import Card from '../../components/Card';
import DetailLowongan from '../../components/DetailLowongan';
const ListJob = ({ data }) => {
  const [view, setView] = useState(null);
  const [idLowongan, setIdLowongan] = useState(null);
  const countLowongan = data.length;
  const onListSelect = (id) => {
    // filter data
    const viewDetail = data.filter((item) => item.id === id);
    setView(viewDetail);
    setIdLowongan(parseInt(viewDetail[0].id));
  };

  const formatNumber = (q) => {
    return q.toLocaleString('id-ID', {
      style: 'currency',
      currency: 'IDR',
    });
  };
  return (
    <>
      <div className="my-10">
        <div className="flex md:flex-row flex-col-reverse">
          <div className="overflow-auto scroll-smooth md:h-[800px] md:w-[650px] px-3  shadow-md">
            {data !== null &&
              data.map((res, index) => {
                return (
                  <Card key={index}>
                    <div className="overflow-auto scroll-smooth">
                      <div
                        className={`${
                          res.id === idLowongan
                            ? 'flex flex-col cursor-pointer bg-teal-50 shadow-xl p-4 border-2 border-teal-700 mt-4  md:w-96  h-auto '
                            : 'flex flex-col cursor-pointer bg-white shadow-md p-4 border-l-2 border-teal-700 mt-4  md:w-96  h-auto'
                        }`}
                      >
                        <div>
                          <img
                            src={res.company_image_url}
                            alt=""
                            className="w-20 mb-2 my-2"
                          />
                        </div>
                        <div className="flex space-x-2">
                          {res.job_status === 1 ? (
                            <label className="text-xs  p-1 rounded-md font-medium bg-teal-100 text-teal-800">
                              Open
                            </label>
                          ) : (
                            <label className="text-xs  p-1 rounded-md font-medium bg-red-100 text-red-800">
                              Close
                            </label>
                          )}

                          <label className="text-xs bg-indigo-100 text-indigo-800 p-1 rounded-md font-medium">
                            {res.job_tenure}
                          </label>
                          <label className="text-xs bg-yellow-100 text-yellow-800 p-1 rounded-md font-medium">
                            {res.job_type}
                          </label>
                        </div>

                        <div
                          className="my-3 text-left"
                          onClick={() => onListSelect(res.id)}
                        >
                          <p className="hover:text-teal-700">{res.title}</p>
                          <h1 className="font-semibold hover:text-teal-700">
                            {res.company_name}
                          </h1>
                        </div>
                        <hr className="my-4 devide-dashed devide-gray-300 w-full" />
                        <div className="flex items-center my-1">
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="w-6 h-6 text-teal-700"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          </div>
                          <div>
                            <label
                              htmlFor=""
                              className="text-sm ml-2 text-gray-700 font-semibold"
                            >
                              {formatNumber(res.salary_min)} -{' '}
                              {formatNumber(res.salary_max)}
                            </label>
                          </div>
                        </div>
                        <div className="flex items-center my-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6 text-teal-700"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                            />
                          </svg>

                          <Moment
                            fromNow
                            className="text-sm ml-2 text-gray-700"
                          >
                            {res.created_at}
                          </Moment>
                        </div>
                        <div>
                          <button className=" cursor-pointer bg-teal-600 text-teal-100 hover:bg-teal-700 rounded-md text-sm font-semibold p-2 w-full my-4">
                            Apply Job
                          </button>
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}
          </div>
          <div className="ml-4  md:block shadow-sm w-full mt-10 p-4">
            {view !== null ? (
              <DetailLowongan data={view} />
            ) : (
              <div className="relative text-center mt-20 md:right-42 right-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-32 h-32 text-teal-600 text-center m-auto"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                  />
                </svg>
                <h1 className="md:text-4xl text-xl my-4 font-semibold text-gray-600">
                  Ada {countLowongan} lowongan untuk kamu
                </h1>
                <p className="md:text-md text-sm">
                  Pilih lowongan untuk melihat lebih detail
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ListJob;
