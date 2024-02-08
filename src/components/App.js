import { Layout } from "./Layout/Layout";
import { ContactList } from "./ContactList/ContactList";
import { ContactForm } from "./ContactForm/ContactForm";
import { FilterForm } from "./FilterForm/FilterForm";

export const App = () => {
  return (
    <Layout>
      <ContactForm />
      <FilterForm />
      <ContactList />
    </Layout>
  );
};