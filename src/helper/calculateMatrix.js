import { ageArcanesList } from './positionLists';
import soul from 'images/Calculator/healthTips/soul.webp';
import sahasrara from 'images/Calculator/healthTips/sahasrara.webp';
import adjna from 'images/Calculator/healthTips/adjna.webp';
import vishudha from 'images/Calculator/healthTips/vishudha.webp';
import anahata from 'images/Calculator/healthTips/anahata.webp';
import manipura from 'images/Calculator/healthTips/manipura.webp';
import svadhistana from 'images/Calculator/healthTips/svadhistana.webp';
import muladhara from 'images/Calculator/healthTips/muladhara.webp';
import earth from 'images/Calculator/healthTips/earth.webp';

export function checkNum(num) {
  if (+num > 22) {
    return String(num)
      .split('')
      .reduce((acc, number) => {
        return acc + +number;
      }, 0);
  }
  return +num;
}

export function allData(date, isGenerated, calCanter2 = true) {
  const data = {
    ...date,
  };
  Object.keys(data).forEach(element => {
    if (element === 'name') return;
    if (element === 'year') {
      data[element] = checkNum(checkNum(data[element]));
      return;
    }
    data[element] = checkNum(data[element]);
  });
  if (!isGenerated) {
    data.bottom1 = checkNum(data.day + data.month + data.year);
    data.center = checkNum(data.day + data.month + data.year + data.bottom1);
    data.topLeft1 = checkNum(data.day + data.month);
    data.topRight1 = checkNum(data.month + data.year);
    data.bottomLeft1 = checkNum(data.day + data.bottom1);
    data.bottomRight1 = checkNum(data.bottom1 + data.year);
  }

  data.bottom3 = checkNum(data.center + data.bottom1);
  data.bottom2 = checkNum(data.bottom3 + data.bottom1);
  data.top3 = checkNum(data.center + data.month);
  data.top2 = checkNum(data.month + data.top3);
  data.left3 = checkNum(data.center + data.day);
  data.left2 = checkNum(data.day + data.left3);
  data.right3 = checkNum(data.year + data.center);
  data.right2 = checkNum(data.year + data.right3);

  if (calCanter2) {
    data.center2 = checkNum(data.topLeft1 + data.topRight1 + data.bottomLeft1 + data.bottomRight1);
  }

  data.topLeft3 = checkNum(data.center2 + data.topLeft1);
  data.topLeft2 = checkNum(data.topLeft1 + data.topLeft3);
  data.topRight3 = checkNum(data.center2 + data.topRight1);
  data.topRight2 = checkNum(data.topRight1 + data.topRight3);
  data.bottomLeft3 = checkNum(data.center2 + data.bottomLeft1);
  data.bottomLeft2 = checkNum(data.bottomLeft1 + data.bottomLeft3);
  data.bottomRight3 = checkNum(data.center2 + data.bottomRight1);
  data.bottomRight2 = checkNum(data.bottomRight1 + data.bottomRight3);

  data.innerTopLeft = checkNum(data.left3 + data.top3);
  data.innerTopRight = checkNum(data.right3 + data.top3);
  data.innerBottomLeft = checkNum(data.bottom3 + data.left3);
  data.innerBottomRight = checkNum(data.bottom3 + data.right3);

  data.innerTop1 = checkNum(data.top3 + data.innerTopLeft);
  data.innerTop2 = checkNum(data.center + data.top3);
  data.innerTop3 = checkNum(data.top3 + data.innerTopRight);

  data.innerLeft1 = checkNum(data.left3 + data.innerTopLeft);
  data.innerLeft2 = checkNum(data.center + data.left3);
  data.innerLeft3 = checkNum(data.left3 + data.innerBottomLeft);

  data.innerRight1 = checkNum(data.right3 + data.innerTopRight);
  data.innerRight2 = checkNum(data.center + data.right3);
  data.innerRight3 = checkNum(data.right3 + data.innerBottomRight);

  data.innerBottom1 = checkNum(data.bottom3 + data.innerBottomLeft);
  data.innerBottom2 = checkNum(data.center + data.bottom3);
  data.innerBottom3 = checkNum(data.bottom3 + data.innerBottomRight);

  data.sky = checkNum(data.bottom1 + data.month);
  data.earth = checkNum(data.day + data.year);
  data.personal = checkNum(data.sky + data.earth);

  data.father = checkNum(data.topLeft1 + data.bottomRight1);
  data.mother = checkNum(data.topRight1 + data.bottomLeft1);
  data.social = checkNum(data.father + data.mother);

  data.spirit = checkNum(data.personal + data.social);
  data.planet = checkNum(data.social + data.spirit);
  data.insidePower = checkNum(data.center + data.center2);

  data.healthTopLeft = checkNum(data.center2 + data.topLeft3);
  data.healthTopRight = checkNum(data.center2 + data.topRight3);
  data.healthBottomRight = checkNum(data.center2 + data.bottomRight3);
  data.healthBottomLeft = checkNum(data.center2 + data.bottomLeft3);

  return data;
}

