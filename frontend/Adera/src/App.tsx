import "./App.css";
import Survey from "./components/homepage/Survey";
import About from "./components/homepage/About";
import Header from "./components/homepage/Header";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import ParticlesComponent from "./components/homepage/ParticlesComponent";

function App() {
  const [surveyVisible, setSurveyVisible] = useState(false);
  const handleClick = () => {
    setSurveyVisible(!surveyVisible);
  };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div>
        <Header setMenu={setMobileMenuOpen} mobileMenuOpen={mobileMenuOpen} />
        {surveyVisible ? (
          <Survey removeSurvey={handleClick} />
        ) : (
          <About startSurvey={handleClick} />
        )}
        <ParticlesComponent id="tsparticles" />
      </div>
    </>
  );
}

export default App;
