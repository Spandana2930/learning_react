import React, { useState } from "react";
import "./App.css";
// import ConferenceEvent from "./ConferenceEvent";
import AboutUs from "./AboutUs";
import NavProductList from "./NavProductList";

function App() {
   const [showProductList, setShowProductList] = useState(false);

  const handleGetStarted = () => {
    setShowProductList(true);
  };
   const handleHomeClick = () => {
    setShowProductList(false);
  };

  return (
  <>
    {showProductList ? (
      <NavProductList onHomeClick={handleHomeClick} />
    ) : (
      <>
        <div className="background-image"></div>
        <header className="first_page">
          <div className="main_event">
            <div className="first_page_name_btn">
              <h1 className="budget_heading">Welcome to Paradise Nursery</h1>
              <p className="budget_sentence">Where Green Meets Serenity</p>
              <div className="getstarted_btn">
                <button
                  onClick={handleGetStarted}
                  className="get-started-btn"
                >
                  Get Started
                </button>
              </div>
            </div>
            <div className="aboutus_main">
              <AboutUs />
            </div>
          </div>
        </header>
      </>
    )}
  </>
);

}

export default App;
