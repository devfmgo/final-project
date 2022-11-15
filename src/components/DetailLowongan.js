import React from 'react';

const DetailLowongan = (view) => {
  /** Destructuing data object dari view */
  let { ...value } = view.data[0];
  const formatNumber = (q) => {
    return q.toLocaleString('id-ID', {
      style: 'currency',
      currency: 'IDR',
    });
  };
  return (
    <>
      <div className="container p-4">
        {/* Header Lowowngan  */}
        <div className="md:flex space-x-4 items-center">
          <div>
            <img
              src={value.company_image_url}
              alt=""
              className="w-20 h-auto "
            />
          </div>
          <div>
            <h1 className="text-xl font-semibold text-teal-700">
              {value.title}
            </h1>
            <p className="text-gray-700 text-md">{value.company_name}</p>
            <p className="text-gray-600 text-sm">{value.company_city}</p>
          </div>
        </div>
        {/* Detail Lowongan  */}
        <div className="mt-10">
          <div>
            <h2 className="text-xl text-gray-600 font-semibold my-4">
              Deskripsi Pekerjaan
            </h2>
            <p className="text-md text-gray-600">{value.job_description}</p>
          </div>
        </div>

        <div className="mt-10">
          <div>
            <h2 className="text-xl text-gray-600 font-semibold my-4">
              Job Requirements
            </h2>
            <p className="text-md text-gray-600">{value.job_qualification}</p>
          </div>
        </div>
        <div className="mt-10">
          <div>
            <h2 className="text-xl text-gray-600 font-semibold my-4">
              Range Salary
            </h2>
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
                  {formatNumber(value.salary_min)} -
                  {formatNumber(value.salary_max)}
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailLowongan;
