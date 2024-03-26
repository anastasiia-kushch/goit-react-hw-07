import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';
import Contact from '../Contact/Contact';

import css from '../ContactList/ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filters = useSelector(selectNameFilter);

  // const filteredContacts = useSelector(selectFilteredContacts());
  // const reversedContacts = filteredContacts && filteredContacts.slice().reverse();

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filters.name)
  );
    const reversedContacts = filteredContacts.slice().reverse();

  return (
    <ul className={css.ul}>
      {reversedContacts.map((contact) => (
        <li key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
}
