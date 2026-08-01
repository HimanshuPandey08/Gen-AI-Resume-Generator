import React, { useState } from 'react'
import '../auth.form.scss'
import { useNavigate , Link } from 'react-router'
import { useAuth } from '../hooks/useAuth'

const Login = () => {

    const { loading , handleLogin } = useAuth()
    const nevigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleSubmit = async (e)=>{
        e.preventDefault();

        handleLogin({email, password })
    }

    if(loading){
        return ( <main>  
            Loading .......
        </main> )
    }

  return (
    <main> 
        <div className='form-container' >   
            <h1> Login Form</h1>

            <form onSubmit={handleSubmit} > 
                
                <div className="input-group">
                    <label htmlFor="email"> Email/Username </label>
                    <input type="email" name="email" id="email" 
                    onChange={(e)=>{ setEmail(e.target.value) }}
                    placeholder='enter your email or username' />
                </div>

                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" 
                    onChange={(e)=>{ setPassword(e.target.value) }}
                    placeholder='Enter Your password '/>
                </div>

                <button className='button primary-button' >  Login</button>

            </form>

            <p> Don't have an Account  ? <Link to={"/register"}  > Register </Link></p>
        </div>
        
    </main>
  )
}

export default Login
