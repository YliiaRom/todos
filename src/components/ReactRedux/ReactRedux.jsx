import { useDispatch, useSelector } from 'react-redux';
import css from './ReactRedux.module.css';
import { deposit, withdraw } from './balanceSlice';
import { shadowBalance, shadowTextBalance } from '../../helpers/shadow';

export default function ReactRedux() {
  const dispatch = useDispatch();
  const depositValue = useSelector(state => state.balance.value);
  const handleDeposit = () => {
    dispatch(deposit(10));
  };
  const handleWithdraw = () => {
    dispatch(withdraw(5));
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
      <p
        style={{
          textShadow: shadowBalance(),
          fontSize: '40px',
          fontWeight: '900',
          color: '#fff',
          transform: 'skew(25deg)',
        }}
      >
        Balance {depositValue}
      </p>
      <div className={css.cube}>
        <p>
          <span
            className={css.clipPatchText}
            style={{
              display: 'inline-block',
              textShadow: shadowTextBalance(),
            }}
          >
            {depositValue}
          </span>
        </p>

        <p>
          <button onClick={handleDeposit}>Deposit</button>
        </p>
        <p>
          <button onClick={handleWithdraw}>Withdraw</button>
        </p>
      </div>
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
