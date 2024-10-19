import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import { selectFilteredContacts } from '../../redux/contactsSlice';
import Contact from './Contact/Contact';
import css from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();

  const visibleContacts = useSelector(selectFilteredContacts);

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={css.contactList}>
      {visibleContacts.map(contact => (
        <Contact
          name={contact.name}
          number={contact.number}
          id={contact.id}
          key={contact.id}
          deleteContact={handleDelete}
        />
      ))}
    </ul>
  );
};
export default ContactList;
