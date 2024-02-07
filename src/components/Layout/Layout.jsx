import React, { useRef, useState,useEffect } from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

import { Outlet } from 'react-router-dom';

const Layout = () => {
  const childRef = useRef(0);
  const [childHeight, setChildHeight] = useState(0);
  useEffect(() => {
    setChildHeight(childRef.current);
  }, []);
  const handleChildHeightChange = (height) => {
    setChildHeight(height);
  };

  const outletStyles = {
    marginTop: childHeight,
    minHeight: `calc(100vh - ${childHeight}px)`,
  };

  return (
    <>
      <NavBar onHeightChange={handleChildHeightChange}/>

      <div className='position-relative' style={outletStyles}>
        <Outlet/>
      </div>
      <Footer/>
    </>
  );
};

export default Layout;
