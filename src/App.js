import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm.js";
import Alert from "./components/Alert";
// import About from "./components/About.js";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // whether dark mode is enabled or not
  // const [redMode, setRedMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#090d20";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  // const redToggleMode = () => {
  //   if (redMode === "light") {
  //     setRedMode("green");
  //     document.body.style.backgroundColor = "#831a1a";
  //     showAlert("Red theme has been enabled", "success");
  //   } else {
  //     setRedMode("light");
  //     document.body.style.backgroundColor = "white";
  //     showAlert("Light mode has been enabled", "success");
  //   }
  // };
  return (
    <>
      {/* <Navbar
        title="TEXT UTILS"
        aboutText="About Us"
        mode={mode}
        toggleMode={toggleMode}
        // redToggleMode={redToggleMode}
      /> */}
      {/* <Router basename="/"> */}
        <Navbar
          title="TEXT UTILS"
          aboutText="About Us"
          mode={mode}
          toggleMode={toggleMode}
          // redToggleMode={redToggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes> */}
            {/* <Route exact path="/about" element={<About mode={mode} />}></Route> */}
            {/* <Route
              // exact
              // path="/"
              // element={ */}
                <TextForm
                  showAlert={showAlert}
                  heading="Enter the text to analyze"
                  mode={mode}
                />
              {/* // } */}
            {/* // ></Route> */}
          {/* </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
