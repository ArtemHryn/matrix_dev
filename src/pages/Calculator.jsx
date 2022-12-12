import { ContactMe } from 'components/ContactMe/ContactMe';
import { Contacts } from 'components/Contacts/Contacts';
import { Hero } from 'components/Hero/Hero';
import { Outlet } from 'react-router-dom';

export const Calculator = () => {
  return (
    <>
      <Hero />
      <Outlet/>
      <ContactMe />
      <Contacts />
    </>
  );
};
