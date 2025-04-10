import TodoListItem from '../TodoListItem/TodoListItem';

export default function GridItemTodo({ todo, deleteTodo }) {
  return (
    <>
      <TodoListItem todo={todo} deleteTodo={deleteTodo} />
    </>
  );
}
