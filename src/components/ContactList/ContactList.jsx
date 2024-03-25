import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';
import Contact from '../Contact/Contact';

import css from '../ContactList/ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filters = useSelector(selectNameFilter);

  const reversedContacts = contacts.slice().reverse();

  const filteredContacts = filters
    ? reversedContacts.filter((contact) =>
        contact.name.toLowerCase().includes(filters.name)
      )
    : reversedContacts;

  return (
    <ul className={css.ul}>
      {filteredContacts.map((contact) => (
        <li key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
}
