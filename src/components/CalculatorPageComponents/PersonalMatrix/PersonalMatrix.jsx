import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from 'components/Box';
import DataInput from './DataInput/DataInput';
import MatrixBtn from './MatrixBtn/MatrixBtn';
import { useMatrix } from 'pages/Calculator';

const PersonalMatrix = () => {
  const { showMatrix } = useMatrix();

  useEffect(() => {
    const section = document.getElementById(`personal`);
    section.scrollIntoView({ behavior: 'smooth' });
  });

  return (
    <Box as="section" py={['40px', null, '35px']} id="personal">
      <Box
        maxWidth={['400px', '768px', '1440px']}
        position="relative"
        px={['15px', '32px', '60px']}
        m="0 auto"
      >
        <DataInput />

        {showMatrix && (
          <>
            <MatrixBtn />
            <Outlet />
          </>
        )}
      </Box>
    </Box>
  );
};

export default PersonalMatrix;
