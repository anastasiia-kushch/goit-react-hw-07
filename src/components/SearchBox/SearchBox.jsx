import { useDispatch, useSelector } from 'react-redux';
import css from '../SearchBox/SearchBox.module.css';
import { selectNameFilter, setFilter } from '../../redux/filtersSlice';

export default function SearchBox() {
  const dispatch = useDispatch();
  const { value } = useSelector(selectNameFilter);
  const habdleChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className={css.div}>
      <p className={css.p}>Find contacts by name</p>
      <input
        type="text"
        value={value}
        onChange={habdleChange}
        className={css.input}
      />
    </div>
  );
}
