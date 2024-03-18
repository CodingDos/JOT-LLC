import { getCounters } from "../services/counter.js";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);
import { Pie } from "react-chartjs-2";

function CounterData() {
  const { categoryID } = useParams(); // Make sure this matches the route parameter name
  const [counters, setCounters] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (categoryID) {
        const allCounters = await getCounters(categoryID);

        let labels = allCounters?.map((char) => char?.title);
        let data = allCounters?.map((char) => char?.count);

        setCounters({
          labels: labels,
          datasets: [
            {
              label: "Count: ",
              data: data,
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
              ],
              borderWidth: 1,
            },
          ],
        });
      }
    };
    fetchData();
  }, [categoryID]);

  return (
    <div>
      <h1>Pie Chart</h1>
      {counters?.labels?.length > 0 && <Pie data={counters} />}
    </div>
  );
}

export default CounterData;
