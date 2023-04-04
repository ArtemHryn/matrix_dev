import React from 'react';
import { Box } from 'components/Box';

import {
  HowToGetTemplate,
  Img,
  InstaLink,
  TemplateTitle,
} from './GetPDFTemplate.styled';
import template from 'images/Calculator/PDFTemplate/matrixTemplate.webp';
import tempalteTab from 'images/Calculator/PDFTemplate/templateTab.webp'
import image from 'images/Calculator/PDFTemplate/PDFTemplateCircle.webp';

const GetPDFTemplate = () => {
  return (
    <Box
      as="section"
      py={['40px']}
      backgroundImage={`url('${image}')`}
      backgroundSize={['400px', '550px']}
      backgroundPosition={['0% -100px', '50% -160px']}
      backgroundRepeat="no-repeat"
    >
      <Box
        maxWidth={['400px', '768px', '1440px']}
        px={['37px', '32px', '60px']}
        m="0 auto"
      >
        <picture>
          <source srcSet={tempalteTab} media="(min-width: 768px)" />
          <Img src={template} alt="PDF template" />
        </picture>
        <TemplateTitle>
          Получи PDF-шаблон для расчета Матрицы Судьбы!
        </TemplateTitle>
        <HowToGetTemplate>
          Подписывайся на{' '}
          <InstaLink
            href="https://www.instagram.com/dari.karma/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Instagram
          </InstaLink>{' '}
          и пиши в личные сообщения кодовую фразу “Хочу Шаблоны”
        </HowToGetTemplate>
      </Box>
    </Box>
  );
};

export default GetPDFTemplate;
