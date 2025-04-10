import { useState } from 'react';
import taskData from '../../src/json/tasks';
//taskData :id,topic,text
export default function Filter() {
  //query/task
  //handleChange/visibleTask/deleteTask
  const [tasks, setTasks] = useState(taskData);
  const [query, setQuery] = useState('');

  const handleInput = e => {
    setQuery(e.target.value);
  };
  const visibleTask = tasks.filter(el =>
    el.topic.toLowerCase().includes(query.toLowerCase())
  );
  const delTask = id => {
    setTasks(() => tasks.filter(el => el.id !== id));
  };

  return (
    <>
      <p> Показать только те taskData, что включают введённое значение</p>
      <input
        onChange={handleInput}
        type="text"
        name="text"
        placeholder="write ..."
      />
      <ul>
        {visibleTask.map(item => {
          return (
            <li
              key={item.id}
              style={{
                border: '1px solid #777',
                margin: '5px',
                maxWidth: 'fit-content',
                padding: '10px',
                boxShadow: '0px 10px 10px #777',
              }}
            >
              <p>{item.topic}</p>
              <p>{item.text}</p>
              <button
                onClick={() => delTask(item.id)}
                style={{ border: '1px solid #999', padding: '5px 15px' }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

// const [query, setQuery] = useState('');

// const handleChange = e => {
//   setQuery(e.target.value);
// };

// // Фильтруем задачи по введённому тексту
// const visibleTask = taskData.filter(item =>
//   item.topic.toLowerCase().includes(query.toLowerCase())
// );

//  <input onChange={handleChange} type="text" name="task" value={query} />
//     <ul>
//       {visibleTask.map(item => (
//         <li key={item.id}>
//           <p>{item.topic}</p>
//           <p>{item.text}</p>
//         </li>

//----2
// import { useState } from 'react';
// import taskData from '../../src/json/tasks';
// //taskData :id,topic,text
// export default function Filter() {
//   const [query, setQuery] = useState('');
//   const [task, setTask] = useState(taskData);
//   const handleChange = e => {
//     setQuery(e.target.value);
//   };

//   const visibleTask = task.filter(el =>
//     el.topic.toLowerCase().includes(query.toLowerCase())
//   );
//   const deleteTask = id => {
//     setTask(prevTask => prevTask.filter(el => el.id !== id));
//   };
//   return (
//     <>
//       <p> Показать только те taskData, что включают введённое значение</p>
//       <input
//         onChange={handleChange}
//         type="text"
//         name="text"
//         autoFocus
//         placeholder="write ..."
//       />
//       <ul>
//         {visibleTask.map(item => {
//           return (
//             <li
//               key={item.id}
//               style={{
//                 border: '1px solid #777',
//                 margin: '5px',
//                 maxWidth: 'fit-content',
//                 padding: '10px',
//                 boxShadow: '0px 10px 10px #777',
//               }}
//             >
//               <p>{item.topic}</p>
//               <p>{item.text}</p>
//               <button
//                 onClick={() => deleteTask(item.id)}
//                 style={{ border: '1px solid #999', padding: '5px 15px' }}
//               >
//                 Delete
//               </button>
//             </li>
//           );
//         })}
//       </ul>
//     </>
//   );
// }

///--3
// import { useState } from 'react';
// import taskData from '../../src/json/tasks';
// //taskData :id,topic,text
// export default function Filter() {
//   //query/task
//   //handleChange/visibleTask/deleteTask
//   const [query, setQuery] = useState('');
//   const [task, setTask] = useState(taskData);
//   const handleChange = e => {
//     setQuery(e.target.value);
//   };
//   const visibleTask = task.filter(item =>
//     item.topic.toLowerCase().includes(query.toLowerCase())
//   );
//   const deleteTask = id => {
//     setTask(prevTask => prevTask.filter(el => el.id !== id));
//   };
//   return (
//     <>
//       <p> Показать только те taskData, что включают введённое значение</p>
//       <input
//         onChange={handleChange}
//         type="text"
//         name="search"
//         placeholder="write..."
//         value={query}
//       />
//       <ul>
//         {visibleTask.map(item => {
//           return (
//             <li
//               key={item.id}
//               style={{
//                 border: '1px solid #777',
//                 margin: '5px',
//                 maxWidth: 'fit-content',
//                 padding: '10px',
//                 boxShadow: '0px 10px 10px #777',
//               }}
//             >
//               <p>{item.topic}</p>
//               <p>{item.text}</p>
//               <button
//                 onClick={() => deleteTask(item.id)}
//                 style={{ border: '1px solid #999', padding: '5px 15px' }}
//               >
//                 Delete
//               </button>
//             </li>
//           );
//         })}
//       </ul>
//     </>
//   );
// }
