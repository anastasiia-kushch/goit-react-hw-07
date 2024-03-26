import { IoPerson } from 'react-icons/io5';
import { LuPhone } from 'react-icons/lu';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';

import css from '../Contact/Contact.module.css';
import { useState } from 'react';
import ContactEditor from '../ContactEditor/ContactEditor';

export default function Contact({ contact: { id, name, number } }) {
  const [isEditing, setIsEditing] = useState(false);

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  const handleClick = () => {
    setIsEditing(true);
  };

  return (
    <div className={css.div}>
      {isEditing ? (
        <ContactEditor name={name} number={number} edit={setIsEditing} id={id}/>
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
    </div>
  );
}