export const getKarmaIssueData = (info, lng) => {
  const {
    year,
    month,
    day,
    bottom1,
    topLeft1,
    topRight1,
    bottomRight1,
    bottomLeft1,
    left3,
    top3,
    right3,
    bottom3,
    topLeft3,
    topRight3,
    bottomRight3,
    bottomLeft3,
    innerTopLeft,
    innerTopRight,
    innerBottomLeft,
    innerBottomRight,
  } = info;
  const data = [
    {
      karmaName: lng === 'ua' ? 'Зовнішня карма' : 'Внешняя карма',
      info: [
        {
          type: lng === 'ua' ? 'Особиста' : 'Личная',
          energyInfo: [
            {
              name: lng === 'ua' ? 'Особистісна карма' : 'Личностная карма',
              energy: day,
            },
            {
              name: lng === 'ua' ? 'Духовна карма' : 'Духовная карма',
              energy: month,
            },
            {
              name:
                lng === 'ua'
                  ? 'Карма здоров’я і матеріальних результатів'
                  : 'Карма здоровья и материальных результатов',
              energy: year,
            },
            {
              name:
                lng === 'ua'
                  ? 'Карма минулого життя і древньої мудрості'
                  : 'Карма прошлой жизни и древней мудрости',
              energy: bottom1,
            },
          ],
        },
        {
          type: lng === 'ua' ? 'Родова' : 'Родовая',
          energyInfo: [
            {
              name: lng === 'ua' ? 'Духовна карма роду батька' : 'Духовная карма рода отца',
              energy: topLeft1,
            },
            {
              name: lng === 'ua' ? 'Духовна карма роду матері' : 'Духовная карма рода матери',
              energy: topRight1,
            },
            {
              name:
                lng === 'ua'
                  ? 'Сакрально-генетична карма роду матері'
                  : 'Сакрально-генетическая карма рода матери',
              energy: bottomLeft1,
            },
            {
              name:
                lng === 'ua'
                  ? 'Сакрально-генетична карма роду батька'
                  : 'Сакрально-генетическая карма рода отца',
              energy: bottomRight1,
            },
          ],
        },
      ],
    },
    {
      karmaName: lng === 'ua' ? 'Внутрішня карма' : 'Внутреняя карма',
      info: [
        {
          type: lng === 'ua' ? 'Особиста' : 'Личная',
          energyInfo: [
            {
              name: lng === 'ua' ? 'Дитячо-батьківська карма' : 'Детско-родительская карма',
              energy: left3,
            },
            {
              name: lng === 'ua' ? 'Особистісна творча карма' : 'Личная творческая карма',
              energy: top3,
            },
            {
              name: lng === 'ua' ? 'Матеріальна карма' : 'Денежно-материальная карма',
              energy: right3,
            },
            {
              name:
                lng === 'ua'
                  ? 'Карма партнерських сексуальних стосунків '
                  : 'Карма партнерских сексуальных отношений',
              energy: bottom3,
            },
          ],
        },
        {
          type: lng === 'ua' ? 'Родова' : 'Родовая',
          energyInfo: [
            {
              name: lng === 'ua' ? 'Творча карма роду батька' : 'Творческая карма рода отца',
              energy: topLeft3,
            },
            {
              name: lng === 'ua' ? 'Творча карма роду матері' : 'Творческая карма рода матери',
              energy: topRight3,
            },
            {
              name:
                lng === 'ua' ? 'Партнерська карма роду матері' : 'Партнёрская карма рода матери',
              energy: bottomLeft3,
            },
            {
              name: lng === 'ua' ? 'Партнерська карма роду батька' : 'Партнёрская карма рода отца',
              energy: bottomRight3,
            },
          ],
        },
      ],
    },
    {
      karmaName: lng === 'ua' ? 'Ключі внутрішньої матриці' : 'Ключи внутренней матрицы',
      info: [
        {
          type: lng === 'ua' ? 'Гроші' : 'Деньги',
          energyInfo: [
            {
              name: lng === 'ua' ? 'Карма творчості та грошей' : 'Карма творчества и денег',
              energy: `${right3} - ${top3} - ${innerTopRight}`,
            },
            {
              name:
                lng === 'ua'
                  ? 'Карма партнерства та процвітання'
                  : 'Карма партнёрства и процветания',
              energy: `${bottom3} - ${right3} - ${innerBottomRight}`,
            },
          ],
        },
        {
          type: lng === 'ua' ? "Сім'я" : 'Семья',
          energyInfo: [
            {
              name: lng === 'ua' ? 'Карма сімейної творчості' : 'Карма семейного творчества',
              energy: `${left3} - ${top3} - ${innerTopLeft}`,
            },
            {
              name:
                lng === 'ua'
                  ? "Карма заміжжя та створення сім'ї"
                  : 'Карма замужества и создания семьи',
              energy: `${bottom3} - ${left3} - ${innerBottomLeft}`,
            },
          ],
        },
      ],
    },
  ];
  return data;
};

