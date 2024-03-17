import React from 'react'
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div className='landingPage'>
        <div className='landingHeader'>
            <p>JOT</p>
            <Link to="/register">
                <p className='logInButton'>Login</p>
            </Link>
        </div >
        <div className='landingBody'>
            <h1 className='appName'>JOT</h1>
            <p className='appDescription'>blah blah blah</p>
            <Link to="/register">
                <button className='signUpButton'>Sign Up</button>
            </Link>
        </div>
        
    </div>
  )
}

export default Landing