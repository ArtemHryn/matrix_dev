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

const textBeforeCard1aRu =
  'Определяется состояние каждой энергии в матрице на данный момент. Подойдёт для тех, кто раньше уже был на консультации (у меня или другого мастера), находится в трансформации или же разбирал свою матрицу самостоятельно и желает узнать в каком состоянии находятся энергии исходя из запроса. ';

const textBeforeCard1aUa =
  'Визначається стан кожної енергії в матриці на цей момент. Підходить для тих, хто вже раніше був на консультації (у мене або іншого майстра), перебуває в процесі трансформації або самостійно розбирав свою матрицю і бажає дізнатися, в якому стані знаходяться енергії згідно з запитом.';

const textBeforeCard1bRu =
  'Также вы получите рекомендации для гармонизации данных энергий.';
const textBeforeCard1bUa =
  'Також ви отримаєте рекомендації для гармонізації цих енергій.';

const textBeforeCard3aRu =
  'Подбор даты или периода для важного события в вашей жизни (открытие бизнеса, важная встреча, подписание договоров, запуск своего проекта, дата знакомства с родителями, дата свадьбы и т.д.)';

const textBeforeCard3aUa =
  'Підбір дати або періоду для важливої події у вашому житті (відкриття бізнесу, важлива зустріч, підписання договорів, запуск вашого проєкту, дата знайомства з батьками, дата весілля і т.д.)';

const textBeforeCard3bRu = 'Красивая дата ≠ благоприятная дата';

const textBeforeCard3bUa = 'Гарна дата ≠ сприятлива дата';

const textBeforeCard3cRu =
  'Разберем какие задачи, препятствия, усиления несёт желаемая дата или период. Подберём лучшую дату исходя из запроса.';

const textBeforeCard3cUa =
  'Розберемо, які завдання, перешкоди та посилення несе бажана дата або період. Підберемо найкращу дату, відповідно до запиту.';

const textBeforeCard2aRu =
  'Данная консультация быстрый и удобный инструмент для определения:';
const textBeforeCard2aUa =
  'Дана консультація є швидким і зручним інструментом для визначення:';

const textBeforeCard2bRu =
  'Поможет понять, наладить и гармонизировать отношения с любым партнёром (родители, дети, друзья, знакомые, коллеги, начальник, вторая половинка)';
const textBeforeCard2bUa =
  'Допоможе зрозуміти, налагодити та гармонізувати відносини з будь-яким партнером (батьками, дітьми, друзями, знайомими, колегами, другою половинкою)';

const textBeforeCard4aRu =
  'Числа окружают нас повсюду, влияют на нас, так как несут в себе определённые энергии, и могут помогать нам и нашим близким, если правильно их использовать.';

const textBeforeCard4aUa =
  'Числа оточують нас скрізь і впливають на нас, оскільки несуть у собі певну енергію, можуть допомагати нам і нашим близьким, якщо правильно їх використовувати.';

const textBeforeCard4bRu =
  'Подбор благоприятной энергии для номера телефона, авто, квартиры, дома, банковской карты и т.д. для точечного улучшения и влияния на качество вашей жизни.';
const textBeforeCard4bUa =
  'Підбір сприятливої енергії для телефону, авто, квартири, будинку, банківської картки й т.д. для покращення та впливу на якість вашого життя.';

const textBeforeCard5aRu = 'Экстренный разбор запроса в день обращения.';
const textBeforeCard5aUa = 'Терміновий розгляд запиту у день звернення.';

const textBeforeCard5bRu =
  'Поможет вам рассмотреть ситуацию с нескольких сторон, понять причинно-следственные связи и принять верное решение.';
const textBeforeCard5bUa =
  "Допоможе вам розглянути ситуацію з різних сторін, зрозуміти причинно-наслідкові зв'язки та прийняти правильне рішення.";
const textBeforeCard5cRu = 'Включает в себя:';
const textBeforeCard5cUa = 'В консультацію входить:';

