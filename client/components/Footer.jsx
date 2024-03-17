import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div>
        <Link to="/learn-more">Learn more about the people behind JOT</Link>
        <p>© 2024 JOT</p>
      </div>
    </footer>
  )
}

export default Footer

//MAKE SURE TO PUT THIS COMPONENT INTO THE APP JS 

