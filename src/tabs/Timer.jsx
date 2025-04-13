import { useRef, useState } from 'react';

export default function Timer() {
  const [timer, setTimer] = useState(0);
  const timerRef = useRef(null);

  const start = () => {
    if (timerRef.current !== null) {
      return;
    }
    timerRef.current = setInterval(() => {
      setTimer(timer => timer + 1);
    }, 500);
  };
  const stop = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };
  return (
    <>
      <p>timer{timer}</p>
      <button onClick={start}>start</button>
      <button onClick={stop}>stop</button>
    </>
  );
}

///---3
// const [timer, setTimer] = useState(0);
// const timerRef = useRef(null);
// const start = () => {
//   if (timerRef.current !== null) {
//     return;
//   }
//   timerRef.current = setInterval(() => {
//     setTimer(timer => timer + 1);
//   }, 500);
// };

// const stop = () => {
//   clearInterval(timerRef.current);
//   timerRef.current = null;
// };

//-- 2.04
// import { useRef, useState } from 'react';

// export default function Timer() {
//   const [timer, setTimer] = useState(0);
//   const timeIntervalRef = useRef(null);
//   const timerRef = useRef(0);

//   const start = () => {
//     if (!timeIntervalRef.current) {
//       timeIntervalRef.current = setInterval(() => {
//         timerRef.current += 1;
//         setTimer(timerRef.current);
//       }, 500);
//     }
//   };
//   const clear = () => {
//     if (timeIntervalRef.current) {
//       clearInterval(timeIntervalRef.current);
//       timeIntervalRef.current = null;
//     }
//   };
//   return (
//     <>
//       <p>Timer - {timer}</p>
//       <button onClick={start}>Start</button>
//       <button onClick={clear}>Stop</button>
//     </>
//   );
// }

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
