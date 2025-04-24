import { useEffect, useState } from "react";
import "./App.css";
import { ImageCarusel } from "./components/ImageCarusel/ImageCarusel";


const App = () => {

  const [, setIsloading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => { setIsloading(false) }, 2000);
    return () => clearTimeout(timeout)
  }, [])


  return (
    <>
      <ImageCarusel url={'https://picsum.photos/v2/list'} />
    </>
  );
};

export default App;
