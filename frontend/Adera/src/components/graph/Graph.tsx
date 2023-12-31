import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import Socials from "./Socials";
import { useEffect, useState } from "react";

ChartJS.register(ArcElement, Tooltip, Legend);

interface Props {
  data: any[];
  removeSurvey: () => void;
}
const data = {
  labels: ["Likely To Use", "Not Likely To Use"],
  datasets: [
    {
      label: "% of Interest",
      data: [0, 0],
      backgroundColor: ["#4007ab", "#ed2d50"],
      borderColor: ["#400790", "#ed2d90"],
      borderWidth: 4,
    },
  ],
};
const countryData = {
  labels: ["United Kingdom", "United States", "Canada"],
  datasets: [
    {
      label: "% of Interest",
      data: [0, 0, 0],
      backgroundColor: ["#0e9e18", "#0e379e", "#c70c12"],
      borderColor: ["#0e9e18", "#0e379e", "#c70c12"],
      borderWidth: 4,
    },
  ],
};

const getCountryGraphData = (_data: any) => {
  let count = [0, 0, 0];
  _data.forEach((survey: any) => {
    switch (survey.country) {
      case "United States":
        count[1]++;
        break;
      case "United Kingdom":
        count[0]++;
        break;
      case "Canada":
        count[2]++;
        break;

      default:
        break;
    }
  });
  count[1] = (count[1] / _data.length) * 100;
  count[0] = (count[0] / _data.length) * 100;
  count[2] = (count[2] / _data.length) * 100;
  const countryReturnData = {
    ...countryData,
    datasets: [
      {
        ...countryData.datasets[0],
        data: count,
      },
    ],
  };
  return countryReturnData;
};

const getGeneralGraphData = (_data: any) => {
  let totalPoints = 0;
  _data.forEach((survey: any) => {
    totalPoints += (survey.points / 300) * 100;
  });
  let overallPoints = totalPoints / _data.length;
  const generalData = {
    ...data,
    datasets: [
      {
        ...data.datasets[0],
        data: [overallPoints, 100 - overallPoints],
      },
    ],
  };
  return generalData;
};

function Graph({ data, removeSurvey }: Props) {
  const [countryGraph, setCountryGraph] = useState(getCountryGraphData(data));
  const [general, setGeneral] = useState(getGeneralGraphData(data));
  useEffect(() => {
    localStorage.removeItem("formValues");
  }, []);

  return (
    <>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Adera Survey
        </h1>
        <div className="mt-10 flex items-center justify-center gap-x-6 responsive-chart">
          <div className="chart">
            <Doughnut data={countryGraph} />
            <h3 className="text-1xl font-bold tracking-tight text-gray-900 sm:text-2xl">
              Your Response
            </h3>
          </div>
          &nbsp;
          <div className="chart">
            <Doughnut data={general} />
            <h3 className="text-1xl font-bold tracking-tight text-gray-900 sm:text-2xl">
              Overall Responses
            </h3>
          </div>
        </div>

        <div className="pt-5">
          <a
            href="#"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={removeSurvey}
          >
            Go back to Home
          </a>
        </div>

        <Socials />
      </div>
    </>
  );
}

export default Graph;
