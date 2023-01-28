import { Box } from 'components/Box';
import {
  moneyCard,
  personalLife,
  proforientation,
  periodCard,
  conscienceCard,
  couplesTherapyCard,
  parentChildrenCard,
  demonOfferingCard,
  yearCard,
  moneyCardTab,
  personalLifeTab,
  proforientationTab,
  periodCardTab,
  conscienceCardTab,
  couplesTherapyCardTab,
  parentChildrenCardTab,
  demonOfferingCardTab,
  yearCardTab,
} from './';
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
    imgtab: moneyCardTab,
  },
  { img: personalLife, text: 'Личная жизнь', imgtab: personalLifeTab },
  { img: proforientation, text: 'Профориентация', imgtab: proforientationTab },
  { img: periodCard, text: 'Матрица периода', imgtab: periodCardTab },
  { img: conscienceCard, text: 'Осознанность', imgtab: conscienceCardTab },
  {
    img: couplesTherapyCard,
    text: 'Парная терапия',
    imgtab: couplesTherapyCardTab,
  },
  {
    img: parentChildrenCard,
    text: 'Дето-родительские отношения',
    imgtab: parentChildrenCardTab,
  },
  {
    img: demonOfferingCard,
    text: 'Матрица “Демон-Жертва”',
    imgtab: demonOfferingCardTab,
  },
  { img: yearCard, text: ' Прогноз на год ', imgtab: yearCardTab },
];

export const Consultations = () => {
  return (
    <Box>
      <Box
        display={[null, 'flex']}
        alignItems={[null, 'center']}
        justifyContent={[null, 'space-between']}
        mb={['27px', '21px']}
      >
        <ConsultationsTitle>Консультации:</ConsultationsTitle>
        <SolutionsText>для решения точечных проблем</SolutionsText>
      </Box>
      <ConsultationsList>
        {cards.map(({ img, text, imgtab }) => (
          <ConsultaionCard img={img} text={text} key={text} imgtab={imgtab} />
        ))}
      </ConsultationsList>
    </Box>
  );
};
