import { IoPerson } from 'react-icons/io5';
import { LuPhone } from 'react-icons/lu';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

import css from '../Contact/Contact.module.css';

export default function Contact({ contact: { id, name, number } }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.div}>
      <div className={css.info}>
        <IoPerson className={css.icon} size={18} />
        <p>{name}</p>
      </div>
      <div className={css.info}>
        <LuPhone className={css.icon} size={18} />
        <p>{number}</p>
      </div>

      <button type="button" className={css.button} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
