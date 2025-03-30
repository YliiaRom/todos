import { useDispatch, useSelector } from 'react-redux';
import { changeLang } from './localeSlice';

export default function ReactReduxSelect() {
  const dispatch = useDispatch();
  const lang = useSelector(state => state.locale.lang);
  const handleChange = event => {
    dispatch(changeLang(event.target.value));
  };
  return (
    <>
      <hr />
      <h2>locale.lang= {lang}</h2>

      <select value={lang} onChange={handleChange}>
        <option>Uk</option>
        <option>En</option>
        <option>Pl</option>
      </select>
    </>
  );
}
