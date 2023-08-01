import "./App.css";
import Survey from "./components/Survey";
import About from "./components/About";
import Header from "./components/Header";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import ParticlesComponent from "./components/ParticlesComponent";

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
          <Survey />
        ) : (
          <About status={surveyVisible} startSurvey={handleClick} />
        )}
      <ParticlesComponent id="tsparticles" />
      </div>
    </>
  );
}

export default App;
