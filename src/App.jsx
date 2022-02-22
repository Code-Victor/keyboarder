import { useEffect, useRef, useState } from "react";
import "./App.css";
import Keyboard from "./keyboard";

function insert(str, index, value) {
  return str.substr(0, index) + value + str.substr(index);
}
const data =
  "The Lord is My Shepard I Shall Not Want";
function App() {
  const [index, setIndex] = useState(0);//gives the index of the cursor
  const [error, setError] = useState(false);
  const [noError, setNoError] = useState(0);//gives the number of typos made
  const [keyPressed,setKeyPressed]=useState('null')
  
  const [time, setTime] = useState(0);
  const [countdown, setCountdown] = useState(5);
  const [startCountDown, setStartCountDown] = useState(false);
  const inputRef = useRef(null); //for the input field
  const startRef = useRef(null); // for the countdown div
  const slashInserted = insert(data, index, "|").split("|");
  const greyText = slashInserted[0];
  const greenText = slashInserted[1];
  const done = index === data.length; // checks if the user is done typing
  const characterNo = data.split(" ").join("").length;
  const wordNo=data.split(" ").length;
  const currentCharacter=data[index]
  function handleStart() {
    
    setStartCountDown((countdown) => !countdown);
    setTimeout(() => {
      startRef.current.style.display = "none";
    }, 9000);
  }
  function getAccuracy() {
    const percentageError = (noError / characterNo) * 100;
    const accuracy = 100 - percentageError;
    return accuracy.toFixed(1);
  }
  function getCpm() {
    const minutesUsed = time / 60;
    const cpm = characterNo / minutesUsed;
    return cpm.toFixed(1);
  }
  function getWpm() {
    const minutesUsed = time / 60;
    const wpm = wordNo / minutesUsed;
    return wpm.toFixed(1);
  }
  function handleKeyPress(e) {
    setKeyPressed(e.key)
    console.log("pressed");
    if (e.key === currentCharacter) {
      setError(false);
      setIndex(index + 1);
    } else {
      setError(true);
      setNoError((error) => error + 1);
    }
  }
  useEffect(() => {
    if (!done && countdown === 0) {
      console.log("executed");
      const timer = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [done, countdown]);
  useEffect(() => {
    if (startCountDown) {
      console.log("executed2");
      if (countdown > 0) {
        const timer = setInterval(() => {
          setCountdown((time) => time - 1);
        }, 1000);
        return () => clearInterval(timer);
      }
      if(countdown===0){
        inputRef.current.focus();
      }
    }
  }, [startCountDown, countdown]);
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="animated-red">{noError}</h1>
        <h1>total time: {time}</h1>

        <button onClick={() => handleStart()}>Start</button>
        {startCountDown && (
          <div ref={startRef}>
            {countdown === 0 ? <h1>Start</h1> : countdown}
          </div>
        )}
        {done && (
          <div>
            <h1>your speed is {getWpm()} WPM</h1>
            <h1>your accuracy is {getAccuracy()}%</h1>
          </div>
        )}
        <p>
          <span className="greyd-text">{greyText}</span>
          <span className={error ? "animated-red" : ""}>|</span>
          <span>{greenText}</span>
        </p>
        <input
          type="text"
          disabled={!(countdown===0)}
          
          onKeyPress={(e) => {
            handleKeyPress(e);
          }}
          ref={inputRef}
        />
        <Keyboard keyPressed={[keyPressed,keyPressed===data[index-1]]}/>
      </header>
    </div>
  );
}

export default App;
