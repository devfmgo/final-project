import React, { createContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
export const GlobalContext = createContext();
export const GlobalProvider = (props) => {
  let navigate = useNavigate();
  /** Fetch Data  Job Vacancy*/
  const [data, setData] = useState([]);
  const [fetchStatus, setFetchStatus] = useState(true);
  const [currentId, setCurrentId] = useState(false);
  /** input form login */
  const [input, setInput] = useState({
    email: '',
    password: '',
  });
  /** state Search */
  const [search, setSearch] = useState({
    job: '',
    kota: '',
    company: '',
    salary: '',
  });
  /** State Change Password */
  const [inputChangePassword, setInputChangePassword] = useState({
    current_password: '',
    new_password: '',
    new_confirm_password: '',
  });
  const [error, setError] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });
  /** State Form JobVacancy */
  const [inputJob, setInputJob] = useState({
    title: '',
    job_description: '',
    job_qualification: '',
    job_type: '',
    job_tenure: '',
    job_status: 1,
    company_name: '',
    company_image_url: '',
    company_city: '',
    salary_min: '',
    salary_max: '',
  });

  /** State Register */
  const [inputRegister, setInputRegister] = useState({
    name: '',
    image_url: '',
    email: '',
    password: '',
  });

  const [button, setButton] = useState(false);
  /** Handle Function */
  /** Handel Filter From Filter */
  const formatNumber = (q) => {
    return q.toLocaleString('id-ID', {
      style: 'currency',
      currency: 'IDR',
    });
  };
  const sliceText = (text, max) => {
    if (text === null) {
      return '';
    } else if (text.length > 10) {
      return text.slice(0, max) + '...';
    } else {
      return text;
    }
  };
  /** handel untuk callback dari compnent Filter */
  const handleSearchFilter = (value) => {
    if (value === '') {
      setData(data);
      setFetchStatus(true);
    } else {
      const filter = data.filter((item) =>
        item.title.toLowerCase().includes(value.toLowerCase())
      );

      setData(filter);
    }
  };
  /** Filter By Kota */
  const handleSearchKota = (value) => {
    if (value === '') {
      setData(data);
      setFetchStatus(true);
    } else {
      const filter = data.filter((item) =>
        item.company_city.toLowerCase().includes(value.toLowerCase())
      );

      setData(filter);
    }
  };
  /** Filter By company */
  const handleSearchCompany = (value) => {
    if (value === '') {
      setData(data);
      setFetchStatus(true);
    } else {
      const filter = data.filter((item) =>
        item.company_name.toLowerCase().includes(value.toLowerCase())
      );

      setData(filter);
    }
  };
  /** Filter By min salary */
  const handleSearchSalary = (value) => {
    if (value === '') {
      setData(data);
      setFetchStatus(true);
    } else {
      const filter = data.filter((item) => item.salary_min >= value);
      setData(filter);
    }
  };

  /** Handle function login */
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    let { email, password } = input;
    axios
      .post(`https://dev-example.sanbercloud.com/api/login`, {
        email,
        password,
      })
      .then((res) => {
        const { token, user } = res.data;
        Cookies.set(`token`, token, { expires: 1 });
        Cookies.set(`user`, JSON.stringify(user), { expires: 1 });
        navigate('/dashboard');
        console.log(res.data);
      })
      .catch((err) => {
        alert(err);
        console.log(err);
      });
  };
  const handleInputChangeLogin = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  /** Handle Change Password */
  const handleInputChangePassword = (e) => {
    setInputChangePassword({
      ...inputChangePassword,
      [e.target.name]: e.target.value,
    });
    validateInput(e);
  };
  const validateInput = (e) => {
    let { name, value } = e.target;
    setError((prev) => {
      const stateObj = { ...prev, [name]: '' };

      switch (name) {
        case 'current_password':
          if (!value) {
            stateObj[name] = 'Please enter Username.';
          }
          break;

        case 'new_password':
          if (!value) {
            stateObj[name] = 'Please enter Password.';
          }
          break;

        case 'new_confirm_password':
          if (!value) {
            stateObj[name] = 'Please enter Confirm Password.';
          } else if (
            inputChangePassword.new_confirm_password &&
            value !== inputChangePassword.new_password
          ) {
            stateObj[name] = 'Password and Confirm Password does not match.';
            setButton(true);
          } else {
            setButton(false);
          }
          break;

        default:
          break;
      }

      return stateObj;
    });
  };
  const handleSubmitChangePassword = (e) => {
    e.preventDefault();
    let { current_password, new_password, new_confirm_password } =
      inputChangePassword;
    axios
      .post(
        'https://dev-example.sanbercloud.com/api/change-password',
        { current_password, new_password, new_confirm_password },
        { headers: { Authorization: 'Bearer' + Cookies.get('token') } }
      )
      .then((res) => {
        console.log('password changed');
      })
      .catch((err) => {});
    toast.success('Change Password Successfully', {
      position: toast.POSITION.TOP_RIGHT,
    });

    setInputChangePassword({
      current_password: '',
      new_password: '',
      new_confirm_password: '',
    });
  };
  /** Handle function Form Jobvacancy */
  const handleClikJobStatusChange = (e) => {
    console.log(inputJob.job_status);
    if (inputJob.job_status === 1) {
      setInputJob({
        job_status: 0,
      });
      // console.log(inputJob.job_status);
    }
    if (inputJob.job_status === 0) {
      setInputJob({
        job_status: 1,
      });
      // console.log(inputJob.job_status);
    }
  };

  const handleChangeInputNewJob = (e) => {
    setInputJob({ ...inputJob, [e.target.name]: e.target.value });
  };

  const handleSubmitJob = (e) => {
    e.preventDefault();
    let {
      title,
      job_description,
      job_qualification,
      job_type,
      job_tenure,
      job_status,
      company_name,
      company_image_url,
      company_city,
      salary_min,
      salary_max,
    } = inputJob;
    if (currentId === false) {
      axios
        .post(
          `https://dev-example.sanbercloud.com/api/job-vacancy`,
          {
            title,
            job_description,
            job_qualification,
            job_type,
            job_tenure,
            job_status,
            company_name,
            company_image_url,
            company_city,
            salary_min,
            salary_max,
          },
          {
            headers: { Authorization: 'Bearer' + Cookies.get('token') },
          }
        )
        .then((res) => {
          navigate('/dashboard/job-data');
        });
      toast.success('Create New Job Successfully', {
        position: toast.POSITION.TOP_RIGHT,
      });
      console.log(inputJob);
    } else {
      axios
        .put(
          `https://dev-example.sanbercloud.com/api/job-vacancy/${currentId}`,
          {
            title,
            job_description,
            job_qualification,
            job_type,
            job_tenure,
            job_status,
            company_name,
            company_image_url,
            company_city,
            salary_min,
            salary_max,
          },
          {
            headers: { Authorization: 'Bearer' + Cookies.get('token') },
          }
        )
        .then((res) => {
          navigate('/dashboard/job-data');
        });
      toast.success('Update  Job Successfully', {
        position: toast.POSITION.TOP_RIGHT,
      });
      console.log(inputJob);
    }
  };
  /** Handle Lowongan */
  const handleDeleteJob = (id) => {
    axios
      .delete(`https://dev-example.sanbercloud.com/api/job-vacancy/ ${id}`, {
        headers: { Authorization: 'Bearer' + Cookies.get('token') },
      })
      .then((res) => {
        setFetchStatus(true);
        toast.success('Delete Job Successfully', {
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      .catch((err) => {});
  };

  const handleEditJob = (id) => {
    navigate(`/dashboard/job-data/edit/${id}`);
    setCurrentId(id);
  };

  /** Handle Register */
  const handleInputChangeRegister = (e) => {
    setInputRegister({ ...inputRegister, [e.target.name]: e.target.value });
  };
  const handleSubmitRegister = (e) => {
    e.preventDefault();
    let { name, image_url, email, password } = inputRegister;
    axios
      .post(`https://dev-example.sanbercloud.com/api/register`, {
        name,
        image_url,
        email,
        password,
      })
      .then((res) => {
        toast.success('Data Successfully Registered', {
          position: toast.POSITION.TOP_LEFT,
        });
        navigate('/login');
      })
      .catch((err) => {});
  };

  let state = {
    data,
    setData,
    fetchStatus,
    setFetchStatus,
    search,
    setSearch,
    input,
    setInput,
    inputChangePassword,
    setInputChangePassword,
    error,
    setError,
    button,
    setButton,
    currentId,
    setCurrentId,
    inputJob,
    setInputJob,
    inputRegister,
    setInputRegister,
  };
  let handleFunction = {
    handleSearchFilter,
    handleSearchKota,
    handleSearchCompany,
    handleSearchSalary,
    // handleFilterJob,
    // handleFilterKota,
    // handleFilterCompany,
    // handleFilterSalary,
    handleLoginSubmit,
    handleInputChangeLogin,
    handleInputChangePassword,
    handleSubmitChangePassword,
    validateInput,

    handleClikJobStatusChange,
    handleChangeInputNewJob,
    handleSubmitJob,

    navigate,
    handleEditJob,
    handleDeleteJob,

    handleInputChangeRegister,
    handleSubmitRegister,
  };
  let otherFunction = {
    formatNumber,
    sliceText,
  };
  return (
    <GlobalContext.Provider value={{ state, handleFunction, otherFunction }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
