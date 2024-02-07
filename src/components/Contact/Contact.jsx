import React ,{useState} from 'react'
import styles from './Contact.module.css'
import Star from '../Star/Star'
function Contact() {
 
    const [formData, setFormData] = useState({
      userName: '',
      userAge: '',
      userEmail: '',
      userPassword: ''
    });  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });    
  };
 
  const getLabelClass = (name) => {
    return  formData[name].length ? 'position-relative top-0' : `position-relative ${styles.__top}`;
  };
  return (
    <>
      <div
        className="container mt-5 py-5"
      >
         <Star title="CONTACT COMPONENT" color="#2c3e50"/>
                <form action className="w-75 mx-auto mt-5">
                  <label htmlFor="userName" className={getLabelClass('userName')}>userName : </label>
                  <input 
                  type="text" 
                  className="form-control py-3 border-0 border-bottom position-relative" 
                  placeholder="userName" 
                  name="userName" 
                  value={formData.userName}
                  onChange={handleChange}
                  />
                 
                  <label htmlFor="userAge" className={getLabelClass('userAge')}>userAge : </label>
                  <input 
                  type="number" 
                  className="form-control py-3 border-0 border-bottom position-relative" 
                  placeholder="userAge" 
                  name="userAge" 
                  value={formData.userAge}
                  onChange={handleChange}
                  />
                  
                  <label htmlFor="userEmail" className={getLabelClass('userEmail')}>userEmail : </label>
                  <input 
                  type="email" 
                  className="form-control py-3 border-0 border-bottom position-relative" 
                  placeholder="userEmail" 
                  name="userEmail" 
                  value={formData.userEmail}
                  onChange={handleChange}
                  />
                  
                  <label htmlFor="userPassword" className={getLabelClass('userPassword')}>userPassword : </label>
                  <input type="password" 
                         className="form-control py-3 border-0 border-bottom position-relative" 
                         placeholder="userPassword" 
                         name="userPassword" 
                         value={formData.userPassword}
                         onChange={handleChange}
                         />
                 <button className="btn btn-primary d-block mx-auto mt-4">Send Message</button>
              </form>
   
      </div>
      
    
    </>
  )
}

export default Contact