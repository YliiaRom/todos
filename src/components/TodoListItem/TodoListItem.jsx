import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import style from './TodoListItem.module.css';
import Text from '../Text/Text';

const TodoListItem = ({ todo, deleteTodo }) => {
  return (
    <>
      <div className={style.box}>
        <Text textAlign="center" marginBottom="20">
          {todo.text}
        </Text>

        <button
          className={style.deleteButton}
          type="button"
          onClick={() => deleteTodo(todo.id)}
        >
          <RiDeleteBinLine size={24} />
        </button>
        <button className={style.editButton} type="button">
          <RiEdit2Line size={24} />
        </button>
      </div>
    </>
  );
};

export default TodoListItem;

// //import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
// const TodoListItem = () => {
//   return <h3>TodoListItem</h3>;
// };

// export default TodoListItem;
