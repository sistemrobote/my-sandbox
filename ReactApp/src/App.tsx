// import { useEffect, useState } from "react";
import "./App.css";
import TshirtDesign from "./components/TShirtDesign/TshirtDesign";


const App = () => {

  // const [, setIsloading] = useState(true);
  // useEffect(() => {
  //   const timeout = setTimeout(() => { setIsloading(false) }, 2000);
  //   return () => clearTimeout(timeout)
  // }, [])


  return (
    <div>
      <TshirtDesign />
    </div>
  );
};

export default App;
