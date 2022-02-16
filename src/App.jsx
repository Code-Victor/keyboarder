import { useEffect, useRef, useState } from "react";
import "./App.css";

function insert(str, index, value) {
  return str.substr(0, index) + value + str.substr(index);
}
function App() {
  const [index, setIndex] = useState(0);
  const [error, setError] = useState(false);
  const [noError, setNoError] = useState(0);
  const [time, setTime] = useState(0);
  const [countdown,setCountdown]=useState(5)
  const [startCountDown,setStartCountDown]=useState(false)
  const inputRef=useRef(null)
  const startRef=useRef(null)
  const data =
    "lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, provident.";
  const slashInserted = insert(data, index, "|").split("|");
  const greyText = slashInserted[0];
  const greenText = slashInserted[1];
  const done = index === data.length;
  function handleStart(){
    inputRef.current.focus();
    setStartCountDown(countdown=>!countdown)
    setTimeout(()=>{
      startRef.current.style.display='none'
    },9000)
  }
  useEffect(() => {
    if (!done && countdown===0) {
      console.log("executed");
      const timer = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
      return () => clearInterval(timer);
    }
   } ,[done,countdown]);
  useEffect(()=>{
    if(startCountDown ){
      console.log("executed2");
      if (countdown>0){const timer = setInterval(() => {
        setCountdown((time) => time - 1);
      }, 1000);
      return () => clearInterval(timer);}
    }
  
  },[startCountDown,countdown])
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="animated-red">{noError}</h1>
        <h1>total time: {time}</h1>
        
     
        <button onClick={()=>handleStart()}>Start</button>
        {
          startCountDown&&(
            <div ref={startRef}>
              {
                countdown===0?<h1>Start</h1>:countdown
                
              }
            </div>
          )
        }
        {done && (
          <div>
            <h1>your speed is {data.split(" ").length / (time / 60)} WPM</h1>
            <h1>your accuracy is {((1-(noError/data.split(" ").join('').length))*100).toFixed(1)}%</h1>
          </div>
        )}
        <p>
          <span className="greyd-text">{greyText}</span>
          <span className={error ? "animated-red" : ""}>|</span>
          <span>{greenText}</span>
        </p>
        <input
          type="text"
          onKeyPress={(e) => {
            console.log("pressed");
            if (e.key === data[index]) {
              setError(false);
              setIndex(index + 1);
            } else {
              setError(true);
              setNoError((error) => error + 1);
            }
          }}
          ref={inputRef}
        />
      </header>
    </div>
  );
}

export default App;
