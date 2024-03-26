import { useState } from 'react';
import { IoPerson } from 'react-icons/io5';
import { LuPhone } from 'react-icons/lu';
import css from '../ContactEditor/ContactEditor.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { editContact } from '../../redux/contactsOps';
import { selectError, selectLoading } from '../../redux/contactsSlice';
import { ErrorComponent, Loader } from '../StatusIndicators/StatusIndicators';
import toast, { Toaster } from 'react-hot-toast';

export default function ContactEditor({ name, number, edit, id }) {
  const [nameValue, setNameValue] = useState(name);
  const [numberValue, setNumberValue] = useState(number);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editContact({ name: nameValue, number: numberValue, id }))
      .unwrap()
      .then(() => {
        edit(false);
        toast('Contact edited!', {
          icon: '✏️',
        });
      })
      .catch(() => toast.error('Oops... Try again!'));
  };
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <div className={css.inputsDiv}>
        {loading && <Loader />}
        {error && <ErrorComponent />}
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
      <Toaster />
    </form>
  );
}
