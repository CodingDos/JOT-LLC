import React from 'react'
import { Link } from 'react-router-dom';
import "../styles/Landing.css"
import Nosh from "../CreatorImg/Noshin.png"
import John from "../CreatorImg/JohnL.png"
import Steve from "../CreatorImg/SteveV.png"

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

            <div className='rootCreators'>
              <div className='creatorsTitle'>
                Meet the Creators :
              </div>
              <div className='creatorsList'>
                <a href="https://github.com/JLopez0001">
                <img src={John} className='creatorListItem'></img>
                </a>  John Lopez
                <a href="https://github.com/noshinc346">
                <img src={Nosh} className='creatorListItem'></img>
                </a>  Noshin Chowdhury
                <a href="https://github.com/CodingDos">
                <img src={Steve} className='creatorListItem'></img>
                </a>  Steven Villacis
              </div>
            </div>

        </div>
        
    </div>
  )
}

export default Landing