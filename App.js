 
import { useState } from 'react';
import './App.css';

function App() {
   
  const[value , setValue] = useState({
    firstName: "",
    lastName: "",
    email:"",
    password: "",
    confirmPassword: "",

  })

  const handleFirstName = (event) => {
     setValue ({...value, firstName: event.target.value})
  }
  const handleLastName = (event) => {
    setValue ({...value, lastName: event.target.value})
    
 }
 const handleEmail = (event) => {
  setValue ({...value, email: event.target.value})
}
const handlePassword = (event) => {
  setValue ({...value, password: event.target.value})
}
const handleConfirmPassword = (event) => {
  setValue ({...value, confirmPassword: event.target.value})
}

const[submit, setSubmit] = useState(false)
const handleSubmit = (event) => {
  event.preventDefault();
  if(value.firstName && value.lastName && value.email && value.password && value.confirmPassword){
    setValid(true)
  }
  setSubmit (true)
}
const [valid, setValid] = useState(false)
   
  return (
     
   <div className='form-container'>
    <h1 className='text'>Sign UP for Register</h1>
    <form className='form' onSubmit={handleSubmit}>
      <div className='form-group'>
        {submit && valid ? <div className='success-message'>Success!!!!Thanks for registration!!!</div> : null }
        
        <label className='label'>  First Name : </label><input   onChange={handleFirstName}
        value={value.firstName} name='firstname' placeholder='Firstname'></input>
        {submit && !value.firstName? <div className='div-message'>Please Enter your First Name</div> : null}
      </div>
      <div className='form-group'>
      <label className='label'> Last Name : </label><input onChange={handleLastName}
        value={value.lastName}name='lastname' placeholder='Lastname'></input> 
        {submit && !value.lastName?<div className='div-message'>Please Enter your Last Name</div>: null}
      </div>
      <div className='form-group'>
      <label className='label'> Email : </label><input  onChange={handleEmail}
        value={value.email} type="email"name='email' placeholder='Email'></input> 
        {submit && !value.email ? <div className='div-message'>Please Enter your Email address</div> :null}
      </div>
      <div className='form-group'>
      <label className='label'> Password : </label><input   onChange={handlePassword}
        value={value.password} type="password" name='password' placeholder='Password'></input>
        {submit && !value.password ?<div className='div-message'>Please Enter your Password</div> : null}
      </div>
      <div className='form-group'>
      <label className='label'> Re-Type Password : </label><input onChange={handleConfirmPassword}  
        value={value.confirmPassword} type="password" name='confirm-password' placeholder='Confirm Password'></input>
        {submit && !value.confirmPassword ?<div className='div-message'>Re-Enter your Password</div> : null}
      </div>
      <button type='submit'>Register</button>
    </form>
   </div> 
       
  );
}

export default App;
