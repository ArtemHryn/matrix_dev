import { lazy, useEffect, useState } from 'react';
import { Box } from 'components/Box';
import { BtnItem, BtnList, Link } from '../PersonalMatrix/MatrixBtn/MatrixBtn.styled';
import { useMatrix } from 'pages/Calculator';
import MatrixLoader from 'components/Spinner/MatrixLoader';
import btnList from 'helper/compatibilityCalcButtonList';
import { useTranslation } from 'react-i18next';

const Partners = lazy(() => import('./Partners/Partners'));
const Team = lazy(() => import('./Team/Team'));
const Annual = lazy(() => import('./Annual/Annual'));
const Demon = lazy(() => import('./Demon/Demon'));

const CompatibilityMatrix = () => {
  const [compatibilityType, setCompatibilityType] = useState('partners');
  const { setShowMatrix, setPartnersDate } = useMatrix();
  const [showSpinner, setShowSpinner] = useState(true);
  const { i18n } = useTranslation();

  const onChangeCal = type => {
    setCompatibilityType(type);
    setShowMatrix(false);
    setPartnersDate([]);
    setShowSpinner(true);
    setTimeout(() => {
      setShowSpinner(false);
    }, 500);
  };

  useEffect(() => {
    const section = document.getElementById(`compatibility`);
    section.scrollIntoView({ behavior: 'smooth' });
    const timer = setTimeout(() => {
      setShowSpinner(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const getMatrixType = () => {
    switch (compatibilityType) {
      case 'partners':
        return <Partners />;
      case 'team':
        return <Team />;
      case 'year_matrix':
        return <Annual />;
      case 'demon':
        return <Demon />;
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
          {btnList(i18n.language).map(({ name, type }) => (
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
        {showSpinner ? <MatrixLoader /> : getMatrixType()}
      </Box>
    </Box>
  );
};

export default CompatibilityMatrix;
