import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import Category from "../components/Category";
import { getCategories, createCategory } from "../services/categories";
import "../styles/Category.css";

function Categories() {
  const [categories, setCategories] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    // Fetch categories when the component mounts
    fetchCategories();
  }, [toggle]);

  async function fetchCategories() {
    try {
      const allCategories = await getCategories();
      setCategories(allCategories);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  }

  const handleCreateCategory = async () => {
    try {
      await createCategory({ title });
      // Fetch categories again after adding a new category
      await fetchCategories();
      setShowModal(false);
      setTitle("");
      setToggle(true);
      window.location.reload();
    } catch (error) {
      console.error("Error creating category:", error);
    }
  };

  const handleClose = () => {
    setShowModal(false);
    window.location.reload();
  };

  return (
    <div className="categoryContainer">
      <h2 className="categoryTitle">SELECT YOUR CATEGORY</h2>
      <p className="categoryInstruct">
        What aspect of life would you like to log?
      </p>

      <div className="createContainer">
        <Button
          className="createCategoryButton"
          variant="primary"
          onClick={() => setShowModal(true)}
        >
          Create Category
        </Button>
      </div>
      {/* TO DISPLAY THE CATEGORIES ON THE PAGE */}
      <div className="userCategories">
        {categories.map((category) => (
          <Category category={category} key={category._id} />
        ))}
      </div>

      {/* FUNCTION FOR CREATE CATEGORY - BUTTON AND MODAL OPENING FORM */}

      <Modal show={showModal} onHide={handleClose}>
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
