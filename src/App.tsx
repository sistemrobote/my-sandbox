import { useState } from "react";
import "./App.css";
import { Banner } from "./Banner";

const App = () => {
  const [showBanner, setShowBanner] = useState(false);
  const handleClick = () => setShowBanner((prev) => !prev);
  return (
    <>
      {/* <div className="container">
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
      </div> */}
      <span>
        <button onClick={handleClick}>Click to open banner</button>
      </span>
      {showBanner && <Banner />}
    </>
  );
};

export default App;
