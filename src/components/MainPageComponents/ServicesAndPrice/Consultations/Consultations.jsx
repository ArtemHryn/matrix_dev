import { Box } from 'components/Box';
import moneyCard from 'images/ServicesAndPrice/moneyCard.png';
import personalLife from 'images/ServicesAndPrice/personalLife.png';
import proforientation from 'images/ServicesAndPrice/proforientationCard.png';
import periodCard from 'images/ServicesAndPrice/periodCard.png';
import conscienceCard from 'images/ServicesAndPrice/conscienceCard.png';
import couplesTherapyCard from 'images/ServicesAndPrice/couplesTherapyCard.png';
import parentChildrenCard from 'images/ServicesAndPrice/parentsChildrenCard.png';
import demonOfferingCard from 'images/ServicesAndPrice/deamonOfferingCard.png';
import yearCard from 'images/ServicesAndPrice/yearCard.png';
import { ConsultaionCard } from './ConsultationCard/ConsultationCard';
import {
  ConsultationsList,
  ConsultationsTitle,
  SolutionsText,
} from './Consultations.styled';

const cards = [
  {
    img: moneyCard,
    text: 'Деньги\\Личный бренд',
  },
  { img: personalLife, text: 'Личная жизнь' },
  { img: proforientation, text: 'Профориентация' },
  { img: periodCard, text: 'Матрица периода' },
  { img: conscienceCard, text: 'Осознанность' },
  { img: couplesTherapyCard, text: 'Парная терапия' },
  { img: parentChildrenCard, text: 'Дето-родительские отношения' },
  { img: demonOfferingCard, text: 'Матрица “Демон-Жертва”' },
  { img: yearCard, text: ' Прогноз на год ' },
];

export const Consultations = () => {
  return (
    <Box>
      <ConsultationsTitle>Консультации:</ConsultationsTitle>
      <SolutionsText>для решения точечных проблем</SolutionsText>
      <ConsultationsList>
        {cards.map(card => (
          <ConsultaionCard img={card.img} text={card.text} key={card.text} />
        ))}
      </ConsultationsList>
    </Box>
  );
};
