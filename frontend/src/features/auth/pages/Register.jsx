import React from 'react'
import { useNavigate , Link } from 'react-router';


const Register = () => {

    const nevigate = useNavigate(); 

    const handleSubmit = (e)=>{
        e.preventDefault();
    }

  return (
    <main> 
        <div className='form-container' >   
            <h1> Login Form</h1>

            <form onSubmit={handleSubmit} > 
                
                <div className="input-group">
                    <label htmlFor="username"> Username </label>
                    <input type="text" name="username" id="username" placeholder='enter your username' />
                </div>

                <div className="input-group">
                    <label htmlFor="email"> Email </label>
                    <input type="email" name="email" id="email" placeholder='enter your email ' />
                </div>

                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder='Enter Your password '/>
                </div>

                <button className='button primary-button' >  Login</button>

            </form>

            <p> Already have Account  ? <Link to={"/login"}  > Login </Link></p>

        </div>
        
    </main>
  )
}

export default Register
