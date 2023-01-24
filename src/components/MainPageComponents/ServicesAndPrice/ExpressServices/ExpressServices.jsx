import { Box } from 'components/Box';
import { ExpressServiceCard } from './ExpressServiceCard/ExpressServiceCard';
import {
  AdditionalInfo,
  ExpressServicesList,
  ExpressServicesTitle,
} from './ExpressServices.styled';
import card1 from 'images/ServicesAndPrice/card1.png';
import card2 from 'images/ServicesAndPrice/card2.png';
import card3 from 'images/ServicesAndPrice/card3.png';
import card4 from 'images/ServicesAndPrice/card4.png';
import card5 from 'images/ServicesAndPrice/card5.png';

const cards = [
  { img: card1, text: 'Диагностика состояния матрицы' },
  { img: card2, text: 'Совместимость' },
  { img: card3, text: 'Подбор благоприятной даты, периода' },
  { img: card4, text: 'Энергии длительного действия' },
  { img: card5, text: 'SOS - помощь' },
];
export const ExpressServices = () => {
  return (
    <Box mb='80px'>
      <ExpressServicesTitle>Экспресс-услуги:</ExpressServicesTitle>
      <ExpressServicesList>
        {cards.map(card => (
          <ExpressServiceCard img={card.img} text={card.text} key={ card.text} />
        ))}
      </ExpressServicesList>
      <AdditionalInfo>
        Также вы можете подарить трансформации своим близким. Больше о
        подарочных сертификатах тут.
      </AdditionalInfo>
    </Box>
  );
};
