import css from './Loader.module.css';
import BounceLoader from 'react-spinners/BounceLoader';

const Loader = () => {
  return (
    <div className={css.backdrop}>
      <BounceLoader
        visible={true}
        width="200"
        color="#4fa94d"
        ariaLabel="infinity-spin-loading"
      />
    </div>
  );
};
export default Loader;