const getHealthChakraTips = lng => {
  return [
    {
      chakraName: 'Душа',
      goal: 'задачі та контракти душі, янгол-охоронець, вище Я, Хроніки Акаші, призначення',
      bodyPart: 'за межами тіла, на відстані витягнутої руки над головою',
      purpose:
        'доступ до будь-якої інформації, Хроніки Акаші, допомога янголів, розмова з "Вищим Я"',
      internalCondition: '',
      disturbance: '',
      archangel: 'Архангел: Метатрон',
      bgColor: 'linear-gradient(180deg, #FEFCFF 0%, #FFDCFE 100%);',
      img: soul,
    },
    {
      chakraName: 'Сахасрара',
      goal: 'Свідомість, Думка, Інформація, Знання, Розуміння, Трансцендентність, Іманентність, Медитація',
      bodyPart: "тім'ячко, залози гіпофіз, кора мозку, центральна нервова система",
      purpose: 'розуміння',
      internalCondition: 'щастя',
      disturbance: 'депресія, апатія, зніяковіння, відчуження',
      archangel: 'Задкіель',
      verb: 'знаю',
      bgColor: 'linear-gradient(180deg, #FFF 0%, #ECD3FF 100%);',
      img: sahasrara,
    },
    {
      chakraName: 'Аджна',
      goal: 'Світло, Колір, Зір, Інтуїція, Візуалізація, Уява, Яснобачення, видіння',
      bodyPart: 'центр голови, зона трохи вище рівня очей, епіфіз, очі',
      purpose: 'інтуїція, сприймання (світу)',
      internalCondition: 'натхнення, образне мислення',
      disturbance: 'сліпота, головний біль, кошмари, напруга очей, поганий зір',
      archangel: 'Рафаїл',
      verb: 'бачу',
      bgColor: 'linear-gradient(180deg, #FFF 0%, #E1E2FF 100%);',
      img: adjna,
    },
    {
      chakraName: lng === 'ua' ? 'Вішудха' : 'Вишудха',
      goal: 'Ефір, Звук, Вібрація, Спілкування, Мантри, Телепатія, Творчість',
      bodyPart: 'шия, плечі, руки, горло, щитоподібна залоза',
      purpose: 'спілкування, творчість',
      internalCondition: 'синтез ідей в символи',
      disturbance:
        'біль у горлі, шиї, застуди, захворювання щитоподібної залози, проблеми зі слухом',
      archangel: 'Михаїл',
      verb: 'говорю',
      bgColor: 'linear-gradient(180deg, #FFF 0%, #DEF3FF 100%);',
      img: vishudha,
    },
    {
      chakraName: 'Анахата',
      goal: 'Кохання, Повітря, Дихання, Рівновага, стосунки, Симпатія, Єдність, Зцілення',
      bodyPart: 'серце, тимус, легені, перикард, руки',
      purpose: 'любов',
      internalCondition: 'співчуття',
      disturbance: 'астма, підвищений тиск, захворювання серця та легень',
      archangel: 'Чамуїл',
      verb: 'люблю',
      bgColor: 'linear-gradient(180deg, #FFF 0%, #E1FFE4 100%);',
      img: anahata,
    },
    {
      chakraName: lng === 'ua' ? 'Маніпура' : 'Манипура',
      goal: 'Вогонь, Сила, Незалежність, Воля, Енергія, Обмін речовин, Перетворення, Самоповага',
      bodyPart: 'від пупка до сонячного сплетіння, травна система',
      purpose: 'воля, сила, наполегливість',
      internalCondition: 'сміх, радість',
      disturbance: 'виразка, діабет, гіпоглікемія, порушення травлення',
      archangel: 'Йофіїл/Джофіїл',
      verb: 'можу',
      bgColor: 'linear-gradient(180deg, #FFF 0%, #FEFFD8 100%);',
      img: manipura,
    },
    {
      chakraName: lng === 'ua' ? 'Свадхістана' : 'Свадхистана',
      goal: 'Вода, Зміни, Протилежності, Рух, Задоволення, Емоції, Сексуальність, Турбота, Ясновідчуття',
      bodyPart:
        'низ живота, статеві органи, матка, сечовий міхур, серцево-судинна система, яєчники, яєчка',
      purpose: 'бажання, задоволення, сексуальність, народження дітей',
      internalCondition: 'відчуття',
      disturbance: 'імпотенція, фригідність, захворювання матки, сечового міхура, нирок',
      archangel: 'Гавриїл',
      verb: 'відчуваю',
      bgColor: 'linear-gradient(180deg, #FFF 0%, #FFEFD1 100%);',
      img: svadhistana,
    },
    {
      chakraName: 'Муладхара',
      goal: 'Коріння, Заземлення, Виживання, Тіло, Їжа, Матерія, Початок',
      bodyPart: 'промежина, основа хребта, куприкове сплетення, ноги, кістки, товста кишка, зуби',
      purpose: 'виживання, закріплення',
      internalCondition: 'спокій, безпека, стабільність',
      disturbance: 'проблеми з вагою та колінами, геморой, остеоартроз',
      archangel: 'Уриїл',
      verb: 'маю/є',
      bgColor: 'linear-gradient(180deg, #FFF 0%, #FFDEDE 100%);',
      img: muladhara,
    },
    {
      chakraName: 'Земля',
      goal: "минулі життя, нижній світ, зв'язок із землею, рід, сакрально-генетична карма",
      bodyPart: 'поза межами тіла, під ногами, йде в надра землі',
      purpose: "зв'язок із землею, родова система, регресія",
      archangel: 'відсутній, відповідає за дану чакру Проматір Земля',
      bgColor: 'linear-gradient(180deg, #FFF 0%, #E9E0E0 100%)',
      img: earth,
    },
  ];
};

