import { Box } from './Box';
import GlobalStyle from './Global';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Calculator } from 'pages/Calculator';
import { MatrixCalc } from './MatrixCalc/MatrixCalc';
// import { Matrix } from './Matrix/Matrix';
// import { MatrixForm } from './Matrix/MatrixForm/MatrixForm';
// import { Title } from './Matrix/Title/Title';

export const App = () => {
  return (
    <Box
      m="0 auto"
      backgroundImage="linear-gradient(180deg, #FDFCFE 0%, #E7E0F3 13.01%, #ECE6F6 25.18%, #EDE1F4 36.71%, #F5E8F3 47.22%, #F6ECF5 54.89%, #F4ECFA 71.18%, #F4EBF9 79.3%, #F7EDF8 88.76%, #F7EBF6 100%);"
    >
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Calculator />}>
            <Route path="personal" element={<MatrixCalc />}></Route>
          </Route>
        </Route>
      </Routes>
    </Box>
  );
};
