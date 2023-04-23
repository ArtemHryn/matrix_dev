import React, { useEffect, useState } from 'react';
import { Box } from 'components/Box';
import {
  BtnItem,
  BtnList,
  Link,
} from '../PersonalMatrix/MatrixBtn/MatrixBtn.styled';
import Partners from './Partners/Partners';

const btnList = [
  { name: 'ПАРТНЕРЫ', type: 'partners', disabled: false },
  { name: 'КОЛЛЕКТИВ', type: 'team', disabled: true },
  { name: 'Матрица ГОДА', type: 'year_matrix', disabled: true },
];

const CompatibilityMatrix = () => {
  const [compatibilityType, setCompatibilityType] = useState('partners');
  useEffect(() => {
    const section = document.getElementById(`compatibility`);
    section.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const getMatrixType = () => {
    switch (compatibilityType) {
      case 'partners':
        return <Partners />;
      case 'karmaIssues':
        return null;
      case 'healthMatrix':
        return null;
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
          {btnList.map(({ name, type, disabled }) => (
            <BtnItem key={name}>
              {' '}
              <Link
                className={compatibilityType === type ? 'active' : null}
                onClick={() => setCompatibilityType(type)}
                disabled={disabled}
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
