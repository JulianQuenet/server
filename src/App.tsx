import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState<String>("");
  const [showMessage, setShowMessage] = useState<Boolean>(false);
  const [count, setCount] = useState<number>(1);
  const URL = "http://localhost:5000/api/data";

  useEffect(() => {
    const getData = async () => {
      try {
        setShowMessage(false);
        const index = "message" + count;
        const response = await fetch(`${URL}`);
        const data: any = await response.json();
        setMessage(data[index]);
        if (!response) {
          throw new Error(`${response} returned null`);
        }
      } catch (error) {
        alert(error);
      } finally {
        setShowMessage(true);
      }
    };

    getData();
  }, [count]);

  function handleClick() {
    setCount((count) => count + 1);
  }

  return (
    <>
      <div className="data">
        {showMessage && <div className="message">{message}</div>}
      </div>
      {count >= 13 && (
        <div>
          {count > 6 && (
            <button
              className="button"
              onClick={handleClick}
              style={{ marginRight: "10px" }}
            >
              {"<-"}
            </button>
          )}
          <button onClick={handleClick}>{"->"}</button>
        </div>
      )}
    </>
  );
}

export default App;
