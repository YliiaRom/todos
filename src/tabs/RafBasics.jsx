import { useRef } from 'react';

const RafBasics = () => {
  const inputRaf = useRef();
  const setInput = () => {
    console.log(inputRaf);
    inputRaf.current.focus();
  };
  return (
    <>
      <div>
        <h3>useRef= link + autoFocus</h3>
        <input type="text" name="text" ref={inputRaf} />
        <button onClick={setInput}>Clik = Focus Input</button>
      </div>
    </>
  );
};
export default RafBasics;

// import { useEffect, useRef } from 'react';

// const inputRef = useRef();

// const setFocus = () => {
//   inputRef.current.focus();
//   console.dir(inputRef.current);
// };

/* <button onClick={setFocus}>Clik = focus</button> */
