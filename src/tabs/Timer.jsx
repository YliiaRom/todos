import { useEffect, useRef, useState } from 'react';

export default function Timer() {
  const [timer, setTimer] = useState(0);
  const timerIntervalRef = useRef(null);

  const start = () => {
    if (!timerIntervalRef.current) {
      timerIntervalRef.current = setInterval(() => {
        setTimer(timer => timer + 1);
      }, 500);
    }
  };
  const stop = () => {
    clearInterval(timerIntervalRef.current);
    timerIntervalRef.current = null;
  };
  useEffect(() => {
    return clearInterval(timerIntervalRef.current);
  }, []);
  return (
    <>
      <p>{timer}</p>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
    </>
  );
}
//28.08
//  const startTimer = () => {
//    timerRef.current = setInterval(() => {
//      setTimer(timer => timer + 1);
//    }, 1000);
//  };
//обьяснить почему id нельзя сделать= обновляется какждый раз при изменении state
// const valueRef = useRef(0);
// const changeValueRef = () => {
//   valueRef.current = +1;
// };

// import { useState, useEffect, useRef } from 'react';
// const [timer, setTimer] = useState(0);
// const timerRef = useRef();
// let timerId;

// const valueRef = useRef();
// const changeValueRef = () => {
//   valueRef.current += 1;
//   console.log(valueRef);
// };

// const startTimer = () => {
//   timerRef.current = setInterval(() => {
//     setTimer(timer => timer + 1);
//   }, 1000);
// };
// const stopTimer = () => {
//   clearInterval(timerRef.current);
// };
//  <p>{timer}</p>
//     <button onClick={startTimer}>Start</button>
//     <button onClick={stopTimer}>Stop</button>
//     <button onClick={changeValueRef}>
//       Value Ref width Click {valueRef.current}
//     </button>
