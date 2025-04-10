import Grid from '../Grid/Grid';
import GridItemTodo from '../GridItemTodo/GridItemTodo';
import TodoListItem from '../TodoListItem/TodoListItem';

export default function TodoListTodo({ todos, deleteTodo }) {
  return (
    <>
      <Grid>
        {todos.map(todo => {
          return (
            <GridItemTodo key={todo.id} todo={todo} deleteTodo={deleteTodo} />
          );
        })}
      </Grid>
    </>
  );
}

{
  /* <ul>
        {todos.map(todo => {
          return <li key={todo.id}>{todo.text}</li>;
        })}
      </ul> */
}
