import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCounters } from "../services/counterService";

function Counter() {
  let { categoryId } = useParams();
  const [counters, setCounters] = useState([])

  useEffect(() => {
    const fetchCounters = async () => {
      const fetchedCounters = await getCounters(categoryId);
      setCounters(fetchedCounters);
    };

    fetchCounters();
  }, [categoryId]); // Re-fetch when categoryId changes
}


  return (
    <div>
      <h1>Welcome </h1>
    </div>
  ) 
}


export default Counter;
