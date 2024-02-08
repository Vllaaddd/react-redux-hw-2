import { useDispatch, useSelector } from "react-redux";
import { Contact } from "../Contact/Contact";
import css from "./ContactList.module.css";
import { visibleContacts } from "../../redux/selectors";
import { useEffect } from "react";
import { fetchContacts } from "redux/operations";

export const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  const contacts = useSelector(visibleContacts)

  return (
    <ul className={css.list}>
      {contacts.map(contact => (
        <li className={css.listItem} key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};