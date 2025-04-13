// import { RiSaveLine } from 'react-icons/ri';
// import { MdOutlineCancel } from 'react-icons/md';
import taskData from '../../json/tasks.json';
import { useState } from 'react';
import css from './EditCard.module.css';
export default function EditCard() {
  const [editForm, setEditForm] = useState(false);
  const [editFormId, setaEditFormId] = useState(null);

  const [cards, setCards] = useState(taskData);
  const [query, setQuery] = useState('');
  const [topic, setTopic] = useState('');

  const [editText, setEditText] = useState('');
  const [editTopic, setEditTopic] = useState('');
  // const [queryTopic, setQueryTopic] = useState('');
  //taskData :id,topic,text

  //edit Card
  let newEditItem = {
    id: Date.now(),
    topic: editTopic,
    text: editText,
  };
  const handleEditText = e => {
    setEditText(e.target.value);
  };
  const handleEditTopic = e => {
    setEditTopic(e.target.value);
  };

  //input
  const handleInputText = e => {
    setQuery(e.target.value);
  };
  const handleInputTopic = e => {
    setTopic(e.target.value);
  };
  //editForm
  const handleEditForm = id => {
    setaEditFormId(id);
    setEditForm(true);
  };
  const closeEditForm = () => {
    setEditForm(false);
    setaEditFormId(null);
  };
  //add
  const addTask = () => {
    const newTask = { id: Date.now(), topic: topic, text: query };
    setCards(prevTask => [...prevTask, newTask]);
  };
  const handleSubmit = e => {
    e.preventDefault();
    addTask();
  };
  //edit

  const handleNewValue = e => {
    e.preventDefault();
    closeEditForm();
  };
  return (
    <>
      <div>
        <p> const [editFormId, setaEditFormId] = useState(null);</p>
        <p> &#123;editFormId === item.id && ( &gt;form... </p>
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
        <button onClick={handleEditForm}>edit</button>
        <button type="submit">submit</button>
      </form>

      <ul>
        {cards.map(item => {
          return (
            <li key={item.id} className={css.item}>
              <p>{item.topic}</p>
              <p>{item.text}</p>
              <button onClick={() => handleEditForm(item.id)}>Edit</button>
              {editFormId === item.id && (
                <form action="#" id="form02" onSubmit={handleNewValue}>
                  <input
                    onChange={handleEditTopic}
                    type="text"
                    name="edit-topic"
                    defaultValue={item.topic}
                  />
                  <input
                    onChange={handleEditText}
                    type="text"
                    name="edit-text"
                    defaultValue={item.text}
                  />
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
