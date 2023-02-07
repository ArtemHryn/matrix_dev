import {
  YearModal,
  CoupleTherapy,
  ParentChildren,
  Conscience,
  DemonOffering,
  Proforientation,
  PersonalLife,
  GameModal,
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

const periodCardText1 =
  'Каждый год и 3 месяца у человека происходит смена жизненных периодов. Расчет матрицы периода позволит проследить множество процессов, которые будут происходить, предусмотреть испытания, сложности с которыми можно столкнуться, спланировать важные события исходя из энергий в периоде. Узнать перспективы и возможности, которую открываются в данном периоде и как ими воспользоваться.';

const periodCardText2 =
  'Матрица периода поможет найти выход тем, кто запутался, у кого повторяются определенные события, даст ответ на вопрос «Что со мной сейчас происходит и почему?».';

  const moneyCardText1 =
    'Поможет узнать каких условий придерживаться, чтоб увеличить доход.';
    const moneyCardText2 = 'Фишки кармической финансовой грамотности, изобильности и экологичного заработка'

export const cards = [
  {
    img: moneyCard,
    text: 'Деньги\\Личный бренд',
    imgtab: moneyCardTab,
    imgDesc: moneyCardDesc,
    price: '$70',
    info: {
      list: [
        'Данная консультация поможет решить любые запросы на тему денег, а также раскрыть потенциал финансов в вашей жизни.',
        'Выбрать самый комфортный способ заработка;',
        'ткрыть свой бизнес или пойти работать в найм;',
        'Mонетизировать любимой дело.',
      ],
      textAfter: [moneyCardText1, moneyCardText2],
      meeting: 'видеовстреча 60 минут + трансформация 1 блок',
    },
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
    price: '$30',
    info: {
      textBefore: [periodCardText1, periodCardText2],
      meeting: 'Видеовстреча до 60 минут + трансформация ',
    },
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
    component: GameModal,
  },
];
