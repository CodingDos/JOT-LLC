import { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { editCounter, deleteCounter } from "../services/counter.js";
import Form from "react-bootstrap/Form";

import "../styles/Counter.css";

function Counter({ counter, handleIncrement, backgroundColor }) {
  const navigate = useNavigate();

  const { title, count, notes, _id, categoryId } = counter;
  const [oneCounter, setOneCounter] = useState({
    categoryId,
    title,
    count,
    notes,
    _id,
  });

  const [showModal, setShowModal] = useState(false);

  const [clickTimeout, setClickTimeout] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOneCounter((prev) => ({ ...prev, [name]: value }));
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      const response = await editCounter(_id, oneCounter);
      setShowModal(false);
      window.location.reload();
    } catch (error) {
      console.error("Error editing counter:", error);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteCounter(_id);
      window.location.reload();
      navigate(`/counters/${categoryId}`);
    } catch (error) {
      console.error("Error deleting counter:", error);
    }
  };

  const handleSingleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    window.location.reload();
  };

  const handleClick = () => {
    if (clickTimeout) clearTimeout(clickTimeout);
    setClickTimeout(setTimeout(handleSingleClick, 200)); // Delay for detecting double click
  };

  const handleDoubleClick = () => {
    clearTimeout(clickTimeout);
    handleIncrement(_id);
  };

  useEffect(() => {
    return () => {
      if (clickTimeout) clearTimeout(clickTimeout);
    };
  }, [clickTimeout]);

  return (
    <div>
      <div className="counter" style={{ backgroundColor }}>
        <div className="counterInfo" onClick={handleClick}>
          <h1 className="counterTitle">
            {title.length > 15 ? `${title.substring(0, 15)}...` : title}
          </h1>
        </div>
        <div className="counterCountContainer">
          <p className="counterCount">{count}</p>
        </div>
        <Button className="counterButton" onClick={handleDoubleClick}>
          Add Count
        </Button>
      </div>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Counter</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label>Counter Title:</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={oneCounter.title}
            onChange={handleChange}
          />
          <Form.Label>Notes:</Form.Label>
          <Form.Control
            type="text"
            id="notes"
            name="notes"
            value={oneCounter.notes}
            onChange={handleChange}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleEdit}>
            Edit
          </Button>
          <Button variant="secondary" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Counter;