export const getHealthInfo = (info, lng) => {
  const {
    day,
    month,
    year,
    left2,
    left3,
    innerLeft2,
    center,
    right3,
    top2,
    top3,
    innerTop2,
    bottom3,
    bottom1,
    topLeft1,
    topRight1,
    topLeft2,
    topRight2,
    topLeft3,
    topRight3,
    healthTopLeft,
    healthTopRight,
    center2,
    bottomLeft3,
    bottomRight3,
    bottomLeft1,
    bottomRight1,
  } = info;
  const personalEmotionList = [
    checkNum(day + month),
    checkNum(left2 + top2),
    checkNum(left3 + top3),
    checkNum(innerLeft2 + innerTop2),
    checkNum(center + center),
    checkNum(right3 + bottom3),
    checkNum(year + bottom1),
  ];

  const integralEmotionList = [
    checkNum(topLeft1 + topRight1),
    checkNum(topLeft2 + topRight2),
    checkNum(topLeft3 + topRight3),
    checkNum(healthTopLeft + healthTopRight),
    checkNum(center2 + center2),
    checkNum(bottomLeft3 + bottomRight3),
    checkNum(bottomLeft1 + bottomRight1),
  ];

  const totalPers = personalEmotionList.reduce((accum, key) => {
    return accum + key;
  }, 0);

  const healthCardTips = getHealthChakraTips(lng);

  const list = [
    {
      id: 1,
      cardName: lng === 'ua' ? 'Особиста карта здоров’я' : 'Личная карта здоровья',
      columnName: lng === 'ua' ? ['Енергія', 'Фізика', 'Емоції'] : ['Энергия', 'Физика', 'Эмоции'],
      chakraList: [
        {
          chakraName: 'Сахасрара',
          physics: day,
          energy: month,
          emotions: '20',
          color: '#DCB9FF',
        },
        {
          chakraName: 'Аджна',
          physics: left2,
          energy: top2,
          emotions: '20',
          color: '#B9C0FF',
        },
        {
          chakraName: lng === 'ua' ? 'Вішудха' : 'Вишудха',
          physics: left3,
          energy: top3,
          emotions: '20',
          color: '#C1F4FF',
        },
        {
          chakraName: 'Анахата',
          physics: innerLeft2,
          energy: innerTop2,
          emotions: '20',
          color: '#C5F1D7',
        },
        {
          chakraName: lng === 'ua' ? 'Маніпура' : 'Манипура',
          physics: center,
          energy: center,
          emotions: '20',
          color: '#F7F9A1',
        },
        {
          chakraName: lng === 'ua' ? 'Свадхістана' : 'Свадхистана',
          physics: right3,
          energy: bottom3,
          emotions: '20',
          color: '#FCDCAC',
        },
        {
          chakraName: 'Муладхара',
          physics: year,
          energy: bottom1,
          emotions: '20',
          color: '#FFB7B7',
        },
      ],
      total: checkNum(totalPers),
    },
    {
      id: 2,
      cardName: lng === 'ua' ? 'Цілісна карта здоров’я' : 'Целостная карта здоровья',
      columnName:
        lng === 'ua' ? ['Особиста', 'Родова', 'Зцілююча'] : ['Личная', 'Родовая', 'Исцеляющая'],
      chakraList: [
        {
          chakraName: 'Сахасрара',
          color: '#DCB9FF',
        },
        {
          chakraName: 'Аджна',
          color: '#B9C0FF',
        },
        {
          chakraName: lng === 'ua' ? 'Вішудха' : 'Вишудха',
          color: '#C1F4FF',
        },
        {
          chakraName: 'Анахата',
          color: '#C5F1D7',
        },
        {
          chakraName: lng === 'ua' ? 'Маніпура' : 'Манипура',
          color: '#F7F9A1',
        },
        {
          chakraName: lng === 'ua' ? 'Свадхістана' : 'Свадхистана',
          color: '#FCDCAC',
        },
        {
          chakraName: 'Муладхара',
          color: '#FFB7B7',
        },
      ],
    },
  ];
  personalEmotionList.forEach((element, index) => {
    list[0].chakraList[index].emotions = element;
  });
  list.forEach(card =>
    card.chakraList.forEach(element => {
      const tip = healthCardTips.find(tipEl => tipEl.chakraName === element.chakraName);
      element.tip = tip;
    })
  );

  list[0].chakraList.forEach((element, index) => {
    list[1].chakraList[index].energy = element.emotions;
    list[1].chakraList[index].physics = integralEmotionList[index];
    list[1].chakraList[index].emotions = checkNum(
      list[1].chakraList[index].physics + list[1].chakraList[index].energy
    );
  });
  return list;
};

