import { useDispatch } from "react-redux";
import css from "./ContactForm.module.css";
import { addContact } from "redux/operations";

export const ContactForm = () => {
  const dispatch = useDispatch()
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    dispatch(addContact({
      name: form.elements.name.value,
      phone: form.elements.number.value
    }))
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.field}
        type="text"
        name="name"
        placeholder="Enter name..."
      />
      <input
        className={css.field}
        type="text"
        name="number"
        placeholder="Enter phone number..."
      />
      <button type="submit">Add contact</button>
    </form>
  );
};