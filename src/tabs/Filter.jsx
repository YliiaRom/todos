import { useEffect, useState } from 'react';
import taskData from '../../src/json/tasks';
export default function Filter() {
  const [query, setQuery] = useState('');
  const handleChange = e => {
    setQuery(e.target.value);
  };
  const visibleTask = taskData.filter(task =>
    task.topic.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <>
      <p> Показать только те taskData, что включают введённое значение</p>

      <input onChange={handleChange} type="text" name="task" value={query} />
      <ul style={{ display: 'flex', flexWrap: 'wrap' }}>
        {visibleTask.map(item => (
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
            <p
              style={{
                border: '1px solid #000',
                padding: '10px',
                marginTop: '10px',
              }}
            >
              {item.text}
            </p>
          </li>
        ))}
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
