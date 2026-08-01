import React, { useState } from 'react'
import { useNavigate , Link } from 'react-router';
import { useAuth } from '../hooks/useAuth';

const Register = () => {

    const nevigate = useNavigate(); 
    const { loading ,  handleRegister } = useAuth();

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleSubmit = async (e)=>{
        e.preventDefault();
        await handleRegister({username , email , password})
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
                    <label htmlFor="username"> Username </label>
                    <input type="text" name="username" id="username" 
                    onChange={(e) => { setUsername(e.target.value)}}
                    placeholder='enter your username' />
                </div>

                <div className="input-group">
                    <label htmlFor="email"> Email </label>
                    <input type="email" name="email" id="email" 
                    onChange={(e) => { setEmail(e.target.value)}}
                    placeholder='enter your email ' />
                </div>

                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" 
                    onChange={(e) => { setPassword(e.target.value)}}
                    placeholder='Enter Your password '/>
                </div>

                <button className='button primary-button' >  Login</button>

            </form>

            <p> Already have Account  ? <Link to={"/login"}  > Login </Link></p>

        </div>
        
    </main>
  )
}

export default Register
