import { Header } from 'components/MainPageComponents/Header/Header';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Hero } from 'components/CalculatorPageComponents/Hero/Hero';
import { ChangeYourFate } from 'components/CalculatorPageComponents/ChangeYourFate/ChangeYourFate';
import Donation from 'components/CalculatorPageComponents/Donation/Donation';

import navigationListCalc from 'components/CalculatorPageComponents/navigationLisCalc';
import Contacts from 'components/CalculatorPageComponents/Contacts/Contacts';
import GetPDFTemplate from 'components/CalculatorPageComponents/GetPDFTemplate/GetPDFTemplate';
import Footer from 'components/CalculatorPageComponents/Footer/Footer';

const Calculator = ({ setIsMain }) => {
  useEffect(() => setIsMain(false), [setIsMain]);
  return (
    <>
      <Header navigationList={navigationListCalc} />
      <Hero />
      <Outlet />
      <ChangeYourFate />
      <Donation />
      <Contacts />
      <GetPDFTemplate />
      <Footer />
    </>
  );
};

export default Calculator;
