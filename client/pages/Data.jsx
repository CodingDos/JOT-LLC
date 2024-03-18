import { getCounters } from "../services/counter.js";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function CounterData() {
  const { categoryID } = useParams(); // Make sure this matches the route parameter name
  const [counters, setCounters] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (categoryID) {
        // Check if categoryID is not undefined
        const allCounters = await getCounters(categoryID);
        setCounters(allCounters);
      }
    };
    fetchData();
  }, [categoryID]);

  console.log("Category ID:", categoryID); // For debugging
  console.log("Counters:", counters); // For debugging

  return (
    <div>
      <h1>Data Page</h1>
    </div>
  );
}

export default CounterData;
