import { useDispatch, useSelector } from 'react-redux';
import css from './ReactRedux.module.css';
import { deposit, withdraw } from './balanceSlice';

export default function ReactRedux() {
  const balance = useSelector(state => state.balance.value);
  const dispatch = useDispatch();

  const chengeDeposit = () => {
    dispatch(deposit(10));
  };
  const chengeWithdraw = () => {
    dispatch(deposit(5));
  };
  return (
    <>
      <div className={css.context}>
        <p>
          configureStore,createAction(store &gt; reducer)/ <br />
          useSelector/ <br />
          useDispatch
        </p>
        <p> &lt;Provider store=&#123;store&#125;&gt;</p>
      </div>
      <p>{balance}</p>
      <p>Balance</p>
      <p>
        <button onClick={chengeDeposit}>Deposit</button>
      </p>
      <p>
        <button onClick={chengeWithdraw}>Withdraw</button>
      </p>
    </>
  );
}

// import { useDispatch, useSelector } from 'react-redux';
// import css from './ReactRedux.module.css';
// import { deposit, withdraw } from './store';

// export default function ReactRedux() {
//   const dispatch = useDispatch();
//   const balance = useSelector(state => state.balance.value);
//   const changeDeposit = () => {
//     dispatch(deposit(10));
//   };
//   const changeWithdraw = () => {
//     dispatch(withdraw(5));
//   };

//   return (
//     <>
//       <div className={css.context}>
//         <p>
//           configureStore,createAction(store &gt; reducer)/ <br />
//           useSelector/ <br />
//           useDispatch
//         </p>
//         <p> &lt;Provider store=&#123;store&#125;&gt;</p>
//       </div>
//       <p>{balance}</p>
//       <p>Balance</p>
//       <p>
//         <button onClick={changeDeposit}>Deposit</button>
//       </p>
//       <p>
//         <button onClick={changeWithdraw}>Withdraw</button>
//       </p>
//     </>
//   );
// }
