import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Box } from 'components/Box';
import DataInput from './DataInput/DataInput';
import MatrixBtn from './MatrixBtn/MatrixBtn';
import { useMatrix } from 'pages/Calculator';

const PersonalMatrix = () => {
  const { showMatrix } = useMatrix();
  const navigate = useNavigate();

  useEffect(() => {
    navigate('fateMatrix');
  }, [navigate]);

  return (
    <Box as="section" py={['40px', null, '35px']}>
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
