import { nanoid } from 'nanoid';
import FormTodo from '../components/FormTodo/FormTodo';
import Text from '../components/Text/Text';

import { useState } from 'react';
import TodoListTodo from '../components/TodoListTodo/TodoListTodo';
// import { todos } from '../../Todos';

const Todos = () => {
  const [todos, setTodos] = useState([
    { id: '1', text: 'Practice more' },
    { id: '2', text: 'Get all tasks done on time' },
  ]);
  const addNewTodo = text => {
    const newTodo = { id: nanoid(), text: text };
    setTodos(prevTodos => [...prevTodos, newTodo]);
  };
  const deleteTodo = id => {
    setTodos(todos.filter(el => el.id != id));
  };
  return (
    <>
      <FormTodo onSubmit={addNewTodo} />
      {todos.length ? (
        <TodoListTodo todos={todos} deleteTodo={deleteTodo} />
      ) : (
        <Text textAlign="center">There are no any todos ...</Text>
      )}
      <p>
        Видалення карти deleteTodo: (state, action) &gt; &#123; <br />
        const index = state.items.findIndex(el =&gt; el.id === action.payload);{' '}
        <br />
        state.items.splice(index, 1); <br />
        &#125;,
      </p>
    </>
  );
};

export default Todos;

// import { nanoid } from 'nanoid';
// import FormTodo from '../components/FormTodo/FormTodo';
// import Text from '../components/Text/Text';

// import { useState } from 'react';
// import TodoListTodo from '../components/TodoListTodo/TodoListTodo';
// import { todos } from '../../Todos';

// const Todos = () => {
//   const [todos, setTodos] = useState([
//     { id: '1', text: 'Practice more' },
//     { id: '2', text: 'Get all tasks done on time' },
//   ]);
//   const addNewTodo = text => {
//     const newTodo = { id: nanoid(), text: text };
//     setTodos(prevTodos => [...prevTodos, newTodo]);
//   };
//   const deleteTodo = id => {
//     setTodos(todos.filter(el => el.id !== id));
//   };

//   return (
//     <>
//       <FormTodo onSubmit={addNewTodo} />
//       {todos.length ? (
//         <TodoListTodo todos={todos} deleteTodo={deleteTodo} />
//       ) : (
//         <Text textAlign="center">There are no any todos ...</Text>
//       )}
//     </>
//   );
// };

// export default Todos;
