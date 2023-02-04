import { Box } from 'components/Box';

import { ConsultaionCard } from './ConsultationCard/ConsultationCard';
import {
  ConsultationsList,
  ConsultationsTitle,
  ContactMeSocial,
  IndividualRequestElement,
  IndividualRequestTitle,
} from './Consultations.styled';

import {
  YearModal,
  CoupleTherapy,
  ParentChildren,
  Conscience,
  DemonOffering,
  MoneyModal,
  Proforientation,
  PersonalLife,
} from 'components/MainPageComponents/ModalWindows';

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


const cards = [
  {
    img: moneyCard,
    text: 'Деньги\\Личный бренд',
    imgtab: moneyCardTab,
    imgDesc: moneyCardDesc,
    price: '$70',
    component: MoneyModal,
  },
  {
    img: personalLife,
    text: 'Личная жизнь',
    imgtab: personalLifeTab,
    imgDesc: personalLifeDesc,
    price: '$70',
    component: PersonalLife,
  },
  {
    img: proforientation,
    text: 'Профориентация',
    imgtab: proforientationTab,
    imgDesc: proforientationDesc,
    price: '$70',
    component: Proforientation,
  },
  {
    img: periodCard,
    text: 'Матрица периода',
    imgtab: periodCardTab,
    imgDesc: periodCardDesc,
    price: '$70',
    component: <div></div>,
  },
  {
    img: conscienceCard,
    text: 'Осознанность',
    imgtab: conscienceCardTab,
    imgDesc: conscienceCardDesc,
    price: '$70',
    component: Conscience,
  },
  {
    img: couplesTherapyCard,
    text: 'Парная терапия',
    imgtab: couplesTherapyCardTab,
    imgDesc: couplesTherapyCardDesc,
    price: '$70',
    component: CoupleTherapy,
  },
  {
    img: parentChildrenCard,
    text: 'Дето-родительские отношения',
    imgtab: parentChildrenCardTab,
    imgDesc: parentChildrenCardDesc,
    price: '$70',
    component: ParentChildren,
  },
  {
    img: demonOfferingCard,
    text: 'Матрица “Демон-Жертва”',
    imgtab: demonOfferingCardTab,
    imgDesc: demonOfferingCardDesc,
    price: '$70',
    component: DemonOffering,
  },
  {
    img: yearCard,
    text: ' Прогноз на год ',
    imgtab: yearCardTab,
    imgDesc: yearCardDesc,
    price: '$70',
    component: YearModal,
  },
  {
    img: gameCard,
    text: 'Игра“Кармические Путешествия”',
    imgtab: gameCardTab,
    imgDesc: gameCardDesc,
    price: '$70',
    component: <div></div>,
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
        {cards.map(({ img, text, imgtab, imgDesc, price, component }) => (
          <ConsultaionCard
            img={img}
            text={text}
            key={text}
            imgtab={imgtab}
            imgDesc={imgDesc}
            price={price}
            component={component}
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
