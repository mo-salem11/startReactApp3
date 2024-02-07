import React ,{useState} from 'react'
import styles from './portfolio.module.css'
import Star from '../Star/Star'
import port1 from '../../assets/images/port1.png';
import port2 from '../../assets/images/port2.png';
import port3 from '../../assets/images/port3.png';
function Portfolio() {

  const images=[port1,port2,port3,port2,port3,port1];
 let [flage,setFlage]=useState(true);
 const [clickedImage, setClickedImage] = useState(null);
 const hideModel = (imgSrc) => {
  setClickedImage(imgSrc);
  setFlage(true);
};
  return (
    <>
     
      <div className="container mt-5 py-5">
        <Star title="PORTFOLIO COMPONENT" color="#2c3e50"/>
        <div className="row g-3 mt-3">
        {images.map((imgSrc,index) => {
         return ( <div key={index} className="col-lg-4 col-md-6">
                    <div className='position-relative'>
                      <img className='w-100' src={imgSrc} alt="" />
                      <div onClick={()=>{setFlage(false)}} className={`${styles.layer} position-absolute start-0 top-0 h-100 w-100 d-flex justify-content-center align-items-center`}>
                      <i className="fa-solid fa-plus fa-6x text-light"></i>
                      </div>
                    </div>
                    <div  onClick={() => hideModel(imgSrc)}  className={!flage&&`${styles.model} position-fixed start-0 w-100 h-100 top-0 bg-primary bg-opacity-25 d-flex justify-content-center align-items-center`}>
                        <img className={flage?"d-none":`${styles.image}`} key={index} src={clickedImage}  alt="" />
                    </div>
                 </div>
                

                )
        })}
        </div> 
      </div>
    </>
  )
}

export default Portfolio