import ReactRedux from '../components/ReactRedux/ReactRedux';
import ReactReduxSelect from '../components/ReactRedux/ReactReduxSelect';

export default function Redux() {
  return (
    <>
      <p>
        <a href="https://github.com/rt2zz/redux-persist#readme" target="_blank">
          redux-persist = Save to LS
          (https://github.com/rt2zz/redux-persist#readme)
        </a>
      </p>
      <p>
        <a href="https://redux-toolkit.js.org/" target="_blank">
          Redux-ToolKit(https://redux-toolkit.js.org/)
        </a>
      </p>
      <p>
        <a href="https://react-redux.js.org/" target="_blank">
          React Redux-(https://react-redux.js.org/)
        </a>
      </p>
      <hr />
      <h2>
        Redux Toolkit/ react-redux <br />
        store &gt; reducer
      </h2>
      <ReactRedux />
      <ReactReduxSelect />
    </>
  );
}
