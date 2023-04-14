import {
  YearModal,
  CoupleTherapy,
  ParentChildren,
  Conscience,
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
  'Каждый год и 3 месяца у человека происходит смена жизненных периодов. Расчет матрицы периода позволит проследить множество процессов, которые будут происходить, предусмотреть испытания, сложности с которыми можно столкнуться, спланировать важные события исходя из энергий в периоде. Узнать перспективы и возможности, которые открываются в данном периоде и как ими воспользоваться.';

const periodCardText2 =
  'Матрица периода поможет найти выход тем, кто запутался, у кого повторяются определенные события, даст ответ на вопрос «Что со мной сейчас происходит и почему?».';

const moneyCardText1 =
  'Узнаете фишки кармической финансовой грамотности, изобильности и экологичного заработка';

const demonOffering1 =
  'Проработка жертвенного состояния; избавление от боли, душевных и физических страданий; гармонизация психологического состояния; ощущение себя на трех уровнях сознания (души, разума и тела) в каждом действии; избавление от того, что тормозит развитие на каждом уровне.';
const demonOffering2 =
  'Расчет 4 матриц и их отработка (40 дней ритуальных практик по системе матрицы). Отдельная духовная практика для улучшения своей судьбы и для развития своих способностей. Пропуск человека в Мир его истинного Духа!';

const money1 = 'Данная консультация поможет:';

export const cards = [
  {
    img: moneyCard,
    text: 'Деньги\\Личный бренд',
    imgtab: moneyCardTab,
    imgDesc: moneyCardDesc,
    price: '$70',
    info: {
      textBefore: [money1],
      list: [
        'решить любые запросы на тему денег;',
        'раскрыть потенциал финансов в вашей жизни; ',
        'выбрать самый комфортный способ заработка, открыть свой бизнес или пойти работать в найм;',
        'монетизировать любимое дело;',
        'узнать каких условий придерживаться, чтоб увеличить доход.',
      ],
      textAfter: [moneyCardText1],
      meeting: 'Видеовстреча 60 минут + трансформация 1 блок',
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
    info: {
      textBefore: ['Данная консультация поможет: '],
      list: [
        'определиться с дальнейшим направлением в жизни и выбрать специальность для поступления. ',
        'выбрать сферу, которая будет соответствовать задачам предназначения. ',
        'ответить на вопрос: "Стоит ли переквалифицироваться или пойти на глубинное обучение?", учитывая таланты и предрасположенность к определенным сферам деятельности, а также хобби и интересы. ',
        'выяснить, стоит ли делать свой продукт или работать в команде; структура или творческий поток; работать дистанционно или в офисе и т.д.',
        'раскрыть и приумножить свои таланты, начать зарабатывать легко и в удовольствие.',
      ],
      meeting: 'Видеовстреча 60 минут + трансформация 1 блок',
    },
  },
  {
    img: periodCard,
    text: 'Матрица периода',
    imgtab: periodCardTab,
    imgDesc: periodCardDesc,
    price: '$28',
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
    price: '$100',
    component: Conscience,
  },
  {
    img: couplesTherapyCard,
    text: 'Парная терапия',
    imgtab: couplesTherapyCardTab,
    imgDesc: couplesTherapyCardDesc,
    price: '$150',
    component: CoupleTherapy,
  },
  {
    img: parentChildrenCard,
    text: 'Детско-родительские отношения',
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
    price: '$100',
    info: {
      textBefore: [demonOffering1, 'Данная консультация:'],
      list: [
        'проявляет невидимые пороки человека;',
        'способствует улучшению интуиции;',
        'помогает прийти к принятию и пониманию себя;',
        'помогает гармонизировать все виды отношений.',
      ],
      textAfter: [demonOffering2],
      meeting: 'Видеовстреча 90 минут + трансформация',
      additionInfo: [
        '! Требует минимального знакомства с базовым уровнем собственной матрицы',
      ],
    },
  },
  {
    img: yearCard,
    text: ' Прогноз на год ',
    imgtab: yearCardTab,
    imgDesc: yearCardDesc,
    price: '$42',
    component: YearModal,
  },
  {
    img: gameCard,
    text: 'Игра“Кармические Путешествия”',
    imgtab: gameCardTab,
    imgDesc: gameCardDesc,
    component: GameModal,
    isHideStar: true,
  },
];
