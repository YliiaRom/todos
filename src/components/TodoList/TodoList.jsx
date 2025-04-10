import Grid from '../Grid/Grid';
import GridItemTodo from '../GridItemTodo/GridItemTodo';
import TodoListItem from '../TodoListItem/TodoListItem';

const TodoList = ({ todos }) => {
  return (
    <>
      <Grid>
        {todos.map(todo => (
          <GridItemTodo key={todo.id} todo={todo}>
            <TodoListItem todo={todo} />
          </GridItemTodo>
        ))}
      </Grid>
    </>
  );
};

export default TodoList;
