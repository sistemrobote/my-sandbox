// import { useEffect, useState } from "react";
import "./App.css";
import { Login } from "./components/StravaConnect/Login";


const App = () => {

  // const [, setIsloading] = useState(true);
  // useEffect(() => {
  //   const timeout = setTimeout(() => { setIsloading(false) }, 2000);
  //   return () => clearTimeout(timeout)
  // }, [])


  return (
    <div>
      <Login />
    </div>
  );
};

export default App;
