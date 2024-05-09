import { useState } from 'react';

export default function Login() {
  /* Data is initialized to empty strings since form is not filled out until User enters information */
  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const loginUser = (e) => {
    e.preventDefault()
  }
  
  return (
    <div>
      <form>
        <label onSubmit={loginUser}>Email</label>
        <input type="email" placeholder='enter email...' value={data.email} onChange={(e) => setData({...data, email: e.target.value})} /> 
        <label>Password</label>
        <input type="password" placeholder='enter password...' value={data.password} onChange={(e) => setData({...data, password: e.target.value})} />        
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
