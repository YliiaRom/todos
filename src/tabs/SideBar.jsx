import { useEffect, useState } from 'react';

export default function SideBar() {
  //isOpenSideBar/handleOpen/handleClose/handleKeypress/addEventListener
  const [openSideBar, setOpenSideBar] = useState(false);
  const openTheSiderBar = () => {
    setOpenSideBar(true);
  };

  const closeSideBar = () => {
    setOpenSideBar(false);
  };

  const closeSideBarWithKeypress = () => {
    setOpenSideBar(false);
  };

  useEffect(() => {
    const handleKeypress = e => {
      if (e.key === 'Escape') {
        closeSideBarWithKeypress();
      }
    };
    document.addEventListener('keydown', handleKeypress);

    return () => {
      document.removeEventListener('keydown', handleKeypress);
    };
  }, [closeSideBarWithKeypress]);
  return (
    <>
      <p>
        if (e.key === 'Escape') <br />
        document.addEventListener('keydown', handleKeypress); <br /> return ()
        =&gt; &#123; document.removeEventListener('keydown', handleKeypress);
      </p>
      <button onClick={openTheSiderBar}>is open Sidebar</button>
      {openSideBar && (
        <div
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            backgroundColor: '#fff',
            width: '30%',
            height: '100%',
            textAlign: 'center',
          }}
        >
          <h2>SideBar</h2>
          <button onClick={closeSideBar}>Close</button>
        </div>
      )}
    </>
  );
}

//----1
// const [isOpenSideBar, setIsOpenSideBar] = useState(false);
// const handleOpen = () => {
//   setIsOpenSideBar(true);
// };
// const handleClose = () => {
//   setIsOpenSideBar(false);
// };
// return (
//   <>
//     <button onClick={handleOpen}>is open Sidebar</button>
//     {isOpenSideBar && (
//       <div
//         style={{
//           position: 'fixed',
//           top: '0',
//           left: '0',
//           backgroundColor: '#fff',
//           width: '30%',
//           height: '100%',
//           textAlign: 'center',
//         }}
//       >
//         <h2>SideBar</h2>
//         <button onClick={handleClose}>Close</button>
//       </div>
//     )}
//   </>
///----2
// import { useEffect, useState } from 'react';

// export default function SideBar() {
//   //isOpenSideBar/handleOpen/handleClose/handleKeypress/addEventListener
//   const [isOpenSideBar, setIsOpenSideBar] = useState(false);
//   const handleOpen = () => {
//     setIsOpenSideBar(true);
//   };
//   const handleClose = () => {
//     setIsOpenSideBar(false);
//   };
//   const closeSideBar = () => {
//     setIsOpenSideBar(false);
//   };
//   useEffect(() => {
//     const handleKeypress = e => {
//       console.log('keypress');
//       if (e.key === 'Escape') {
//         closeSideBar();
//       }
//     };
//     document.addEventListener('keydown', handleKeypress);
//     return () => {
//       document.removeEventListener('keydown', handleKeypress);
//     };
//   }, [closeSideBar]);
//   return (
//     <>
//       <p>
//         if (e.key === 'Escape') <br />
//         document.addEventListener('keydown', handleKeypress); <br /> return ()
//         =&gt; &#123; document.removeEventListener('keydown', handleKeypress);
//       </p>
//       <button onClick={handleOpen}>is open Sidebar</button>
//       {isOpenSideBar && (
//         <div
//           style={{
//             position: 'fixed',
//             top: '0',
//             left: '0',
//             backgroundColor: '#fff',
//             width: '30%',
//             height: '100%',
//             textAlign: 'center',
//           }}
//         >
//           <h2>SideBar</h2>
//           <button onClick={handleClose}>Close</button>
//         </div>
//       )}
//     </>
//   );
// }
