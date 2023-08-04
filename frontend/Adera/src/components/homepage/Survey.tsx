import Form from "../forms/Form";
import Graph from "../graph/Graph";
import Error from "../forms/Error";
import { useEffect, useState } from "react";

interface Props {
  removeSurvey: () => void;
}
async function loadData() {
  const response = await fetch("http://localhost:3000/api/v1/survey");
  const results = await response.json();
  return results.all_surveys;
}
function Survey({ removeSurvey }: Props) {
  const [graphVisible, setGraphVisible] = useState(false);
  const [formVisible, setFormVisible] = useState(true);
  const [errorVisible, setErrorVisible] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    loadData().then((results) => {
      setData(results);
    });
  }, []);

  const updateError = (error: any) => {
    setError(error.message);
    console.log("Error", error.body)
  };

  return (
    <>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-4">
          {formVisible && (
            <Form
              setGraphVisible={setGraphVisible}
              setFormVisible={setFormVisible}
              graphVisible={graphVisible}
              removeSurvey={removeSurvey}
              updateError={updateError}
              setErrorVisible={setErrorVisible}
            />
          )}
          {data && graphVisible && (
            <Graph data={data} removeSurvey={removeSurvey} />
          )}
          {errorVisible && (
            <Error
              err={error}
              removeSurvey={removeSurvey}
              setErrorVisible={setErrorVisible}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default Survey;
