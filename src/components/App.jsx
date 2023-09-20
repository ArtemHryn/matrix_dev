import { Navigate, useLocation } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { Box } from './Box';
import { Route, Routes } from 'react-router-dom';
import { Spinner } from './Spinner/Spinner';
import ScrollToTop from './Common/ScrollToTop';

const Main = lazy(() => import('pages/Main'));
const Calculator = lazy(() => import('pages/Calculator'));
const PersonalMatrix = lazy(() => import('../pages/PersonalMatrix'));
const CompatibilityMatrix = lazy(() => import('../pages/CompatibilityMatrix'));
const DeepMatrix = lazy(() => import('../pages/DeepMatrix'));
const GenericPageCalc = lazy(() => import('pages/GenericPageCalc'));
const RisingStarPageCalc = lazy(() => import('pages/RisingStarPageCalc'));
const ParentsAndChildrenPageCalc = lazy(() => import('pages/ParentsAndChildrenPageCalc'));
const LightGatePageCalc = lazy(() => import('pages/LightGatePageCalc'));

export const App = () => {
  const location = useLocation();

  return (
    <Box m="0 auto">
      <ScrollToTop />
      <Suspense fallback={<Spinner />}>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Main />} />
          <Route path="calculator" element={<Calculator />}>
            <Route path="personal" element={<PersonalMatrix />} />
            <Route path="compatibility" element={<CompatibilityMatrix />} />
            <Route path="deep_calc" element={<DeepMatrix />}>
              <Route index element={<Navigate to="generic" />} />
              <Route path="generic" element={<GenericPageCalc />} />
              <Route path="rising_star" element={<RisingStarPageCalc />} />
              <Route path="parents_and_children" element={<ParentsAndChildrenPageCalc />} />
              <Route path="light_gate" element={<LightGatePageCalc />} />
            </Route>
          </Route>
          <Route path="*" element={<Navigate to="calculator" />} />
        </Routes>
      </Suspense>
    </Box>
  );
};
