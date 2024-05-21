import { useState } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests

export default function Login() {
  // Initialize state for form data with empty strings
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  // Function to handle login form submission
  const loginUser = (e) => {
    e.preventDefault(); 
    axios.get('/')
      .then(res => {
        console.log(res.data); // Handle success response
      })
      .catch(error => {
        console.error(error); // Handle error response
      });
  };
  
  return (
    <div>
      <form>
        <label onSubmit={loginUser}>Email</label> {/* Form submission handler */}
        <input type="email" placeholder='enter email...' value={data.email} onChange={(e) => setData({...data, email: e.target.value})} />  {/* Input field for email with onChange event to update state */}
        <label>Password</label>
        <input type="password" placeholder='enter password...' value={data.password} onChange={(e) => setData({...data, password: e.target.value})} /> {/* Input field for password with onChange event to update state */}
        <button type="submit">Login</button> {/* Submit button */}
      </form>
    </div>
  );
}
