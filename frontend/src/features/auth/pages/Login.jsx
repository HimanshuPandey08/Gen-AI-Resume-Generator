import React from 'react'
import '../auth.form.scss'
import { useNavigate , Link } from 'react-router'


const Login = () => {

    const nevigate = useNavigate()

    const handleSubmit = (e)=>{
        e.preventDefault();
    }

  return (
    <main> 
        <div className='form-container' >   
            <h1> Login Form</h1>

            <form onSubmit={handleSubmit} > 
                
                <div className="input-group">
                    <label htmlFor="email"> Email/Username </label>
                    <input type="email" name="email" id="email" placeholder='enter your email or username' />
                </div>

                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder='Enter Your password '/>
                </div>

                <button className='button primary-button' >  Login</button>

            </form>

            <p> Don't have an Account  ? <Link to={"/register"}  > Register </Link></p>
        </div>
        
    </main>
  )
}

export default Login
