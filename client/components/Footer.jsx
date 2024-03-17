import React from 'react'
import { Link } from 'react-router-dom';
import * as footercss from "../styles/Footer.css"

function Footer() {
  return (
    <footer className="rootFooter">
      <div className="footerLink">
        <Link to="/learn-more">Learn more about the people behind JOT</Link>
        <p>© 2024 JOT</p>
      </div>
    </footer>
  )
}

export default Footer

//MAKE SURE TO PUT THIS COMPONENT INTO THE APP JS 