export const getExpressServiceCards = lng => {
  return [
    {
      img: card1,
      text:
        lng === 'ua'
          ? 'Діагностика стану матриці'
          : 'Диагностика состояния матрицы',
      imgTab: card1Tab,
      imgDesc: card1Desc,
      price: '$21',
      info: {
        textBefore:
          lng === 'ua'
            ? [textBeforeCard1aUa, textBeforeCard1bUa]
            : [textBeforeCard1aRu, textBeforeCard1bRu],
        meeting:
          lng === 'ua'
            ? 'Видеовстреча или аудиосообщения в телеграмм'
            : 'Видеовстреча или аудиосообщения в телеграм',
        additionInfo:
          lng === 'ua'
            ? [
                '*Ця консультація не передбачає трактування вашої матриці та енергій в ній.',
                '*Проводитися за допомогою карт методу або карт Таро.',
              ]
            : [
                '*Данная консультация не подразумевает трактовку вашей матрицы и энергий в ней.',
                '*Проводится с помощью карт Метода или карт Таро.',
              ],
      },
      isHideStar: true,
    },
    {
      img: card3,
      text:
        lng === 'ua'
          ? 'Підбір сприятливої дати або періоду'
          : 'Подбор благоприятной даты, периода',
      imgTab: card3Tab,
      imgDesc: card3Desc,
      price: '$17',
      info: {
        textBefore:
          lng === 'ua'
            ? [textBeforeCard3aUa, textBeforeCard3bUa, textBeforeCard3cUa]
            : [textBeforeCard3aRu, textBeforeCard3bRu, textBeforeCard3cRu],
        meeting:
          lng === 'ua' ? 'Відеозустріч 30 хвилин' : 'Видеовстреча 30 минут',
      },
      isHideStar: true,
    },
    {
      img: card2,
      text: lng === 'ua' ? 'Сумісність' : 'Совместимость',
      imgTab: card2Tab,
      imgDesc: card2Desc,
      price: '$21',
      info: {
        textBefore: lng === 'ua' ? [textBeforeCard2aUa] : [textBeforeCard2aRu],
        list:
          lng === 'ua'
            ? [
                'задач у партнерських відносинах;',
                'формату комунікації у партнерстві;',
                'що очікувати від партнера і як правильно взаємодіяти з ним;',
                'чому найчастіше виникають конфлікти і як їх ефективно вирішувати;',
                'як зробити це партнерство позитивним і досягти потрібних результатів.',
              ]
            : [
                'задач в паре;',
                'формата связи в партнёрстве;',
                'что ожидать от партнёра и как с ним правильно взаимодействовать;',
                'из-за чего чаще всего могут возникать конфликты и как их решать эффективно; ',
                'как вывести данное партнёрство в плюс и получить нужные результаты.',
              ],
        textAfter: lng === 'ua' ? [textBeforeCard2bUa] : [textBeforeCard2bRu],
        meeting:
          lng === 'ua' ? 'Відеозустріч 30 хвилин' : 'Видеовстреча 30 минут',
      },
      isHideStar: true,
    },

    {
      img: card4,
      text:
        lng === 'ua' ? 'Енергії тривалої дії' : 'Энергии длительного действия',
      imgTab: card4Tab,
      imgDesc: card4Desc,
      price: '$7',
      info: {
        textBefore:
          lng === 'ua'
            ? [textBeforeCard4aUa, textBeforeCard4bUa]
            : [textBeforeCard4aRu, textBeforeCard4bRu],
        meeting:
          lng === 'ua'
            ? 'Відеозустріч або аудіоповідомлення в Telegram.'
            : 'Видеовстреча или аудиосообщения в телеграм',
      },
      isHideStar: true,
    },
    {
      img: card5,
      text: lng === 'ua' ? 'SOS-допомога' : 'SOS - помощь',
      imgTab: card5Tab,
      imgDesc: card5Desc,
      price: '$28',
      info: {
        textBefore:
          lng === 'ua'
            ? [textBeforeCard5aUa, textBeforeCard5bUa, textBeforeCard5cUa]
            : [textBeforeCard5aRu, textBeforeCard5bRu, textBeforeCard5cRu],
        list:
          lng === 'ua'
            ? [
                'експрес-розбір матриці',
                'додаткову консультацію таролога щодо поточної ситуації.',
              ]
            : [
                'экспресс-разбор матрицы',
                'дополнительную консультацию таролога по ситуации на данный момент.',
              ],
        meeting:
          lng === 'ua'
            ? 'Відеозустріч з 2 майстрами'
            : 'Видеовстреча с 2 мастерами',
      },
      isHideStar: true,
    },
  ];
};
