import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCounters, getCategory } from "../services/counterService.js";

function Counter() {
  let { categoryId } = useParams();
  const [category, setCategory] = useState(null);
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
    fetchData();
  }, [categoryId]);

  return (
    <div>
      <h1>Welcome </h1>
    </div>
  );
}

export default Counter;
