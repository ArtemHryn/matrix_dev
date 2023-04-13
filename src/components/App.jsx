import { Navigate, Outlet, useLocation } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';

import { Box } from './Box';
import { Route, Routes } from 'react-router-dom';
import { Spinner } from './Spinner/Spinner';
import PersonalMatrix from './CalculatorPageComponents/PersonalMatrix/PersonalMatrix';
import ScrollToTop from './Common/ScrollToTop';

const Main = lazy(() => import('pages/Main'));
const Calculator = lazy(() => import('pages/Calculator'));

export const App = () => {
  const location = useLocation();
  return (
    <Box m="0 auto">
      <ScrollToTop />

        <Routes key={location.pathname} location={location}>
          <Route
            path="/"
            element={
              <Suspense fallback={<Spinner />}>
                <Outlet />
              </Suspense>
            }
          >
            <Route index element={<Main />} />
            <Route path="calculator" element={<Calculator />}>
              <Route path="personal" element={<PersonalMatrix />} />
            </Route>
          </Route>
          <Route path="*" element={<Navigate to="/calculator" />} />
        </Routes>
    </Box>
  );
};
