import React from 'react'
import notFoundImage from '../../assets/images/notfound2.jpg';
function NotFound() {
  return (
     <>
          <div className="container vh-100 d-flex justify-content-center align-items-center">
             <div className='text-center'>
              <h1>Not Found</h1> 
              <h3>This page doesn't exist.</h3> 
             <img src={notFoundImage} alt="" />
             </div>
          </div>
    </>
  )
}

export default NotFound