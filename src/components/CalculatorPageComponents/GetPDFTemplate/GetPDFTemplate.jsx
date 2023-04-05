import React from 'react';
import { Box } from 'components/Box';

import {
  HowToGetTemplate,
  Img,
  InstaLink,
  TemplateTitle,
} from './GetPDFTemplate.styled';
import template from 'images/Calculator/PDFTemplate/matrixTemplate.webp';
import tempalteTab from 'images/Calculator/PDFTemplate/templateTab.webp';
import tempalteDesk from 'images/Calculator/PDFTemplate/templateDesk.webp';
import image from 'images/Calculator/PDFTemplate/PDFTemplateCircle.webp';

const GetPDFTemplate = () => {
  return (
    <Box
      as="section"
      py={['40px', null, '80px']}
      backgroundImage={`url('${image}')`}
      backgroundSize={['400px', '550px']}
      backgroundPosition={['50% -100px', '50% -160px', '20%']}
      backgroundRepeat="no-repeat"
    >
      <Box
        maxWidth={['400px', '768px', '1440px']}
        px={['37px', '32px', '60px']}
        m="0 auto"
        display={[null, null, 'flex']}
        justifyContent="space-between"
      >
        <picture>
          <source srcSet={tempalteDesk} media="(min-width: 1440px)" />
          <source srcSet={tempalteTab} media="(min-width: 768px)" />
          <Img src={template} alt="PDF template" />
        </picture>
        <Box
          maxWidth={[null, null, '50%']}
          display={[null, null, 'flex']}
          flexDirection="column"
          justifyContent="center"
        >
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
    </Box>
  );
};

export default GetPDFTemplate;
