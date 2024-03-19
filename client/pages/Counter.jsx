import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { Modal, Button } from "react-bootstrap";
import Counter from "../components/Counter.jsx";
import { getCounters, createCounter, addCount } from "../services/counter.js";
import { getCategory } from "../services/categories.js";
import "../styles/Counter.css";

function Counters() {
  const pastelColors = [
    "#FFC7EA",
    "#FF7ED4",
    "#ffffba",
    "#FFBE98",
    "#FC6736",
    "#B06161",
    "#525CEB",
    "#F8BDEB",
    "#219C90",
    "#A8A196",
    "#F7D060",
    "#E493B3",
  ];

  let { categoryId } = useParams();

  //setting state for category
  const [category, setCategory] = useState("");

  //setting state for counter
  const [counters, setCounters] = useState([]);
  const [newCounter, setNewCounter] = useState({
    title: "",
    count: 1,
    notes: "",
  });

  const [showModal, setShowModal] = useState(false);
  const [toggle, setToggle] = useState(false);

  let navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoryData = await getCategory(categoryId);
        setCategory(categoryData);
        const countersData = await getCounters(categoryId);
        setCounters(countersData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (categoryId) {
      fetchData();
    }
  }, [categoryId, toggle]); // Ensure categoryId is in the dependency array

  const handleCreateCounter = async (e) => {
    e.preventDefault();
    try {
      const createdCounter = await createCounter(categoryId, newCounter);
      setCounters((prevCounters) => [...prevCounters, createdCounter]);
      setShowModal(false); // Close the modal after submission
      window.location.reload();
    } catch (error) {
      console.error("Error creating counter:", error);
    }
  };

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setNewCounter((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleIncrement = async (counterId) => {
    console.log("I got clicked");
    await addCount(counterId);
    setToggle((prev) => !prev);
  };

  const handleClose = () => {
    setShowModal(false);
    window.location.reload();
  };

  return (
    <div className="counterContainer">
      <h1 className="counterCategoryTitle">{category.title}</h1>
      <div className="counterComponentContainer">
        {counters.map((counter, index) => (
          <Counter
            counter={counter}
            handleIncrement={handleIncrement}
            key={counter._id}
            backgroundColor={pastelColors[index % pastelColors.length]} // Cycle through colors
          />
        ))}
      </div>

      <Button
        className="counterAddButton"
        variant="primary"
        onClick={() => setShowModal(true)}
      >
        Create Counter
      </Button>

      <Button
        className=" counterPieChart"
        onClick={() => navigate(`/data-page/${categoryId}`)}
      >
        View Data
      </Button>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add A Counter</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleCreateCounter}>
            <Form.Group className="mb-3">
              <Form.Label>Sub Category:</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={newCounter.title}
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Notes</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="notes"
                value={newCounter.notes}
                onChange={handleChange}
              />
            </Form.Group>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowModal(false)}>
                Close
              </Button>
              <Button variant="primary" type="submit">
                Add
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Counters;
