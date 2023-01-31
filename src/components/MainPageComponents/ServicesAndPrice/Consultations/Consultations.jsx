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
  moneyCardDesc,
  personalLifeDesc,
  proforientationDesc,
  periodCardDesc,
  conscienceCardDesc,
  couplesTherapyCardDesc,
  parentChildrenCardDesc,
  demonOfferingCardDesc,
  yearCardDesc,
} from './';
import { ConsultaionCard } from './ConsultationCard/ConsultationCard';
import {
  ConsultationsList,
  ConsultationsTitle,
} from './Consultations.styled';

const cards = [
  {
    img: moneyCard,
    text: 'Деньги\\Личный бренд',
    imgtab: moneyCardTab,
    imgDesc: moneyCardDesc,
  },
  {
    img: personalLife,
    text: 'Личная жизнь',
    imgtab: personalLifeTab,
    imgDesc: personalLifeDesc,
  },
  {
    img: proforientation,
    text: 'Профориентация',
    imgtab: proforientationTab,
    imgDesc: proforientationDesc,
  },
  {
    img: periodCard,
    text: 'Матрица периода',
    imgtab: periodCardTab,
    imgDesc: periodCardDesc,
  },
  {
    img: conscienceCard,
    text: 'Осознанность',
    imgtab: conscienceCardTab,
    imgDesc: conscienceCardDesc,
  },
  {
    img: couplesTherapyCard,
    text: 'Парная терапия',
    imgtab: couplesTherapyCardTab,
    imgDesc: couplesTherapyCardDesc,
  },
  {
    img: parentChildrenCard,
    text: 'Дето-родительские отношения',
    imgtab: parentChildrenCardTab,
    imgDesc: parentChildrenCardDesc,
  },
  {
    img: demonOfferingCard,
    text: 'Матрица “Демон-Жертва”',
    imgtab: demonOfferingCardTab,
    imgDesc: demonOfferingCardDesc,
  },
  { img: yearCard, text: ' Прогноз на год ', imgtab: yearCardTab, imgDesc: yearCardDesc },
];

export const Consultations = () => {
  return (
    <Box>
      <Box
        display={[null, 'flex', 'flex']}
        alignItems={[null, 'center']}
        justifyContent={[null, 'space-between', 'space-between']}
        mb={['27px', '21px', '21px']}
      >
        <ConsultationsTitle>Консультации:</ConsultationsTitle>
      </Box>
      <ConsultationsList>
        {cards.map(({ img, text, imgtab, imgDesc }) => (
          <ConsultaionCard
            img={img}
            text={text}
            key={text}
            imgtab={imgtab}
            imgDesc={imgDesc}
          />
        ))}
      </ConsultationsList>
    </Box>
  );
};
