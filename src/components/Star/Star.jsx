import React from 'react'
import css from './star.module.css';
function Star(props) {
 
 const color=props.color;
  return (
    <>
<div className="text-center pt-4">
  <h2 style={{color:color}} className="text-uppercase fw-bolder mb-3 fs-1">{props.title}</h2>
  <div className="d-flex align-items-center justify-content-center">
    <div className={`${css.line}`} style={{backgroundColor:color}} />
    <i className="mx-3 fa-solid fa-star fa-2x" />
    <div className={`${css.line}`} style={{backgroundColor:color}}/>
  </div>
</div>

    </>
  )
}

export default Star