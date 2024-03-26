import { IoPerson } from 'react-icons/io5';
import { LuPhone } from 'react-icons/lu';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import css from '../Contact/Contact.module.css';
import { useState } from 'react';
import ContactEditor from '../ContactEditor/ContactEditor';
import { selectError, selectLoading } from '../../redux/contactsSlice';
import { ErrorComponent, Loader } from '../StatusIndicators/StatusIndicators';
import toast, { Toaster } from 'react-hot-toast';

export default function Contact({ contact: { id, name, number } }) {
  const [isEditing, setIsEditing] = useState(false);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id))
      .unwrap()
      .then(() => toast('Contact deleted!', {
        icon: '🗑'
      }))
      .catch(() => toast.error('Oops... Try again!'));
  };

  const handleClick = () => {
    setIsEditing(true);
  };

  return (
    <div className={css.div}>
      {loading && <Loader />}
      {error && <ErrorComponent />}
      {isEditing ? (
        <ContactEditor
          name={name}
          number={number}
          edit={setIsEditing}
          id={id}
        />
      ) : (
        <div>
          <div className={css.info}>
            <IoPerson className={css.icon} size={18} />
            <p onClick={handleClick}>{name}</p>
          </div>
          <div className={css.info}>
            <LuPhone className={css.icon} size={18} />
            <p onClick={handleClick}>{number}</p>
          </div>
        </div>
      )}

      <button type="button" className={css.button} onClick={handleDelete}>
        Delete
      </button>

      <Toaster />
    </div>
  );
}