export const authorHelthCard = (info, lng) => {
  const {
    day,
    month,
    year,
    left2,
    left3,
    innerLeft2,
    center,
    right2,
    right3,
    top2,
    top3,
    innerTop2,
    bottom3,
    bottom2,
    bottom1,
    innerBottom2,
    innerRight2,
  } = info;

  const personalEmotionList = [
    checkNum(day + month),
    checkNum(left2 + top2),
    checkNum(left3 + top3),
    checkNum(innerLeft2 + innerTop2),
    checkNum(center + center),
    checkNum(innerRight2 + innerBottom2),
    checkNum(right3 + bottom3),
    checkNum(right2 + bottom2),
    checkNum(year + bottom1),
  ];

  const totalPers = personalEmotionList.reduce((accum, key) => {
    return accum + key;
  }, 0);

  const healthCardTips = getHealthChakraTips(lng);
  const list = {
    id: 3,
    cardName: lng === 'ua' ? 'Особиста карта здоров’я' : 'Личная карта здоровья',
    columnName: lng === 'ua' ? ['Енергія', 'Фізика', 'Емоції'] : ['Энергия', 'Физика', 'Эмоции'],
    chakraList: [
      {
        chakraName: 'Душа',
        physics: day,
        energy: month,
        emotions: '20',
        color: '#FEE1FF',
      },
      {
        chakraName: 'Сахасрара',
        physics: left2,
        energy: top2,
        emotions: '20',
        color: '#DCB9FF',
      },
      {
        chakraName: 'Аджна',
        physics: left3,
        energy: top3,
        emotions: '20',
        color: '#B9C0FF',
      },
      {
        chakraName: lng === 'ua' ? 'Вішудха' : 'Вишудха',
        physics: innerLeft2,
        energy: innerTop2,
        emotions: '20',
        color: '#C1F4FF',
      },
      {
        chakraName: 'Анахата',
        physics: center,
        energy: center,
        emotions: '20',
        color: '#C5F1D7',
      },
      {
        chakraName: lng === 'ua' ? 'Маніпура' : 'Манипура',
        physics: innerRight2,
        energy: innerBottom2,
        emotions: '20',
        color: '#F7F9A1',
      },
      {
        chakraName: lng === 'ua' ? 'Свадхістана' : 'Свадхистана',
        physics: right3,
        energy: bottom3,
        emotions: '20',
        color: '#FCDCAC',
      },
      {
        chakraName: 'Муладхара',
        physics: right2,
        energy: bottom2,
        emotions: '20',
        color: '#FFB7B7',
      },
      {
        chakraName: 'Земля',
        physics: year,
        energy: bottom1,
        emotions: '20',
        color: '#e1b095',
      },
    ],
    total: checkNum(totalPers),
  };
  personalEmotionList.forEach((element, index) => {
    list.chakraList[index].emotions = element;
  });

  list.chakraList.forEach(element => {
    const tip = healthCardTips.find(tipEl => tipEl.chakraName === element.chakraName);
    element.tip = tip;
  });
  return list;
};

