import { Box } from 'components/Box';
import { ExpressServiceCard } from './ExpressServiceCard/ExpressServiceCard';
import {
  AdditionalInfo,
  ExpressServicesList,
  ExpressServicesTitle,
} from './ExpressServices.styled';

import {
  card1,
  card2,
  card3,
  card4,
  card5,
  card1Tab,
  card2Tab,
  card3Tab,
  card4Tab,
  card5Tab,
  card1Desc,
  card2Desc,
  card3Desc,
  card4Desc,
  card5Desc,
} from './';

const cards = [
  {
    img: card1,
    text: 'Диагностика состояния матрицы',
    imgTab: card1Tab,
    imgDesc: card1Desc,
  },
  {
    img: card3,
    text: 'Подбор благоприятной даты, периода',
    imgTab: card3Tab,
    imgDesc: card3Desc,
  },
  { img: card2, text: 'Совместимость', imgTab: card2Tab, imgDesc: card2Desc },

  {
    img: card4,
    text: 'Энергии длительного действия',
    imgTab: card4Tab,
    imgDesc: card4Desc,
  },
  { img: card5, text: 'SOS - помощь', imgTab: card5Tab, imgDesc: card5Desc },
];
export const ExpressServices = () => {
  return (
    <Box mb="80px">
      <ExpressServicesTitle>Экспресс-услуги:</ExpressServicesTitle>
      <ExpressServicesList>
        {cards.map(({ img, text, imgTab, imgDesc }) => (
          <ExpressServiceCard
            key={text}
            img={img}
            text={text}
            imgTab={imgTab}
            imgDesc={imgDesc}
          />
        ))}
      </ExpressServicesList>
      <AdditionalInfo>
        Также вы можете подарить трансформации своим близким. Больше о
        подарочных сертификатах тут.
      </AdditionalInfo>
    </Box>
  );
};
