import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FetchData = () => {
  const [data, setData] = useState([]);
  const [fetchStatus, setFetchStatus] = useState(true);

  useEffect(() => {
    if (fetchStatus === true) {
      axios
        .get('https://dev-example.sanbercloud.com/api/job-vacancy')
        .then((res) => {
          setData([...res.data.data]);
          console.log(res.data.data);
        })
        .catch((err) => {});
      setFetchStatus(false);
    }
  }, [fetchStatus, setFetchStatus]);
  return <></>;
};

export default FetchData;
