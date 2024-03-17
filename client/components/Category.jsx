import React from 'react'
import { Link } from 'react-router-dom';

function Category({category}) {
  return (
    <div>
      <Link className='categoryCloud' to={`/counters/${category._id}`}></Link>


    </div>
    // <Link className='characterBox' to={`/characters/${character._id}`}>
    //     <h4>{character.character}</h4>
    //     <img className="character-images" src={character.image} alt={character.character}/>
    // </Link>
  )
}

export default Category