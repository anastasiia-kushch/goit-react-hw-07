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

// import { selectContacts } from '../../redux/contactsSlice';
// import { selectNameFilter } from '../../redux/filtersSlice';
// const contacts = useSelector(selectContacts);
// const filters = useSelector(selectNameFilter);
// const filteredContacts = contacts.filter((contact) =>
//   contact.name.toLowerCase().includes(filters.name)
// );
// const reversedContacts = filteredContacts.slice().reverse();
