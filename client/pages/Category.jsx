// import React from 'react'
// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import Category from '../components/Category.jsx';
// import { getCategories, createCategory } from "../services/categories.js";
// import { Modal, Button } from 'react-bootstrap';



// function Categories() {

// const [categories, setCategories] = useState([])
// const [showModal, setShowModal] = useState(false);
// const [title, setTitle] = useState('');


// async function fetchCategories() {
//   const allCategories = await getCategories()
//   setCategories(allCategories)
// }

// useEffect(() => {
//   fetchCategories()
// }, [])


// const handleCreateCategory = async () => {
//   try {
//     // Call the createCategory function with the title
//     await createCategory({ title });
//     // Fetch categories again to update the list
//     await fetchCategories();
//     // Close the modal
//     setShowModal(false);
//     // Reset the title
//     setTitle('');
//   } catch (error) {
//     console.error("Error creating category:", error);
//   }
// };

//   return (
//     <div className='categoryContainer'>
//       <h2 className='categoryTitle'>SELECT YOUR CATEGORY</h2>
    
//       <div className='userCategories'>
//         {
//           categories.map((category)=>(
//             <Category category={category} key={category._id}/>
//           ))
//         }
//       </div>

//       <Button variant="primary" onClick={() => setShowModal(true)}>+</Button>

//       <Modal show={showModal} onHide={() => setShowModal(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title>Add Category</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <label htmlFor="title">Category Title:</label>
//           <input
//             type="text"
//             id="title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//           />
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={() => setShowModal(false)}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleCreateCategory}>
//             Add
//           </Button>
//         </Modal.Footer>
//       </Modal>
      
//     </div>
//   )
// }

// export default Categories


import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Category from '../components/Category';
import { getCategories, createCategory } from '../services/categories';

function Categories() {
  const [categories, setCategories] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState('');

  useEffect(() => {
    // Fetch categories when the component mounts
    fetchCategories();
  }, []);

  async function fetchCategories() {
    try {
      const allCategories = await getCategories();
      setCategories(allCategories);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  }

  const handleCreateCategory = async () => {
    try {
      await createCategory({ title });
      // Fetch categories again after adding a new category
      await fetchCategories();
      setShowModal(false);
      setTitle('');
      window.location.reload();
    } catch (error) {
      console.error('Error creating category:', error);
    }
  };

  return (
    <div className="categoryContainer">
      <h2 className="categoryTitle">SELECT YOUR CATEGORY</h2>

      <div className="userCategories">
        {categories.map((category) => (
          <Category category={category} key={category._id} />
        ))}
      </div>

      <Button variant="primary" onClick={() => setShowModal(true)}>
        +
      </Button>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label htmlFor="title">Category Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCreateCategory}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Categories;
