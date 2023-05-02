import React, { useEffect, useState } from 'react';
import { Box } from 'components/Box';
import {
  BtnItem,
  BtnList,
  Link,
} from '../PersonalMatrix/MatrixBtn/MatrixBtn.styled';
import Partners from './Partners/Partners';
import Team from './Team/Team';
import { useMatrix } from 'pages/Calculator';
import Annual from './Annual/Annual';

const btnList = [
  { name: 'ПАРТНЕРЫ', type: 'partners' },
  { name: 'КОЛЛЕКТИВ', type: 'team' },
  { name: 'Матрица ГОДА', type: 'year_matrix' },
];

const CompatibilityMatrix = () => {
  const [compatibilityType, setCompatibilityType] = useState('partners');
  const { setShowMatrix, setPartnersDate } = useMatrix();

  const onChangeCal = type => {
    setCompatibilityType(type);
    setShowMatrix(false);
    setPartnersDate([]);
  };

  useEffect(() => {
    const section = document.getElementById(`compatibility`);
    section.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const getMatrixType = () => {
    switch (compatibilityType) {
      case 'partners':
        return <Partners />;
      case 'team':
        return <Team />;
      case 'year_matrix':
        return <Annual />;
      default:
        break;
    }
  };
  return (
    <Box as="section" py={['40px', null, '35px']} id="compatibility">
      <Box
        maxWidth={['400px', '768px', '1440px']}
        position="relative"
        px={['15px', '32px', '60px']}
        m="0 auto"
      >
        <BtnList>
          {btnList.map(({ name, type }) => (
            <BtnItem key={name}>
              {' '}
              <Link
                className={compatibilityType === type ? 'active' : null}
                onClick={() => {
                  onChangeCal(type);
                }}
              >
                {name}
              </Link>
            </BtnItem>
          ))}
        </BtnList>
        {getMatrixType()}
      </Box>
    </Box>
  );
};

export default CompatibilityMatrix;
