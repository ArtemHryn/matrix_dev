import { Header } from 'components/MainPageComponents/Header/Header';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Hero } from 'components/CalculatorPageComponents/Hero/Hero';
import { ChangeYourFate } from 'components/CalculatorPageComponents/ChangeYourFate/ChangeYourFate';

import navigationListCalc from 'components/CalculatorPageComponents/navigationLisCalc';

const Calculator = ({ setIsMain }) => {
  useEffect(() => setIsMain(false), [setIsMain]);
  return (
    <>
      <Header navigationList={navigationListCalc} />
      <Hero />
      <Outlet />
      <ChangeYourFate />
    </>
  );
};

export default Calculator;
