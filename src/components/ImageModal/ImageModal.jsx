import css from './ImageModal.module.css';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
export default function ImageModal({ children, onClose, isOpen }) {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  return (
    <>
      <div>
        <Modal
          isOpen={isOpen}
          onRequestClose={onClose}
          ariaHideApp={false}
          style={customStyles}
        >
          <button onClick={onClose}>close</button>
          {children}
        </Modal>
      </div>
    </>
  );
}

// import css from './ImageModal.module.css';
// import Modal from 'react-modal';
// import ReactDOM from 'react-dom';
// export default function ImageModal({ children, isOpen, onClose }) {
//   const customStyles = {
//     content: {
//       top: '50%',
//       left: '50%',
//       right: 'auto',
//       bottom: 'auto',
//       marginRight: '-50%',
//       transform: 'translate(-50%, -50%)',
//     },
//   };

//   // function afterOpenModal() {
//   //   // references are now sync'd and can be accessed.
//   //   subtitle.style.color = '#f00';
//   // }
//   return (
//     <>
//       <div>
//         <Modal
//           isOpen={isOpen}
//           onRequestClose={onClose}
//           // onAfterOpen={afterOpenModal}
//           style={customStyles}
//           ariaHideApp={false}
//         >
//           <button onClick={onClose}>close</button>
//           {children}
//         </Modal>
//       </div>
//     </>
//   );
// }
