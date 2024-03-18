import React from 'react'
import { Link } from 'react-router-dom';

function Category({category}) {
  return (
    <div>
      <Link className='categoryCloud' to={`/counters/${category._id}`}>
      <h4>{category.title}</h4>
      </Link>

    </div>

  )
}

export default Category