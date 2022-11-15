import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import ListJob from './ListJob';
import Filter from '../../components/Filter';
import GlobalContext from '../../context/GlobalContext';
const JobVacancy = () => {
  const { state, handleFunction } = useContext(GlobalContext);
  const { data, setData, fetchStatus, setFetchStatus } = state;
  const {
    handleSearchFilter,
    handleSearchKota,
    handleSearchCompany,
    handleSearchSalary,
  } = handleFunction;
  useEffect(() => {
    if (fetchStatus === true) {
      axios
        .get('https://dev-example.sanbercloud.com/api/job-vacancy')
        .then((res) => {
          setData([...res.data.data]);
        })
        .catch((err) => {});
      setFetchStatus(false);
    }
  }, [fetchStatus, setFetchStatus]);

  return (
    <>
      <Filter
        job={handleSearchFilter}
        kota={handleSearchKota}
        company={handleSearchCompany}
        salary={handleSearchSalary}
      />
      <ListJob data={data} />
    </>
  );
};

export default JobVacancy;
