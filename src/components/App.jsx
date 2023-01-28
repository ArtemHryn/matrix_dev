import { useLocation } from 'react-router-dom';

import { Box } from './Box';
import GlobalStyle from './Global';
import { Route, Routes } from 'react-router-dom';
import { Calculator } from 'pages/Calculator';
import { MatrixCalc } from './MatrixCalc/MatrixCalc';
import React, { useState } from 'react';
import { Main } from 'pages/Main';

const calculatorPageGradient =
  'linear-gradient(180deg, #FDFCFE 0%, #E7E0F3 13.01%, #ECE6F6 25.18%, #EDE1F4 36.71%, #F5E8F3 47.22%, #F6ECF5 54.89%, #F4ECFA 71.18%, #F4EBF9 79.3%, #F7EDF8 88.76%, #F7EBF6 100%);';

export const App = () => {
  const [isMain, setIsMain] = useState(true);
  const location = useLocation();
  // const elementRoutes = useRoutes([
  //   {
  //     path: '/',
  //     element: <Layout isMain={isMain} />,
  //     children: [
  //       { path: '/', element: <Main setIsMain={setIsMain} /> },
  //       {
  //         path: '/calculator',
  //         element: <Calculator setIsMain={setIsMain} />,
  //         children: [{ path: 'personal', element: <MatrixCalc /> }],
  //       },
  //     ],
  //   },
  // ]);
  return (
    <Box m="0 auto" backgroundImage={isMain ? 'none' : calculatorPageGradient}>
      <GlobalStyle />
      {/* <AnimatePresence mode="wait">
        {React.cloneElement(elementRoutes, { key: location.pathname })}
      </AnimatePresence> */}
      <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Main setIsMain={setIsMain} />} />
          <Route
            path="/calculator"
            element={<Calculator setIsMain={setIsMain} />}
          >
            <Route path="personal" element={<MatrixCalc />}></Route>
          </Route>
      </Routes>
    </Box>
  );
};
