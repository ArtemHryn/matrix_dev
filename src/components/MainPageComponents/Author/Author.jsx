import { Box } from 'components/Box';
import authorPhoto from 'images/author/authorPhoto.jpg';
import authorPhotoTab from 'images/author/authorTab.jpg';
import authorPhotoDesc from 'images/author/authorDesc.jpg';
import symbol1 from 'images/author/symbol1.png';
import symbol2 from 'images/author/symbol2.png';
import symbol3 from 'images/author/symbol3.png';
import symbol4 from 'images/author/symbol4.png';
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

export const Author = () => {
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
          <AuthorTitle>Автор проекта</AuthorTitle>
          <Description>
            <Name>Дарина Дупак — </Name>профессиональный инициированный
            консультант по предназначению, диагностике и коррекции судьбы
          </Description>
          <picture>
            <source srcSet={authorPhotoTab} media="(min-width: 768px)" />
            <source srcSet={authorPhoto} />
            <AuthorImg srcSet={authorPhoto} alt="Дарина Дупак" loading="lazy" />
          </picture>
          <AboutAuthor>
            <AboutAuthorListElement>
              <Symbols
                src={symbol1}
                alt="moon symbol"
                width={65}
                loading="lazy"
              />
              <AboutAuthorWork>
                Дипломированный менеджер социокультурной деятельности
              </AboutAuthorWork>
              <AboutAuthorDesc>
                Работаю над созданием личностных брендов, провожу
                трансформационные ивенты.
              </AboutAuthorDesc>
            </AboutAuthorListElement>
            <AboutAuthorListElement>
              <Symbols
                src={symbol2}
                alt="sun symbol"
                width={65}
                loading="lazy"
              />
              <AboutAuthorWork>
                Работаю по авторскому методу Наталии Ладини, известного как
                Матрица Судьбы
              </AboutAuthorWork>
              <AboutAuthorDesc>
                Владею углублёнными расчётами метода и техниками исцеления.
              </AboutAuthorDesc>
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
              <AboutAuthorDesc>
                Получила магистерскую степень по психологии в Таврическом
                национальном университете имени В. И. Вернадского
              </AboutAuthorDesc>
            </AboutAuthorListElement>
            <AboutAuthorListElement>
              <Symbols
                src={symbol4}
                alt="star symbol"
                width={65}
                loading="lazy"
              />
              <AboutAuthorDesc>
                Изучаю кармический менеджмент и причинно-следственные связи в
                Институте Азиатской Классики
              </AboutAuthorDesc>
            </AboutAuthorListElement>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
