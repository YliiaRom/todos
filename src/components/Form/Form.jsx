import { FiSearch } from 'react-icons/fi';

import style from './Form.module.css';
import { useState } from 'react';

const Form = ({ onSubmit }) => {
  const [text, setText] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    if (!text.trim()) {
      return;
    }
    onSubmit(text);
    setText('');
  };
  //query
  // className='style.input'
  //handleSubmit
  //handleChange
  const handleChange = e => {
    setText(e.target.value);
  };
  return (
    <>
      <p>передати параметри при onSubmit</p>
      <form className={style.form} onSubmit={handleSubmit}>
        <button className={style.button} type="submit">
          <FiSearch size="16px" />
        </button>

        <input
          onChange={handleChange}
          type="text"
          name="text"
          input={text}
          autoFocus
          required
          placeholder="write..."
          className={style.input}
        />
      </form>
    </>
  );
};

export default Form;

// <input
//   onChange={handleInput}
//   className={style.input}
//   placeholder="What do you want to write?"
//   name="search"
//   value={query}
//   required
//   autoFocus
// />;

// const [query, setQuery] = useState('');

// const handleInput = event => {
//   return setQuery(event.target.value);
// };

//   const handleSubmit = e => {
//     e.preventDefault();
//     if (!query.trim()) {
//       return alert(' NO valide velue! ');
//     }
//     onSubmit(query);
//     setQuery('');
//   };
