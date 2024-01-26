import { useState} from "react";
import { Intro } from "./Intro";
import "./App.css";
import { Body } from "./Body";

function App() {
  const [count, setCount] = useState<number>(1)
 
  return (
    <>
    { count !=11 && <Intro countSetter={setCount}/>}
    <Body/>
    </>
  );
}

export default App;
