import React from 'react'

function Footer() {
 
  return (
    <footer>
        <>
    <div className='bg-dark '>
    <div className='container'>
    <div className="row p-5">
        <div className="col-md-4 text-center">
            <h2 className='text-light m-3'>LOCATION</h2>
            <p className='text-light' >2215 John Daniel Drive</p>
            <p className='text-light'>Clark, MO 65243.</p>
        </div>
        <div className="col-md-4 text-center">
            <h2 className='text-light m-3'>AROUND THE WEB</h2>
            <p className='text-center'>
              <i className="fa-brands fa-facebook rounded-circle fs-2 p-2 text-light"></i>
              <i className="fa-brands fa-twitter rounded-circle fs-2 p-2 text-light"></i>
              <i className="fa-brands fa-linkedin rounded-circle fs-2 p-2 text-light"></i>
              <i className="fa-solid fa-globe rounded-circle fs-2 p-2 text-light"></i>
            </p>
        </div>
        <div className="col-md-4 text-center">
            <h2 className='text-light m-3'>ABOUT FREELANCER</h2>
            <p className='text-light'>Freelance is a free to use, licensed Bootstrap theme created by Route.</p>
        </div>
    </div>
    </div>
    </div>
    <div className='bg-secondary'>
      <p className='text-light text-center p-3 m-0 '>Copyright © Your Website 2021.</p>
    </div>
    </>
    </footer>
  )
}

export default Footer