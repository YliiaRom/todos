import { useRef } from 'react';

export default function Player() {
  const audioRef = useRef();
  const start = () => {
    audioRef.current.play();
  };
  const pause = () => {
    audioRef.current.pause();
  };
  return (
    <>
      <audio
        type="audio/mp3"
        src="https://github.com/rafaelreis-hotmart/Audio-Sample-files/raw/master/sample.mp3"
        ref={audioRef}
      ></audio>
      <button onClick={start}>start</button>
      <button onClick={pause}>stop</button>
    </>
  );
}

// const playerRef = useRef();
// const play = () => {
//   playerRef.current.play();
// };
// const stop = () => {
//   playerRef.current.pause();
// };
/* <audio
        ref={playerRef}
        type="audio/mp3"
        src="https://github.com/rafaelreis-hotmart/Audio-Sample-files/raw/master/sample.mp3"
      ></audio> */

//       import { useRef } from 'react';

// export default function Player() {
//   const audioRef = useRef();
//   const play = () => {
//     audioRef.current.play();
//   };
//   const pause = () => {
//     audioRef.current.pause();
//   };
//   return (
//     <>
//       <audio
//         type="audio/mp3"
//         ref={audioRef}
//         src="https://github.com/rafaelreis-hotmart/Audio-Sample-files/raw/master/sample.mp3"
//       ></audio>
//       <button onClick={play}>Play</button>
//       <button onClick={pause}>Stop</button>
//     </>
//   );
// }
