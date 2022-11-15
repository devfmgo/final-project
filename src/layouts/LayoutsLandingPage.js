import React from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

const LayoutsLandingPage = (props) => {
  return (
    <>
      <Navigation />
      <div className="container mx-auto h-screen">{props.children}</div>
      <Footer />
    </>
  );
};

export default LayoutsLandingPage;
