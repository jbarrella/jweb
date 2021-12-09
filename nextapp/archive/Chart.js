import { React, useState, useEffect } from "react";
import { Bar, Chart } from "react-chartjs-2";
// import "chartjs-plugin-zoom";
import * as Zoom from "chartjs-plugin-zoom";
import Hammer from "hammerjs";

export default function SUPRChart({ chartRange }) {
  // Chart.register(zoomPlugin);
  const [chartData, setChartData] = useState({});
  useEffect(() => {
    fetch("http://localhost:3001/api/nftart")
      .then(async (response) => {
        const jsonData = await response.json();
        const sortedJson = Object.keys(jsonData[0].days)
          .sort()
          .reduce((obj, key) => {
            obj[key] = jsonData[0].days[key];
            return obj;
          }, {});

        // adjust date range
        if (chartRange != "All") {
          let today = new Date(Date.now());
          today = new Date(today.toISOString().split("T")[0]);
          let oldest = today;
          if (chartRange.search("Y") != -1) {
            const nYears = chartRange.split("Y")[0];
            oldest.setUTCFullYear(today.getUTCFullYear() - nYears);
          } else if (chartRange.search("M") != -1) {
            const nMonths = chartRange.split("M")[0];
            oldest.setUTCMonth(today.getUTCMonth() - nMonths);
          }
          for (const d of Object.keys(sortedJson)) {
            if (new Date(d) < oldest) {
              delete sortedJson[d];
            }
          }
        }

        const labels = Object.keys(sortedJson);
        const counts = Object.values(sortedJson);
        setChartData({
          labels: labels,
          datasets: [
            {
              label: "SUPR Txns",
              data: counts,
              borderWidth: 1,
              borderColor: "pink",
              backgroundColor: "pink",
            },
          ],
        });
      })
      .catch((err) => console.log(err));
  }, [chartRange]);
  return <Bar data={chartData}></Bar>;
  // return <>mychart</>;
}
