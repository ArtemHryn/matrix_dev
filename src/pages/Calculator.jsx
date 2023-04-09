import { createContext, useContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/MainPageComponents/Header/Header';
import { Hero } from 'components/CalculatorPageComponents/Hero/Hero';
import { ChangeYourFate } from 'components/CalculatorPageComponents/ChangeYourFate/ChangeYourFate';
import Donation from 'components/CalculatorPageComponents/Donation/Donation';

import navigationListCalc from 'components/CalculatorPageComponents/navigationLisCalc';
import Contacts from 'components/CalculatorPageComponents/Contacts/Contacts';
import GetPDFTemplate from 'components/CalculatorPageComponents/GetPDFTemplate/GetPDFTemplate';
import Footer from 'components/CalculatorPageComponents/Footer/Footer';
import { Box } from 'components/Box';

const MatrixContext = createContext();
export const useMatrix = () => useContext(MatrixContext);

const calculatorPageGradient =
  'linear-gradient(180deg, #FDFCFE 0%, #E7E0F3 13.01%, #ECE6F6 25.18%, #EDE1F4 36.71%, #F5E8F3 47.22%, #F6ECF5 54.89%, #F4ECFA 71.18%, #F4EBF9 79.3%, #F7EDF8 88.76%, #F7EBF6 100%);';

const Calculator = () => {
  const [showMatrix, setShowMatrix] = useState(false);
  const [date, setDate] = useState({});
  const [isGenerated, setIsGenerated] = useState(false);
  const [name, setName] = useState('');
  const [matrixData, setMatrixData] = useState({});

  return (
    <MatrixContext.Provider
      value={{
        showMatrix,
        setShowMatrix,
        date,
        setDate,
        isGenerated,
        setIsGenerated,
        name,
        setName,
        matrixData,
        setMatrixData,
      }}
    >
      <Box backgroundImage={calculatorPageGradient}>
        <Header navigationList={navigationListCalc} />
        <Hero />
        <Outlet />
        <ChangeYourFate />
        <Donation />
        <Contacts />
        <GetPDFTemplate />
        <Footer />
      </Box>
    </MatrixContext.Provider>
  );
};

export default Calculator;
