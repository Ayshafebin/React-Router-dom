import React from 'react'
import { useNavigate } from 'react-router-dom'


const Login = () => {
    const myNav=useNavigate()
  return (
    <div>
          <form action="">
            <h1>Login</h1>
            <label htmlFor="">Name </label>
            <input type="text" placeholder='name'/> <br />
            <br />
            <label htmlFor="">password </label>
            <input type="password" name="" id="" placeholder='password'/>
            <br />
            <br />
            <button onClick={()=>{myNav('/Home')}}>Submit</button>
        </form>
    </div>
    
  )
}

export default Login