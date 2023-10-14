import { useTranslation } from 'react-i18next';
import { Box } from 'components/Box';
import MatrixNavBtn from 'components/CalculatorPageComponents/DeepMatrix/MatrixNavBtn/MatrixNavBtn';
import getDeepBtnList from 'helper/deepBtnList';
import { Outlet } from 'react-router-dom';
import { Suspense, useEffect } from 'react';

const DeepMatrix = () => {
  const { i18n } = useTranslation();
  const btnList = getDeepBtnList(i18n.language);
  useEffect(() => {
    const section = document.querySelector('#deepPage');
    section.scrollIntoView({ behavior: 'smooth' });
  }, []);
  return (
    <Box as="section" py={['40px', null, '35px']} id="deepPage">
      <Box
        maxWidth={['400px', '768px', '1440px']}
        position="relative"
        px={['15px', '32px', '60px']}
        m="0 auto"
      >
        <MatrixNavBtn list={btnList} />
        <Suspense fallback={<div></div>}>
          <Outlet />
        </Suspense>
      </Box>
    </Box>
  );
};

export default DeepMatrix;