export const getPeriod = info => {
  const { day, topLeft1, month, topRight1, year, bottomRight1, bottom1, bottomLeft1 } = info;
  const elements = [];
  const arcanes = [day, topLeft1, month, topRight1, year, bottomRight1, bottom1, bottomLeft1];
  let arcaneIndex = 0;
  for (let i = 0; i < 80; i += 1.25) {
    if (i === 0 || i % 10 === 0) {
      elements.push({ age: i, arcane: arcanes[arcaneIndex] });
      arcaneIndex++;
      continue;
    }
    elements.push({ age: i });
  }

  elements.forEach((element, index, array) => {
    try {
      if (index === 60) {
        element.arcane = checkNum(array[index - 4].arcane + array[0].arcane);
        return;
      }
      if (element.age % 5 === 0 && element.age % 10 !== 0) {
        element.arcane = checkNum(array[index - 4].arcane + array[index + 4].arcane);
      }
    } catch (error) {
      console.log(index);
    }
  });

  elements.forEach((element, index, array) => {
    try {
      if (index === 62) {
        element.arcane = checkNum(array[index - 2].arcane + array[0].arcane);
        return;
      }
      if (element.age % 2.5 === 0 && element.age % 5 !== 0) {
        element.arcane = checkNum(array[index - 2].arcane + array[index + 2].arcane);
      }
    } catch (error) {
      console.log(index);
    }
  });

  elements.forEach((element, index, array) => {
    try {
      if (index === 63) {
        element.arcane = checkNum(array[index - 1].arcane + array[0].arcane);
        return;
      }
      if (element.age % 1.25 === 0 && element.age % 2.5 !== 0) {
        element.arcane = checkNum(array[index - 1].arcane + array[index + 1].arcane);
      }
    } catch (error) {
      console.log(index);
    }
  });
  const ageList = elements.map((element, index) => ({
    ...element,
    ...ageArcanesList[index],
    display: element.age % 10 === 0 || index === 0 ? ['none', 'none', 'none'] : null,
  }));

  return ageList;
};

export const getCompatData = (partners, isFullOverlap) => {
  const result = partners.reduce((acc, partner) => {
    Object.entries(partner).forEach(([key, value]) => {
      acc[key] = checkNum((acc[key] || 0) + value);
    });
    return acc;
  }, {});
  delete result.order;
  return isFullOverlap ? result : allData(result, true, false);
};

