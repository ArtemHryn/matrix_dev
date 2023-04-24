import {
  Suspense,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/MainPageComponents/Header/Header';
import { Hero } from 'components/CalculatorPageComponents/Hero/Hero';
import { ChangeYourFate } from 'components/CalculatorPageComponents/ChangeYourFate/ChangeYourFate';
import Donation from 'components/CalculatorPageComponents/Donation/Donation';
import Contacts from 'components/CalculatorPageComponents/Contacts/Contacts';
import GetPDFTemplate from 'components/CalculatorPageComponents/GetPDFTemplate/GetPDFTemplate';
import Footer from 'components/CalculatorPageComponents/Footer/Footer';

import { CalcContainer } from 'components/Common/Common.styled';

import navigationListCalc from 'components/CalculatorPageComponents/navigationLisCalc';
import { content } from 'helper/content';
import { Spinner } from 'components/Spinner/Spinner';

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

  useEffect(() => {
    const metaTag = document.querySelector('meta[name="description"]');
    document.title = 'Dari.Karma | Калькулятор Матрицы Судьбы';
    metaTag.setAttribute('content', content);
  }, [date]);

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
        <Header navigationList={navigationListCalc} />
        <Hero />
        <Suspense fallback={<Spinner />}>
          <Outlet />
        </Suspense>
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
