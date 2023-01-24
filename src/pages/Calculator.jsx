import { ContactMe } from 'components/ContactMe/ContactMe';
import { Contacts } from 'components/Contacts/Contacts';
import { Hero } from 'components/Hero/Hero';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

export const Calculator = ({ setIsMain }) => {
  useEffect(() => setIsMain(false), [setIsMain])
  return (
    <>
      <Hero />
      <Outlet />
      <ContactMe />
      <Contacts />
    </>
  );
};
