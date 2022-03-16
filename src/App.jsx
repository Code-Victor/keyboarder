import { Result } from "./result";
import { useEffect, useRef, useState } from "react";
import "./App.css";
import Keyboard from "./keyboard";
import Navbar from "./navbar";
import Hey from "../hey";


function insert(str, index, value) {
  return str.substr(0, index) + value + str.substr(index);
}

const datum =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis deleniti ea odio a sunt dolore.";
function App() {
  const [data, setData] = useState(datum);
  const [index, setIndex] = useState(0); //gives the index of the cursor
  const [error, setError] = useState(false);
  const [focused, setFocused] = useState(false);
  const [noError, setNoError] = useState(0); //gives the number of typos made
  const [keyPressed, setKeyPressed] = useState("null");

  const [time, setTime] = useState(0);
  const [countdown, setCountdown] = useState(5);
  const [startCountDown, setStartCountDown] = useState(false);
  const inputRef = useRef(null); //for the input field
  const startRef = useRef(null); // for the countdown div
  const blurRef = useRef(null); // for the countdown div
  const startButtonRef = useRef(null); // for the startButton
  const slashInserted = insert(data, index, "|").split("|");
  const greyText = slashInserted[0];
  const greenText = slashInserted[1];
  const done = index === data.length; // checks if the user is done typing
  const characterNo = data.split(" ").join("").length;
  const wordNo = data.split(" ").length;
  const currentCharacter = data[index];
  function onFocus() {
    setFocused(true);
  }

  function onBlur() {
    setFocused(false);
    blurRef.current.style.display = "block";
  }
  function handleStart() {
    inputRef.current.focus();
    setFocused(true);
    setStartCountDown((countdown) => !countdown);
    startButtonRef.current.style.display = "none";
    setTimeout(() => {
      startRef.current.style.display = "none";
    }, 9000);
  }
  function restart() {
    setIndex(0);
    setTime(0);
    setNoError(0);
    startButtonRef.current.style.display = "block";
    setKeyPressed("null");
    setStartCountDown(false);
    setCountdown(5);
    setFocused(false);
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
  async function getQuotes() {
    const response = await fetch(
      "https://api.quotable.io/random?maxLength=50?minLength=20"
    );
    const data = await response.json();
    setData(data.content + " " + data.author);
    restart();
  }
  function handleKeyPress(e) {
    setKeyPressed(e.key);
    if (e.key === currentCharacter) {
      setError(false);
      setIndex(index + 1);
    } else {
      setError(true);
      setNoError((error) => error + 1);
    }
  }
  useEffect(() => {
    if (!done && countdown === 0 && focused) {
      const timer = setInterval(() => {
        setTime((time) => time + 0.1);
      }, 100);
      return () => clearInterval(timer);
    }
  }, [done, countdown, focused]);
  useEffect(() => {
    if (startCountDown) {
      if (countdown > 0) {
        const timer = setInterval(() => {
          setCountdown((time) => time - 1);
        }, 1000);
        return () => clearInterval(timer);
      }
      if (countdown === 0) {
        inputRef.current.focus();
        setFocused(true);
      }
    }
  }, [startCountDown, countdown]);

  function Typeface() {
    let className = "";
    error ? (className += "animated-red") : (className += "");
    focused && !done ? (className += " blink") : (className += "");
    let finished = done ? "none" : "";
    return (
      <div
        onClick={() => inputRef.current.focus()}
        className={"type-text " + finished}
      >
        <div
          className={!focused ? "blurred" : "none"}
          ref={blurRef}
          onClick={() => {
            inputRef.current.focus();
            setFocused(true);
          }}
        >
          <p>click to activate</p>
        </div>
        <p>
          <span className="greyd-text">{greyText}</span>
          <span className={className}>|</span>
          <span>{greenText}</span>
        </p>
      </div>
    );
  }

  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <Typeface />
        <Result
          noError={noError}
          time={time}
          handleStart={handleStart}
          startButtonRef={startButtonRef}
          startCountDown={startCountDown}
          startRef={startRef}
          countdown={countdown}
          done={done}
          getWpm={getWpm}
          getAccuracy={getAccuracy}
        />
        <input
          type="text"
          disabled={!(countdown === 0) || done}
          onBlur={onBlur}
          onFocus={onFocus}
          onKeyPress={(e) => {
            handleKeyPress(e);
          }}
          className={done ? "input-field none" : "input-field"}
          ref={inputRef}
        />
        <div className="flex">
          <button onClick={getQuotes}>generate texts</button>
          <button onClick={restart}>restart</button>
        </div>
        <Keyboard
          keyPressed={[keyPressed, keyPressed === data[index - 1]]}
          display={done}
        />
      </header>
      <Hey />
    </div>
  );
}

export default App;
