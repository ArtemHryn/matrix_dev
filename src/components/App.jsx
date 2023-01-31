import { useLocation } from 'react-router-dom';

import { Box } from './Box';
import GlobalStyle from './Global';
import { Route, Routes } from 'react-router-dom';
import { MatrixCalc } from './MatrixCalc/MatrixCalc';
import React, { lazy, Suspense, useState } from 'react';
import { Spinner } from './Spinner/Spinner';

const Main = lazy(() => import('pages/Main'));
const Calculator = lazy(() => import('pages/Calculator'));

const calculatorPageGradient =
  'linear-gradient(180deg, #FDFCFE 0%, #E7E0F3 13.01%, #ECE6F6 25.18%, #EDE1F4 36.71%, #F5E8F3 47.22%, #F6ECF5 54.89%, #F4ECFA 71.18%, #F4EBF9 79.3%, #F7EDF8 88.76%, #F7EBF6 100%);';

export const App = () => {
  const [isMain, setIsMain] = useState(true);
  const location = useLocation();

  return (
    <Box m="0 auto" backgroundImage={isMain ? 'none' : calculatorPageGradient}>
      <GlobalStyle />
      <Suspense fallback={<Spinner/>}>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Main setIsMain={setIsMain} />} />
          <Route
            path="/calculator"
            element={<Calculator setIsMain={setIsMain} />}
          >
            <Route path="personal" element={<MatrixCalc />}></Route>
          </Route>
        </Routes>
      </Suspense>
    </Box>
  );
};
