// import { RiSaveLine } from 'react-icons/ri';
// import { MdOutlineCancel } from 'react-icons/md';
import taskData from '../../json/tasks.json';
import { useState } from 'react';
import css from './EditCard.module.css';
export default function EditCard() {
  const [cards, setCards] = useState(taskData);
  const [query, setQuery] = useState('');
  const [topic, setTopic] = useState('');

  const [editForm, setEditForm] = useState(false);
  const [editCartId, setEditCardId] = useState('');
  //taskData :id,topic,text

  //input
  const handleInputText = e => {
    setQuery(e.target.value);
  };
  const handleInputTopic = e => {
    setTopic(e.target.value);
  };
  //editForm

  //add
  const addTask = () => {
    const newTask = { id: crypto.randomUUID(), topic: topic, text: query };
    setCards(prevTask => [...prevTask, newTask]);
  };
  const handleSubmit = e => {
    e.preventDefault();
    addTask();
  };
  //edit
  const handleEditForm = () => {
    setEditForm(true);
  };
  //edit Card
  // const newEditCard = {
  //   id: Date.now(),
  //   topic: '',
  //   text: '',
  // };
  const createNewTask = (id, topic, text) => {
    const newEditCard = {
      id: id,
      topic: topic,
      text: text,
    };
    return newEditCard;
  };
  //btn
  const handleId = id => {
    setEditCardId(id);
  };
  //submit-edit
  const handleEditSubmit = e => {
    e.preventDefault();
    const id = editCartId;
    const topicValue = e.target.edittopic.value;
    const textValue = e.target.edittext.value;
    const newEditCard = createNewTask(id, topicValue, textValue);
    //map
    // const newCards = cards.map(item => (item.id === id ? newEditCard : item));
    // setCards(newCards);

    //findIdex -[]=
    // const index = cards.findIndex(item => item.id === id);
    // cards[index] = newEditCard;

    //finedIndex
    const index = cards.findIndex(item => item.id === id);
    cards.splice(index, 1, newEditCard);

    setCards([...cards]);

    console.log(index);
    setEditCardId(null);
  };

  return (
    <>
      <div>
        <p> const [editFormId, setaEditFormId] = useState(null);</p>
        <p> &#123;editFormId === item.id && ( &lt;form... </p>
        <hr />
        <h2>
          const updateCard = cards.map(item =&gt; (item.id === id ? newEditCard
          : item));
        </h2>
        <p> setCards(updateCard);</p>
        <hr />
        <h2>const index = cards.findIndex(item =&gt; item.id === id);</h2>
        <p>const newCards = [...cards];</p>
        <h3>newCards[index] = newEditCard;</h3> <p>setCards(newCards);</p>
        <hr />
        <h2> cards.splice(index, 1, newEditCard);</h2>
        <p> setCards([...cards]);</p>
      </div>
      <h2>Edit</h2>
      <form action="#" id="form01" onSubmit={handleSubmit}>
        <input
          id="idtext"
          type="text"
          onChange={handleInputText}
          name="value"
          placeholder="write. text.."
        />
        <input
          id="idtopic"
          type="text"
          onChange={handleInputTopic}
          name="topic"
          placeholder="topic..."
        />
        <button>edit</button>
        <button type="submit">submit</button>
      </form>

      <ul>
        {cards.map(item => {
          return (
            <li key={item.id} className={css.item}>
              <p>{item.topic}</p>
              <p>{item.text}</p>
              <button onClick={() => handleId(item.id)}>Edit</button>
              {editCartId === item.id && (
                <form action="#" id="form02" onSubmit={handleEditSubmit}>
                  <input
                    type="text"
                    name="edittopic"
                    defaultValue={item.topic}
                  />
                  <input type="text" name="edittext" defaultValue={item.text} />
                  <button>cancel</button>
                  <button type="submit">save</button>
                </form>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
}

//--------submit-------------
//submit-edit
// const handleEditSubmit = e => {
//   e.preventDefault();
//   const id = editCartId;
//   const topicValue = e.target.edittopic.value;
//   const textValue = e.target.edittext.value;
//   const newEditCard = createNewTask(id, topicValue, textValue);
//map
// const updateCard = cards.map(item => (item.id === id ? newEditCard : item));
// setCards(updateCard);
//fiedIndex
// const index = cards.findIndex(item => item.id === id);
//--1
// const newCards = [...cards];
// newCards[index] = newEditCard;
// setCards(newCards);
//--2
//   cards.splice(index, 1, newEditCard);
//   setCards([...cards]);
//   setEditCardId(null);
// };
//-----------------------------------------------------
// import { RiSaveLine } from 'react-icons/ri';
// import { MdOutlineCancel } from 'react-icons/md';
// import taskData from '../../json/tasks.json';
// import { useState } from 'react';
// import css from './EditCard.module.css';
// export default function EditCard() {
//   const [editForm, setEditForm] = useState(false);
//   const [editFormId, setaEditFormId] = useState(null);

//   const [cards, setCards] = useState(taskData);
//   const [query, setQuery] = useState('');
//   const [topic, setTopic] = useState('');

//   const [editText, setEditText] = useState('');
//   const [editTopic, setEditTopic] = useState('');
//   // const [queryTopic, setQueryTopic] = useState('');
//   //taskData :id,topic,text

//   //edit Card
//   let newEditItem = {
//     id: Date.now(),
//     topic: editTopic,
//     text: editText,
//   };
//   const handleEditText = e => {
//     setEditText(e.target.value);
//   };
//   const handleEditTopic = e => {
//     setEditTopic(e.target.value);
//   };

//   //input
//   const handleInputText = e => {
//     setQuery(e.target.value);
//   };
//   const handleInputTopic = e => {
//     setTopic(e.target.value);
//   };
//   //editForm
//   const handleEditForm = id => {
//     setaEditFormId(id);
//     setEditForm(true);
//   };
//   const closeEditForm = () => {
//     setEditForm(false);
//     setaEditFormId(null);
//   };
//   //add
//   const addTask = () => {
//     const newTask = { id: Date.now(), topic: topic, text: query };
//     setCards(prevTask => [...prevTask, newTask]);
//   };
//   const handleSubmit = e => {
//     e.preventDefault();
//     addTask();
//   };
//   //edit

//   const handleNewValue = e => {
//     e.preventDefault();
//     closeEditForm();
//   };
//   return (
//     <>
//       <div>
//         <p> const [editFormId, setaEditFormId] = useState(null);</p>
//         <p> &#123;editFormId === item.id && ( &lt;form... </p>
//       </div>
//       <h2>Edit</h2>
//       <form action="#" id="form01" onSubmit={handleSubmit}>
//         <input
//           id="idtext"
//           type="text"
//           onChange={handleInputText}
//           name="value"
//           placeholder="write. text.."
//         />
//         <input
//           id="idtopic"
//           type="text"
//           onChange={handleInputTopic}
//           name="topic"
//           placeholder="topic..."
//         />
//         <button onClick={handleEditForm}>edit</button>
//         <button type="submit">submit</button>
//       </form>

//       <ul>
//         {cards.map(item => {
//           return (
//             <li key={item.id} className={css.item}>
//               <p>{item.topic}</p>
//               <p>{item.text}</p>
//               <button onClick={() => handleEditForm(item.id)}>Edit</button>
//               {editFormId === item.id && (
//                 <form action="#" id="form02" onSubmit={handleNewValue}>
//                   <input
//                     onChange={handleEditTopic}
//                     type="text"
//                     name="edit-topic"
//                     defaultValue={item.topic}
//                   />
//                   <input
//                     onChange={handleEditText}
//                     type="text"
//                     name="edit-text"
//                     defaultValue={item.text}
//                   />
//                   <button>cancel</button>
//                   <button type="submit">save</button>
//                 </form>
//               )}
//             </li>
//           );
//         })}
//       </ul>
//     </>
//   );
// }
