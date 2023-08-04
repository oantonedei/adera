import { useEffect } from "react";

interface Props {
  removeSurvey: () => void;
  err: string;
  setErrorVisible: (visible: boolean) => void;
}
export default function Error({ removeSurvey, err, setErrorVisible }: Props) {
  function removeError() {
    setErrorVisible(false);
    removeSurvey();
  }
  useEffect(() => {
    localStorage.removeItem("formValues");
  }, []);
  return (
    <>
      <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          {/* <p className="text-base font-semibold text-indigo-600">409</p> */}
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            You are not allowed to take this survey again.
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Your email address has already been used to take this survey.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={removeError}
            >
              Go back home
            </a>
          </div>
        </div>
      </main>
      {/* <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                   {err} 
                  User already exists
        </h1>

        <div className="pt-5">
          <a
            href="#"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={removeError}
          >
            Go back to Home
          </a>
        </div>
      </div > */}
    </>
  );
}
