import React from "react";
export function Result({
  noError,
  time,
  handleStart,
  startButtonRef,
  startCountDown,
  startRef,
  countdown,
  done,
  getWpm,
  getAccuracy,
}) {
  return (
    <>
      {" "}
      <button onClick={handleStart} ref={startButtonRef}>
        Start
      </button>
      {startCountDown && (
        <div ref={startRef} className="count-down">{countdown === 0 ? <h3>Start</h3> : countdown}</div>
      )}
      {done && (
        <div>
          <h1>your speed is {getWpm()} WPM</h1>
          <h1>your accuracy is {getAccuracy()}%</h1>
          <h3 className="animated-red">Number of Errors made: {noError}</h3>
          <h1>total time spent: {time}s</h1>
        </div>
      )}
    </>
  );
}
