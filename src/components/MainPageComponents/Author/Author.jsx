import { Box } from 'components/Box';
import authorPhotoDesc from 'images/author/authorDesc.webp';
import symbol1 from 'images/author/symbol1.webp';
import symbol2 from 'images/author/symbol2.webp';
import symbol3 from 'images/author/symbol3.webp';
import symbol4 from 'images/author/symbol4.webp';
import {
  AboutAuthor,
  AboutAuthorWork,
  AboutAuthorListElement,
  AuthorImg,
  AuthorTitle,
  Description,
  Name,
  AboutAuthorDesc,
  Symbols,
} from './Author.styled';
import { Trans, useTranslation } from 'react-i18next';

export const Author = () => {
  const { t } = useTranslation();
  return (
    <Box as="section" py={['40px', '40px', '90px']} id="author">
      <Box
        maxWidth={['400px', '768px', '1440px']}
        px={['60px', '33px', '100px']}
        m="0 auto"
        display={[null, null, 'flex']}
      >
        <Box
          as="img"
          src={authorPhotoDesc}
          alt="Дарина Дупак"
          display={['none', 'none', 'block']}
          width="460px"
          height="707px"
          mr="75px"
          loading="lazy"
        />

        <Box>
          <AuthorTitle>{t('projectAuthor')}</AuthorTitle>
          <Description>
            <Trans i18nKey="authroDesc">
              <Name>Дарина Дупак — </Name>профессиональный инициированный
              консультант по предназначению, диагностике и коррекции судьбы
            </Trans>
          </Description>

          <AuthorImg
            srcSet={authorPhotoDesc}
            alt="Дарина Дупак"
            loading="lazy"
          />

          <AboutAuthor>
            <AboutAuthorListElement>
              <Symbols
                src={symbol1}
                alt="moon symbol"
                width={65}
                loading="lazy"
              />
              <AboutAuthorWork>{t('aboutAuthorWork1')}</AboutAuthorWork>
              <AboutAuthorDesc>{t('aboutAuthorWork2')}</AboutAuthorDesc>
            </AboutAuthorListElement>
            <AboutAuthorListElement>
              <Symbols
                src={symbol2}
                alt="sun symbol"
                width={65}
                loading="lazy"
              />
              <AboutAuthorWork>{t('aboutAuthorWork3')}</AboutAuthorWork>
              <AboutAuthorDesc>{t('aboutAuthorWork4')}</AboutAuthorDesc>
            </AboutAuthorListElement>
          </AboutAuthor>
          <Box as="ul" display={[null, 'flex']}>
            <AboutAuthorListElement>
              <Symbols
                src={symbol3}
                alt="star symbol"
                width={65}
                loading="lazy"
              />
              <AboutAuthorDesc>{t('aboutAuthorWork5')}</AboutAuthorDesc>
            </AboutAuthorListElement>
            <AboutAuthorListElement>
              <Symbols
                src={symbol4}
                alt="star symbol"
                width={65}
                loading="lazy"
              />
              <AboutAuthorDesc>{t('aboutAuthorWork6')}</AboutAuthorDesc>
            </AboutAuthorListElement>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
