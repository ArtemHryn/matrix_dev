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
import { CalcContainer } from 'components/Common/Common.styled';

const MatrixContext = createContext();
export const useMatrix = () => useContext(MatrixContext);

const Calculator = () => {
  const [showMatrix, setShowMatrix] = useState(false);
  const [date, setDate] = useState({});
  const [isGenerated, setIsGenerated] = useState(false);
  const [name, setName] = useState('');
  const [matrixData, setMatrixData] = useState({});
  const [matrixType, setMatrixType] = useState('fateMatrix');

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
        matrixType,
        setMatrixType,
      }}
    >
      <CalcContainer>
        <Header navigationList={navigationListCalc} />
        <Hero />
        <Outlet />
        <ChangeYourFate />
        <Donation />
        <Contacts />
        <GetPDFTemplate />
        <Footer />
      </CalcContainer>
    </MatrixContext.Provider>
  );
};

export default Calculator;
