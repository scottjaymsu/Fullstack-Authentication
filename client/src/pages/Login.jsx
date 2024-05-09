import React from 'react'

export default function Login() {
  
  const loginUser = (e) => {
    e.preventDefault()
  }
  
  return (
    <div>
      <form>
        <label onSubmit={loginUser}>Email</label>
        <input type="email" placeholder='enter email...' />
        <label>Password</label>
        <input type="password" placeholder='enter password...' />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
