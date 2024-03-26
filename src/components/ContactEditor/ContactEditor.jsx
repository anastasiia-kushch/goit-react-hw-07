import { useState } from 'react';
import { IoPerson } from 'react-icons/io5';
import { LuPhone } from 'react-icons/lu';
import css from '../ContactEditor/ContactEditor.module.css';
import { useDispatch } from 'react-redux';
import { editContact } from '../../redux/contactsOps';

export default function ContactEditor({ name, number, edit, id }) {
  const [nameValue, setNameValue] = useState(name);
  const [numberValue, setNumberValue] = useState(number);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editContact({ name: nameValue, number: numberValue, id }))
      .unwrap()
      .then(() => {
        edit(false);
      });
  };
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <div className={css.inputsDiv}>
        <div className={css.inputIconDiv}>
          <IoPerson className={css.icon} size={18} />
          <input
            type="text"
            className={css.input}
            name="name"
            value={nameValue}
            onChange={(e) => setNameValue(e.target.value)}
          />
        </div>
        <div className={css.inputIconDiv}>
          <LuPhone className={css.icon} size={18} />
          <input
            type="text"
            className={css.input}
            name="number"
            value={numberValue}
            onChange={(e) => setNumberValue(e.target.value)}
          />
        </div>
      </div>
      <button type="submit" className={css.saveButton}>
        Save
      </button>
    </form>
  );
}
