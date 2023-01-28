import { Box } from 'components/Box';
import authorPhoto from 'images/author/authorPhoto.jpg';
import authorPhotoTab from 'images/author/authorTab.jpg';
import symbol1 from 'images/authorSymbols/symbol1.png';
import symbol2 from 'images/authorSymbols/symbol2.png';
import symbol3 from 'images/authorSymbols/symbol3.png';
import symbol4 from 'images/authorSymbols/symbol4.png';
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
    <Box as="section" pt="45px" pb="40px" id="author">
      <Box
        maxWidth={['430px', '768px', '1440px']}
        px={['60px', '33px', '100px']}
        m="0 auto"
      >
        <AuthorTitle>Автор проекта</AuthorTitle>
        <Description>
          <Name>Дарина Дупак — </Name>профессиональный инициированный
          консультант по предназначению, диагностике и коррекции судьбы
        </Description>
        <picture>
          <source srcSet={authorPhotoTab} media="(min-width: 768px)" />
          <source srcSet={authorPhoto} />
          <AuthorImg srcSet={authorPhoto} alt="Darina" />
        </picture>
        <AboutAuthor>
          <AboutAuthorListElement>
            <Symbols src={symbol1} alt="moon symbol" width={65} />
            <AboutAuthorWork>
              Дипломированный менеджер социокультурной деятельности
            </AboutAuthorWork>
            <AboutAuthorDesc>
              Работаю над созданием личностных брендов, провожу
              трансформационные ивенты.
            </AboutAuthorDesc>
          </AboutAuthorListElement>
          <AboutAuthorListElement>
            <Symbols src={symbol2} alt="sun symbol" width={65} />
            <AboutAuthorWork>
              Работаю по авторскому методу Наталии Ладини, известного как
              Матрица Судьбы
            </AboutAuthorWork>
            <AboutAuthorDesc>
              Владею углублёнными расчётами метода и техниками исцеления.
            </AboutAuthorDesc>
          </AboutAuthorListElement>
        </AboutAuthor>
        <Box as='ul' display='flex'>
          <AboutAuthorListElement>
            <Symbols src={symbol3} alt="star symbol" width={65} />
            <AboutAuthorDesc>
              Получаю магистрерскую степень по психологии в Таврическом
              национальном университете имени В. И. Вернадского
            </AboutAuthorDesc>
          </AboutAuthorListElement>
          <AboutAuthorListElement>
            <Symbols src={symbol4} alt="star symbol" width={65} />
            <AboutAuthorDesc>
              Изучаю кармический менеджмент и причинно-следственные связи в
              Институте Азиатской Классики
            </AboutAuthorDesc>
          </AboutAuthorListElement>
        </Box>
      </Box>
    </Box>
  );
};
