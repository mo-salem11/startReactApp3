import React  from 'react'
import css from './about.module.css';
import Star from '../Star/Star';
function About() {
 
  
 
  return (
    <>
    
  <div className={`${css.about} text-light  d-flex align-items-center`}>
     
    <div className="container pt-5">
    <Star color="white" title="ABOUT COMPONENT"/>
      <div  className="row px-5 mt-5">
        <div className="col-md-6 ">
          <p className="fs-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, nihil sunt quod aliquid laborum magnam vero, at nesciunt quas voluptatum debitis facilis maxime, laboriosam dolorum fugit cum exercitationem ut atque reiciendis ducimus repudiandae numquam perferendis.</p>
        </div>
        <div className="col-md-6">
          <p className="fs-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, nihil sunt quod aliquid laborum magnam vero, at nesciunt quas voluptatum debitis facilis maxime, laboriosam dolorum fugit cum exercitationem ut atque reiciendis ducimus repudiandae numquam perferendis.</p>
        </div>
      </div>
    </div>
  </div>
 </>
  )
}

export default About