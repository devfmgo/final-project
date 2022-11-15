import React from 'react';
// import Moment from 'react-moment';
const Card = (props) => {
  return (
    <>
      <div className="my-6 p-4">{props.children}</div>
    </>
  );
};

export default Card;
