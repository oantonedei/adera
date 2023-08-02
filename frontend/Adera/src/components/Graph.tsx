import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import Socials from "./Socials";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Interested", "Uninterested"],
  datasets: [
    {
      label: "# of Responses",
      data: [83, 17],
      backgroundColor: ["#4007ab", "#ed2d50"],
      borderColor: ["#400790", "#ed2d90"],
      borderWidth: 4,
    },
  ],
};

function Graph() {
  return (
    <>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Adera Survey
        </h1>
        <div className="mt-10 flex items-center justify-center gap-x-6 responsive-chart">
          <div className="chart">
            <Doughnut data={data} />
            <h3 className="text-1xl font-bold tracking-tight text-gray-900 sm:text-2xl">
              Your Response
            </h3>
          </div>
          &nbsp;
          <div className="chart">
            <Doughnut data={data} />
            <h3 className="text-1xl font-bold tracking-tight text-gray-900 sm:text-2xl">
              Overall Responses
            </h3>
          </div>
        </div>

        <Socials />
      </div>
    </>
  );
}

export default Graph;
