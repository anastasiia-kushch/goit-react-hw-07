import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contactsSlice';
import Contact from '../Contact/Contact';

import css from '../ContactList/ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.ul}>
      {contacts.map(({ ...contact }) => (
        <li key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
}

