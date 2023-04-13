import { Navigate, useLocation } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import GlobalStyle from './Global';

import { Box } from './Box';
import { Route, Routes } from 'react-router-dom';
import { Spinner } from './Spinner/Spinner';
import PersonalMatrix from './CalculatorPageComponents/PersonalMatrix/PersonalMatrix';

const Main = lazy(() => import('pages/Main'));
const Calculator = lazy(() => import('pages/Calculator'));

export const App = () => {
  const location = useLocation();
  console.log(location);
  return (
    <Box m="0 auto">
      <GlobalStyle />
      <Suspense fallback={<Spinner />}>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<></>}>
            <Route index element={<Main />} />
            <Route path="calculator" element={<Calculator />}>
              <Route path="personal" element={<PersonalMatrix />} />
            </Route>
          </Route>

          <Route path="*" element={<Navigate replace to="calculator" />} />
        </Routes>
      </Suspense>
    </Box>
  );
};