export const getPartnersChakra = (info, lng) => {
  const healthOfEachPartner = info.map(el => getHealthInfo(el, lng));
  const partnersChakraList = healthOfEachPartner.map(el => el[0].chakraList);
  const list = {
    id: 1,
    cardName: lng === 'ua' ? "Партнерська карта здоров'я" : 'Партнерская карта здоровья',
    columnName: [
      info[0].name ? info[0].name : info[0].order,
      info[1].name ? info[1].name : info[1].order,
      'Пара',
    ],
  };
  list.chakraList = partnersChakraList[0].map(
    ({ chakraName, physics, energy, emotions, color }) => ({
      chakraName,
      color,
      partner1: ` ${energy} - ${physics} -  ${emotions}`,
    })
  );

  partnersChakraList[1].forEach(
    ({ physics, energy, emotions }, index) =>
      (list.chakraList[index].partner2 = `${energy} - ${physics} -  ${emotions}`)
  );

  list.chakraList.forEach(el => {
    const [ph1, en1, em1] = el.partner1.split(' - ');
    const [ph2, en2, em2] = el.partner2.split(' - ');
    el.couple = `${checkNum(+ph1 + +ph2)} - ${checkNum(+en1 + +en2)} - ${checkNum(+em1 + +em2)}`;
  });
  list.partners = true;
  return list;
};

export const getAnnualPeriodData = (data, year) => {
  let startDate = new Date(+year, 0, 1); // January 1, 2023
  let endDate = new Date(+year + 1, 0, 1);
  let totalDays = Math.floor((endDate - startDate) / (24 * 60 * 60 * 1000)); // Total number of days in the year

  let equalPartDuration = Math.floor((totalDays + 8) / 16); // Duration of each equal part
  let dateRanges = [];

  const chooseColor = month => {
    switch (month) {
      case 1:
      case 2:
      case 12:
        return '#B9C0FF';
      case 3:
      case 4:
      case 5:
        return '#D2F8DB';
      case 6:
      case 7:
      case 8:
        return '#FFF2AD';
      case 9:
      case 10:
      case 11:
        return '#FFC8A0';
      default:
        break;
    }
  };

  for (let i = 0; i < totalDays; i += equalPartDuration) {
    let rangeStart = new Date(startDate.getTime() + i * 24 * 60 * 60 * 1000);
    let rangeEnd;

    if (i + equalPartDuration < totalDays) {
      rangeEnd = new Date(startDate.getTime() + (i + equalPartDuration - 1) * 24 * 60 * 60 * 1000);
    } else {
      rangeEnd = new Date(startDate.getTime() + (totalDays - 1) * 24 * 60 * 60 * 1000);
    }
    dateRanges.push({
      color: chooseColor(rangeStart.getMonth() + 1),
      range: `${rangeStart.getDate().toString().padStart(2, '0')}.${(rangeStart.getMonth() + 1)
        .toString()
        .padStart(2, '0')} - ${rangeEnd.getDate().toString().padStart(2, '0')}.${(
        rangeEnd.getMonth() + 1
      )
        .toString()
        .padStart(2, '0')}`,
    });
  }

  const dataKeys = Object.keys(data);
  dateRanges.forEach((element, index) => {
    if (index === 0 || index % 2 === 0) {
      element.arcane = data[dataKeys[index / 2]];
      return;
    }
  });

  dateRanges.forEach((element, index, array) => {
    if (!array[index + 1]) {
      element.arcane = checkNum(array[index - 1].arcane + array[0].arcane);
      element.key = `${array[index].arcane} - ${array[index].arcane} - ${checkNum(
        array[index].arcane + array[index].arcane
      )}`;
      return;
    }
    if (index !== 0 && index % 2 !== 0) {
      element.arcane = checkNum(array[index - 1].arcane + array[index + 1].arcane);
      return;
    }
  });

  dateRanges.forEach((element, index, array) => {
    if (index === array.length) {
      return;
    }
    if (index === 0) {
      element.key = `${array[0].arcane} - ${array[array.length / 2].arcane} - ${checkNum(
        array[0].arcane + array[array.length / 2].arcane
      )}`;
      return;
    }
    if (index <= 7) {
      element.key = `${array[index].arcane} - ${
        array[index + array.length / 2].arcane
      } - ${checkNum(array[index].arcane + array[index + array.length / 2].arcane)}`;
      return;
    }
    if (index > 7) {
      element.key = `${array[index].arcane} - ${
        array[index - array.length / 2].arcane
      } - ${checkNum(array[index].arcane + array[index - array.length / 2].arcane)}`;
      return;
    }
  });

  return dateRanges;
};
