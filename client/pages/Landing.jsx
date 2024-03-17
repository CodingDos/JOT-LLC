import React from 'react'
import { Link } from 'react-router-dom';
import "../styles/Landing.css"

function Landing() {
  return (
    <div className='landingPage'>
        <div className='landingBody'>
            <div className='landingContent'>
                <h1 className='appName'>JOT</h1>
                <p className='appDescription'>blah blah blah</p>
                <Link to="/register">
                    <button className='signUpButton'>Sign Up</button>
                </Link>
            </div>
        </div>
        
    </div>
  )
}

export default Landing