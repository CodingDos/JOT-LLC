import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Category from '../components/Category.jsx';
import { getCategories } from "../services/categories.js";


function Categories() {

const [categories, setCategories] = useState([])


async function fetchCategories() {
  const allCategories = await getCategories()
  setCategories(allCategories)
  console.log(categories)
}

useEffect(() => {
  fetchCategories()
}, [])

  return (
    <div className='categoryContainer'>
      <h2 className='categoryTitle'>SELECT YOUR CATEGORY</h2>
      
      <div className='userCategories'>
        {
          categories.map((category)=>(
            <Category category={category} key={category._id}/>
          ))
        }
      </div>

    </div>
  )
}

export default Categories