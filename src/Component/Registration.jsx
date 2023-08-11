import React from 'react'
import { useNavigate } from 'react-router-dom'

const Registration = () => {
    const myNav=useNavigate()
  return (
    <div>
        <form action="">
            <h1>Registration</h1>
            <label htmlFor="">Name </label>
            <input type="text" placeholder='name'/> <br />
            <br />
            <label htmlFor="">password </label>
            <input type="password" name="" id="" placeholder='password'/>
            <br />
            <br />
            <button onClick={()=>{myNav('/login')}}>Submit</button>
        </form>
    </div>
  )
}

export default Registration