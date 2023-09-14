import React, { useState } from 'react'
import './AshLogin.css'

const AshLogin = () => {

    const [action, setAction] = useState('Sign Up');

    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>{action}</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
                {action==='Login'?<div></div>:<div className='input'>
                    <label htmlFor="name">Full Name</label>
                    <input type='text' placeholder='Name' />
                </div>}

            <div className='input'>
                <label htmlFor='email'>Email</label>
                <input type='email' placeholder='youremail@gmail.com' />
            </div>
            <div className='input'>
                <label htmlFor='password'>Password</label>
                <input type='password' placeholder='********' />
            </div>
        </div>  
        {action==='Sign Up'?<div></div>:<div className='forgot-password'>Forgot Password? <span><b>Click Here!</b></span></div>}
            <div className='submit-container'>
                <div className={action==='Login'?'submit gray':'submit'} onClick={()=>{setAction('Sign Up')}}>Sign Up</div>
                <div className={action==='Sign Up'?'submit gray':'submit'} onClick={()=>{setAction('Login')}}>Login</div>
            </div>
        </div>
  )
}

export default AshLogin

