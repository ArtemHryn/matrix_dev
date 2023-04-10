import { useLocation } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import GlobalStyle from './Global';

import { Box } from './Box';
import { Route, Routes } from 'react-router-dom';
import { Spinner } from './Spinner/Spinner';
import FateMatrix from './CalculatorPageComponents/PersonalMatrix/MatrixCalculation/FateMatrix/FateMatrix';
import PersonalMatrix from './CalculatorPageComponents/PersonalMatrix/PersonalMatrix';

const Main = lazy(() => import('pages/Main'));
const Calculator = lazy(() => import('pages/Calculator'));

export const App = () => {
  const location = useLocation();

  return (
    <Box m="0 auto">
      <GlobalStyle />
      <Suspense fallback={<Spinner />}>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Main />} />
          <Route path="/calculator" element={<Calculator />}>
            <Route path="personal" element={<PersonalMatrix />}>       
              <Route path="fateMatrix" element={<FateMatrix />} />
              <Route path="karmaIssues" element={<div></div>} />
              <Route path="healthMatrix" element={<div></div>} />
              <Route path="prognosis" element={<div></div>} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </Box>
  );
};
