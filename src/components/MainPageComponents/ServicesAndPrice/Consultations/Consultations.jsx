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
  gameCard,
  gameCardTab,
  gameCardDesc,
} from './';
import { ConsultaionCard } from './ConsultationCard/ConsultationCard';
import {
  ConsultationsList,
  ConsultationsTitle,
  ContactMeSocial,
  IndividualRequestElement,
  IndividualRequestTitle,
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
  {
    img: yearCard,
    text: ' Прогноз на год ',
    imgtab: yearCardTab,
    imgDesc: yearCardDesc,
  },
  {
    img: gameCard,
    text: 'Игра“Кармические Путешествия”',
    imgtab: gameCardTab,
    imgDesc: gameCardDesc,
  },
];

export const Consultations = () => {
  return (
    <Box mb={'68px'}>
      <Box
        display={[null, 'flex', 'flex']}
        alignItems={[null, 'center']}
        justifyContent={[null, 'space-between', 'space-between']}
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
        <IndividualRequestElement>
          <IndividualRequestTitle>
            Также вы можете разобрать вашу проблему по индивидуальному запросу
          </IndividualRequestTitle>
          <Box display="flex" justifyContent="center">
            <ContactMeSocial
              href="https://instagram.com/dari.karma?igshid=YmMyMTA2M2Y="
              target="_blank"
              rel="noreferrer noopener"
            >
              Instagram
            </ContactMeSocial>
            <ContactMeSocial
              href="https://t.me/+eAczkWqkslIzMjky"
              target="_blank"
              rel="noreferrer noopener"
            >
              Telegram
            </ContactMeSocial>
          </Box>
        </IndividualRequestElement>
      </ConsultationsList>
    </Box>
  );
};
