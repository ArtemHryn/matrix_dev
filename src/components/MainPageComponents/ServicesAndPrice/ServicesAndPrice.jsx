import { Box } from 'components/Box';
import personalMatrix from 'images/ServicesAndPrice/personalMatrix.png';
import awarenessMatrix from 'images/ServicesAndPrice/awarenessMatrix.png';
import { ServiceCard } from './ServiceCard/ServiceCard';
import {
  CardList,
  ContactMeSocial,
  FourStagesTitle,
  IndividualRequestTitle,
  ServiceAndPriceTitle,
  ServiceWarning,
} from './ServicesAndPrice.styled';
import { Consultations } from './Consultations/Consultations';
import { ExpressServices } from './ExpressServices/ExpressServices';
import { AuthorMasterClass } from './AuthorMasterClass/AuthorMasterClass';

const cards = [
  {
    name: 'Целостная личная матрица',
    img: personalMatrix,
    text: 'Ответит на все вопросы,  предоставит фундаментальные знания о своей личности',
  },
  {
    name: 'Матрица 9 колен рода',
    img: personalMatrix,
    text: 'Проработка родовых сценариев, исцеление 9 колен рода, социальная реализация, родовое изобилие',
  },
  {
    name: 'Матрица осознанности',
    img: awarenessMatrix,
    text: 'Глубинное познание истинного я, усиление защиты судьбы, проход в мир истинного Духа',
  },
  {
    name: 'Звезда процветания',
    img: personalMatrix,
    text: 'Исполнение желаний, ключи материализации, ключи признания, почестей и известности',
  },
];

const sectionGradient =
  'linear-gradient(to bottom,#fff,rgba(158, 118, 255, 0.1) 16%,rgba(158, 118, 255, 0.1) 26%,#fff 100%)';

export const ServicesAndPrice = () => {
  return (
    <Box
      as="section"
      pt="40px"
      pb="40px"
      backgroundImage={sectionGradient}
      id="4methods"
    >
      <Box
        maxWidth={['430px', '768px', '1440px']}
        px={['60px', '33px', '100px']}
        m="0 auto"
      >
        <ServiceAndPriceTitle>Услуги и прайс</ServiceAndPriceTitle>
        <FourStagesTitle>
          Глубинные проработки: 4 уровня матрицы
        </FourStagesTitle>
        <CardList>
          {cards.map(({ name, img, text }) => (
            <ServiceCard name={name} img={img} text={text} key={name} />
          ))}
        </CardList>
        <ServiceWarning>
          *Каждый уровень прорабатывается последовательно
        </ServiceWarning>
        <Consultations />
        <IndividualRequestTitle>
          Также вы можете разобрать вашу проблему по индивидуальному запросу
        </IndividualRequestTitle>
        <Box display="flex" mb="68px" justifyContent="center">
          <ContactMeSocial href="https://instagram.com/dari.karma?igshid=YmMyMTA2M2Y=">
            Instagram
          </ContactMeSocial>
          <ContactMeSocial href="https://t.me/+eAczkWqkslIzMjky">
            Telegram
          </ContactMeSocial>
        </Box>
        <ExpressServices />
        <AuthorMasterClass />
      </Box>
    </Box>
  );
};
