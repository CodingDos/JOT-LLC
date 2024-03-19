import { getCounters } from "../services/counter.js";
import { getCategory } from "../services/categories.js";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);
import { Pie } from "react-chartjs-2";
import "../styles/Data.css";

function CounterData() {
  const { categoryID } = useParams(); // Make sure this matches the route parameter name
  const [counters, setCounters] = useState(null);
  const [category, setCategory] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      if (categoryID) {
        const allCounters = await getCounters(categoryID);
        const oneCategory = await getCategory(categoryID);
        setCategory(oneCategory.title);
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
                "rgba(141, 24, 40, 0.9)",
                "rgba(35, 239, 252, 0.2)",
                "rgba(65, 110, 209, 0.2)",
                "rgba(253, 71, 34, 0.8)",
                "rgba(177, 187, 160, 0.8)",
                // Add more colors for each slice as needed
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
    <div className="dataContainer">
      <div className="chart-container">
        {/* <div> */}
        <h1 className="dataTitle">
          {category}
          <span> Pie Chart</span>
        </h1>
        {counters?.labels?.length > 0 && (
          <Pie className="dataPieChart" data={counters} />
        )}
        {/* </div> */}
      </div>
    </div>
  );
}

export default CounterData;
