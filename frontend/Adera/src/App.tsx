import "./App.css";
import Survey from "./components/Survey";
import About from "./components/About";
import Header from "./components/Header";
import { useState } from "react";
import { Dialog } from "@headlessui/react";

function App() {
  const [surveyVisible, setSurveyVisible] = useState(false);
  const handleClick = () => {
    setSurveyVisible(!surveyVisible);
  };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-white">
        <Header setMenu={setMobileMenuOpen} mobileMenuOpen={mobileMenuOpen} />
        {surveyVisible ? (
          <Survey />
        ) : (
          <About status={surveyVisible} startSurvey={handleClick} />
        )}
      </div>
    </>
  );
}

export default App;
