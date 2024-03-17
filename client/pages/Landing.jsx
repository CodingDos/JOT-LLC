import React from 'react'
import { Link } from 'react-router-dom';
import "../styles/Landing.css"

function Landing() {
  return (
    <div className='landingPage'>
        <div className='landingBody'>
            <div className='landingContent'>
              <div>
                <h1>JOT</h1>
                <h4>Your personal canvas for fleeting thoughts, allowing you to record, organize, and explore your inner dialogue. A thought companion that helps you keep track of your mental landscape.</h4>
              </div>
                <Link to="/register">
                    <button className='signUpButton'>Sign Up</button>
                </Link>
            </div>
        </div>
        
    </div>
  )
}

export default Landing