import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import { editCategory, deleteCategory } from '../services/categories';

function Category({ category }) {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState({
    title: ""
  });
  const [toggle, setToggle] = useState(false);

  const handleEditClick = async (e) => {
    e.preventDefault()
    console.log(category._id)
    console.log(title)


    await editCategory(category._id, title)
    setShowModal(false); // Close modal after editing
    setToggle(true)
    // window.location.reload();
    
  };

  const handleChange = (e) => {
    setTitle(prev => ({
      title: e.target.value
    }))
  };


  const handleDelete = async () => {
    const userConfirmed = window.confirm("Are you sure you want to delete this category?");
    if (userConfirmed) {
      await deleteCategory(category._id);
      window.location.reload();
      navigate("/category");
    } else {
      console.log("Deletion cancelled by user");
    }
  };



  return (
    <div 
    >
      <div className='cloudContent'>
      <Link className='categoryName' to={`/counters/${category._id}`}>
        <h4>{category.title}</h4>
      </Link>
      <Button className='editButton' variant="primary" onClick={() => setShowModal(true)}>
        Edit
      </Button>
      <button className='deleteButton' onClick={handleDelete}>Delete</button>
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label htmlFor="title">Category Title:</label>
          <input
            type="text"
            id="title"
            value={title.title}
            onChange={handleChange} // Call handleChange to update title state
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEditClick}>
            Edit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Category;
