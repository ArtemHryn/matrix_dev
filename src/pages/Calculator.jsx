import { Suspense, createContext, useContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/MainPageComponents/Header/Header';
import { Hero } from 'components/CalculatorPageComponents/Hero/Hero';
import { ChangeYourFate } from 'components/CalculatorPageComponents/ChangeYourFate/ChangeYourFate';
import Donation from 'components/CalculatorPageComponents/Donation/Donation';
import Contacts from 'components/CalculatorPageComponents/Contacts/Contacts';
import GetPDFTemplate from 'components/CalculatorPageComponents/GetPDFTemplate/GetPDFTemplate';
import Footer from 'components/CalculatorPageComponents/Footer/Footer';

import { CalcContainer } from 'components/Common/Common.styled';

import { content } from 'helper/content';
import MatrixLoader from 'components/Spinner/MatrixLoader';
import { useTranslation } from 'react-i18next';
import getNavList from 'components/CalculatorPageComponents/navigationLisCalc';
import { Box } from 'components/Box';
import Instruction from 'components/CalculatorPageComponents/Instruction/Instruction';

const MatrixContext = createContext();
export const useMatrix = () => useContext(MatrixContext);

const Calculator = () => {
  const [showMatrix, setShowMatrix] = useState(false);
  const [date, setDate] = useState({});
  const [isGenerated, setIsGenerated] = useState(false);
  const [name, setName] = useState('');
  const [matrixData, setMatrixData] = useState({});
  const [matrixType, setMatrixType] = useState('fateMatrix');
  const [ageList, setAgeList] = useState(null);
  const [age, setAge] = useState({});
  const [currentKey, setCurrentKey] = useState('');
  const [partnersDate, setPartnersDate] = useState([]);
  const { i18n } = useTranslation();

  useEffect(() => {
    const metaTag = document.querySelector('meta[name="description"]');
    document.title = 'Dari.Karma | Калькулятор Матрицы Судьбы';
    metaTag.setAttribute('content', content);
  }, [date]);

  const getNavCalList = () => {
    const lng = i18n.language;
    return getNavList(lng);
  };

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
        ageList,
        setAgeList,
        age,
        setAge,
        currentKey,
        setCurrentKey,
        partnersDate,
        setPartnersDate,
      }}
    >
      <CalcContainer>
        <Header navigationList={getNavCalList()} />
        <Box as="main">
          <Hero />
          <Suspense fallback={<MatrixLoader />}>
            <Outlet />
          </Suspense>
          <ChangeYourFate />
          <Instruction />
          <Donation />
          <Contacts />
          <GetPDFTemplate />
        </Box>
        <Footer />
      </CalcContainer>
    </MatrixContext.Provider>
  );
};

export default Calculator;
