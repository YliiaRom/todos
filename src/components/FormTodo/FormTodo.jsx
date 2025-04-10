import { useState } from 'react';

import style from './FormTodo.module.css';
import { FiSearch } from 'react-icons/fi';
export default function FormTodo({ onSubmit }) {
  const handleSubmit = e => {
    e.preventDefault();
    const value = e.target.elements.search.value.trim();
    const form = e.target;
    if (!value) {
      return;
    }
    onSubmit(value);
    console.log(value);
    form.reset();
  };

  return (
    <>
      <form className={style.form} onSubmit={handleSubmit}>
        <button className={style.button} type="submit">
          <FiSearch size="16px" />
        </button>

        <input
          className={style.input}
          placeholder="What do you want to write?"
          name="search"
          required
          autoFocus
        />
      </form>
    </>
  );
}
