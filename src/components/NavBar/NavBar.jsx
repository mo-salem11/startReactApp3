import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import css from './NavBar.module.css';

function NavBar({ onHeightChange }) {
  const [pathName, setPathName] = useState(window.location.pathname);
  const childRef = useRef(null);

  useEffect(() => {
    const handleChildHeightChange = () => {
      const { height } = childRef.current.getBoundingClientRect();
      onHeightChange(height);
    };

    window.addEventListener('resize', handleChildHeightChange);
    handleChildHeightChange();

    const handleScroll = () => {
      if (window.scrollY > 30) {
        childRef.current.classList.remove('py-4');
      } else {
        childRef.current.classList.add('py-4');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleChildHeightChange);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [onHeightChange]);

  return (
    <>
      <nav ref={childRef} className="navbar navbar-expand-lg fixed-top py-4">
        <div className="container">
          <NavLink to={""} className="navbar-brand text-white fw-bolder fs-3 text-uppercase">
            Start React
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item me-3">
                <NavLink
                  onClick={() => {
                    setPathName("/");
                  }}
                  to={""}
                  className={`${pathName === '/' ? `nav-link ${css.active} p-1 text-white text-uppercase fw-bold` : `nav-link p-1 text-white text-uppercase fw-bold`}`}
                >
                  about
                </NavLink>
              </li>
              <li className="nav-item me-3">
                <NavLink
                  onClick={() => {
                    setPathName("/portfolio");
                  }}
                  to={"portfolio"}
                  className={`${pathName === '/portfolio' ? `nav-link ${css.active} p-1 text-white text-uppercase fw-bold` : `nav-link p-1 text-white text-uppercase fw-bold`}`}
                >
                  portfolio
                </NavLink>
              </li>
              <li className="nav-item me-3">
                <NavLink
                  onClick={() => {
                    setPathName("/contact");
                  }}
                  to={"contact"}
                  className={`${pathName === '/contact' ? `nav-link ${css.active} p-1 text-white text-uppercase fw-bold` : `nav-link p-1 text-white text-uppercase fw-bold`}`}
                >
                  contacts
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;