import { getCounters } from "../services/counter.js";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Pie } from 'react-chartjs-2';

function CounterData() {
  const { categoryID } = useParams(); // Make sure this matches the route parameter name
  const [counters, setCounters] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (categoryID) {
        const allCounters = await getCounters(categoryID);

        let title = allCounters.map(char => char.title)
        let count = allCounter.map(char => char.count)

        setCounters({
          title: title, 
          dataSet: [
            {
              count: count,
              data: data,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                // Add more colors for each slice as needed
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                // Add more border colors corresponding to backgroundColor
              ],
              borderWidth: 1,
            }
          ]
        })
      }
    };
    fetchData();
  }, [categoryID]);

  return (
    <div>
      <h1>Pie Chart</h1>
      {counters.title && <Pie data={counters} />}
    </div>
  );
}

export default CounterData;
