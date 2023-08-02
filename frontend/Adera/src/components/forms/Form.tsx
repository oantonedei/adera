import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";
import FirstQuestion from "./questions/FirstQuestion";
import SecondQuestion from "./questions/SecondQuestion";
import ThirdQuestion from "./questions/ThirdQuestion";
import FourthQuestion from "./questions/FourthQuestion";
import FifthQuestion from "./questions/FifthQuestion";
import Loader from "./components/Loader";
import ProgressBar from "./components/ProgressBar";

const questions = [
  {
    id: 1,
    name: "FirstQuestion",
    component: FirstQuestion,
  },
  {
    id: 2,
    name: "SecondQuestion",
    component: SecondQuestion,
  },
  {
    id: 3,
    name: "ThirdQuestion",
    component: ThirdQuestion,
  },
  {
    id: 4,
    name: "FourthQuestion",
    component: FourthQuestion,
  },
  {
    id: 5,
    name: "FifthQuestion",
    component: FifthQuestion,
  },
];

interface IFormValues {
  email: string;
  country: string;
  difficulty: string;
  frequency: string;
  recommendation: string;
  designer: string;
}

interface Props {
  setGraphVisible: (visible: boolean) => void;
  graphVisible: boolean;
}

function getFormValues() {
  const storedValues = localStorage.getItem("formValues");
  if (!storedValues)
    return {
      email: "",
      country: "",
      difficulty: "",
      frequency: "",
      recommendation: "",
      designer: "",
    };
  return JSON.parse(storedValues);
}

export default function Form({ setGraphVisible, graphVisible }: Props) {
  const [selected, setSelected] = useState(1);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState<IFormValues>(getFormValues);

  useEffect(() => {
    localStorage.setItem("formValues", JSON.stringify(formValues));
  }, [formValues]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSelected(1);
      setProgress(0);
      setFormValues({
        email: "",
        country: "",
        difficulty: "",
        frequency: "",
        recommendation: "",
        designer: "",
      });
      localStorage.removeItem("formValues");
      setGraphVisible(!graphVisible);
      console.log(formValues);
    }, 500);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Adera Survey Questions
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Help us build a great product with your response.
          </p>
        </div>
        <div className="border-b border-gray-900/10 pb-12">
          {questions.map((question) => {
            return (
              selected == question.id && (
                <question.component
                  key={question.id}
                  formValues={formValues}
                  handleChange={handleChange}
                />
              )
            );
          })}
        </div>
      </div>

      <ProgressBar progress={progress} />

      {/* Navigation */}
      <div className="mt-6 flex items-center justify-end gap-x-6">
        {selected != 1 && (
          <button
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            type="button"
            onClick={() => {
              return setSelected(selected - 1), setProgress(progress - 25);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-left"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
              />
            </svg>
          </button>
        )}
        {selected != 5 && (
          <button
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            type="button"
            onClick={() => {
              return setSelected(selected + 1), setProgress(progress + 25);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg>
          </button>
        )}
        {selected == 5 && (
          <button
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            type="submit"
          >
            {loading ? <Loader /> : "Submit"}
          </button>
        )}
      </div>
      {/* Navigation */}
    </form>
  );
}
