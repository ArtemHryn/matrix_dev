import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import React, { lazy, Suspense, useEffect } from 'react';

import { Box } from './Box';
import { Route, Routes } from 'react-router-dom';
import { Spinner } from './Spinner/Spinner';
import PersonalMatrix from './CalculatorPageComponents/PersonalMatrix/PersonalMatrix';
import ScrollToTop from './Common/ScrollToTop';

const Main = lazy(() => import('pages/Main'));
const Calculator = lazy(() => import('pages/Calculator'));

export const App = () => {
  const location = useLocation();
  const navigation = useNavigate();
  useEffect(() => {
    navigation(location.pathname);
  }, [location.pathname, navigation]);
  return (
    <Box m="0 auto">
      <ScrollToTop />
      <Suspense fallback={<Spinner />}>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Main />} />
          <Route path="calculator" element={<Calculator />}>
            <Route path="personal" element={<PersonalMatrix />} />
          </Route>
          <Route path="*" element={<Navigate to="calculator" />} />
        </Routes>
      </Suspense>
    </Box>
  );
};
