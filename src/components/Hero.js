import React from 'react';
import { Carousel } from 'flowbite-react';
const Hero = () => {
  return (
    <>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-[800] container m-auto">
        <Carousel slideInterval={5000} className="mt-10">
          <img
            className="img-responsive"
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80"
            alt="..."
          />
          <img
            src="https://images.unsplash.com/photo-1598870783649-5f875f81cd0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80"
            alt="..."
          />
          <img
            src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80"
            alt="..."
          />
          <img
            src="https://images.unsplash.com/photo-1487528278747-ba99ed528ebc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80"
            alt="..."
          />
        </Carousel>
      </div>
    </>
  );
};

export default Hero;
