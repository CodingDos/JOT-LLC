import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCounters, getCategory } from "../services/counter.js";

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
      <h1> {category.title}</h1>
      {counters.map((counter) => {})}
      {console.log(counters)}
    </div>
  );
}

export default Counter;
