import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Counter from "../components/Counter.jsx";
import { getCounters, getCategory } from "../services/counter.js";

function Counters() {
  let { categoryId } = useParams();
  const [category, setCategory] = useState("");
  const [counters, setCounters] = useState([]);

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
  }, []); // Ensure categoryId is in the dependency array

  return (
    <div>
      <h1>{category.title}</h1>
      {counters.map((counter) => (
        <Counter counter={counter} key={counter._id} />
      ))}
    </div>
  );
}

export default Counters;
