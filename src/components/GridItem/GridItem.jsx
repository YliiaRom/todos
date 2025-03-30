import css from './GridItem.module.css';
const GridItem = ({ children, photoValue }) => {
  return <li className={css.item}>{children}</li>;
};
export default GridItem;
