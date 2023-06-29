import { Box } from 'components/Box';
import starLine from 'images/whatIsMatrix/starLine.png';
import starLineTab from 'images/whatIsMatrix/starLineTab.png';

import { MatrixFact } from './MatrixFact/MatrixFact';
import {
  AboutMethod,
  LinkToCalculator,
  MatrixCreator,
  MethodList,
  StarLineImg,
  Title,
} from './WhatIsMatrix.styled';
import { useTranslation } from 'react-i18next';
import factAboutMatrxiFn from 'helper/factAboutMatrxi';

export const WhatIsMatrix = () => {
  const { t, i18n } = useTranslation();

  const getFactsAboutMatrix = () => {
    const lng = i18n.language;
    return factAboutMatrxiFn(lng);
  };
  return (
    <Box as="section" py={['40px', '40px', '90px']} id="aboutMatrix">
      <Box
        maxWidth={['400px', '768px', '1440px']}
        px={['60px', '33px', '100px']}
        m="0 auto"
      >
        <Title>
          {t('whatIsMatrixTitle1')}{' '}
          <Title as="span" display="block" fontStyle="italic">
            {t('whatIsMatrixTitle2')}
          </Title>
        </Title>
        <Box
          display={[null, 'flex', 'flex']}
          alignItems="center"
          mb={[null, '40px', '47px']}
        >
          <MatrixCreator>{t('whatIsMatrixMatrixCreator')}</MatrixCreator>
          <picture>
            <source srcSet={starLineTab} media="(min-width: 768px)" />
            <StarLineImg srcSet={starLine} alt="star line" />
          </picture>

          <AboutMethod>{t('whatIsMatrixAboutMethod')}</AboutMethod>
        </Box>
        <MethodList>
          {getFactsAboutMatrix().map(fact => (
            <MatrixFact
              name={fact.name}
              img={fact.img}
              imgDesk={fact.imgDesk}
              text={fact.text}
              key={fact.name}
            />
          ))}
        </MethodList>
        <LinkToCalculator to="calculator">
          {t('whatIsMatrixLinkToCalculator')}
        </LinkToCalculator>
      </Box>
    </Box>
  );
};
