import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { selectNameFilter } from "../../redux/filtersSlice";
import { selectContacts } from "../../redux/contactsSlice";

const ContactList = ({ contacts, updateContacts, deleteContact }) => {
  const searchValue = useSelector(selectNameFilter);
  const filteredContacts = useSelector(selectContacts);
  return (
    <ul className={s.listContact}>
      {searchValue === ""
        ? contacts.map((contact) => (
            <li key={contact.id}>
              <Contact
                contact={contact}
                updateContacts={updateContacts}
                deleteContact={deleteContact}
              />
            </li>
          ))
        : filteredContacts.map((contact) => (
            <li key={contact.id}>
              <Contact
                contact={contact}
                updateContacts={updateContacts}
                deleteContact={deleteContact}
              />
            </li>
          ))}
    </ul>
  );
};

export default ContactList;
