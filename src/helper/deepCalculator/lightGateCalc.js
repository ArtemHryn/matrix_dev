import { checkNum } from 'helper/calculateMatrix';

export const getLightGate = (info, lng) => {
  const {
    lightLeft1,
    lightLeft2,
    lightRight2,
    lightRight1,
    lightTop1,
    lightTop2,
    lightBottom2,
    lightBottom1,
    lightTopLeft1,
    outCircle,
    innerCircle,
    lightTopLeft2,
    lightBottomLeft1,
    lightBottomLeft2,
    lightTopRight1,
    lightTopRight2,
    lightBottomRight1,
    lightBottomRight2,
    day,
    left2,
    left3,
    right2,
    year,
    right3,
    month,
    top2,
    top3,
    bottom3,
    bottom2,
    bottom1,
    topLeft1,
    topLeft2,
    topLeft3,
    bottomRight1,
    bottomRight2,
    bottomRight3,
    topRight1,
    topRight2,
    topRight3,
    bottomLeft1,
    bottomLeft2,
    bottomLeft3,
  } = info;

  const data = [
    {
      karmaName: lng === 'ua' ? 'Особиста матриця' : 'Личная матрица',
      info: [
        {
          type: 'Земля',
          energyInfo: [
            {
              name: lng === 'ua' ? 'Карма особистості' : 'Карма личности',
              energy: `${day} - ${left2} - ${lightLeft1}`,
            },
            {
              name: lng === 'ua' ? 'Карма батьки та діти' : 'Карма родители и дети',
              energy: `${left2} - ${left3} - ${lightLeft2}`,
            },
            {
              name: lng === 'ua' ? "Карма здоров'я" : 'Карма здоровья',
              energy: `${year} - ${right2} - ${lightRight2}`,
            },
            {
              name: lng === 'ua' ? 'Карма матеріальних цінностей' : 'Карма материальных ценностей',
              energy: `${right3} - ${right2} - ${lightRight1}`,
            },
          ],
        },
        {
          type: 'Небо',
          energyInfo: [
            {
              name: lng === 'ua' ? 'Карма духовного шляху' : 'Карма духовного пути',
              energy: `${month} - ${top2} - ${lightTop1}`,
            },
            {
              name: lng === 'ua' ? 'Карма творчого шляху' : 'Карма творческого пути',
              energy: `${top3} - ${top2} - ${lightTop2}`,
            },
            {
              name: lng === 'ua' ? 'Карма сакрального досвіду' : 'Карма сакрального опыта',
              energy: `${bottom1} - ${bottom2} - ${lightBottom1}`,
            },
            {
              name:
                lng === 'ua'
                  ? 'Карма партнерських сексуальних відносин'
                  : 'Карма партнерских сексуальных отношений',
              energy: `${bottom3} - ${bottom2} - ${lightBottom2}`,
            },
          ],
        },
      ],
    },
    {
      karmaName: lng === 'ua' ? 'Родова матриця' : 'Родовая матрица',
      info: [
        {
          type: lng === 'ua' ? 'Батько' : 'Отец',
          energyInfo: [
            {
              name:
                lng === 'ua'
                  ? 'Духовне виховання від роду батька'
                  : 'Духовное воспитание от рода отца',
              energy: `${topLeft1} - ${topLeft2} - ${lightTopLeft1}`,
            },
            {
              name:
                lng === 'ua' ? 'Творче виховання роду батька' : 'Творческое воспитание рода отца',
              energy: `${topLeft3} - ${topLeft2} - ${lightTopLeft2}`,
            },
            {
              name:
                lng === 'ua'
                  ? 'Карма соціальних результатів, почестей'
                  : 'Карма социальных результатов, почестей',
              energy: `${bottomRight1} - ${bottomRight2} - ${lightBottomRight1}`,
            },
            {
              name:
                lng === 'ua'
                  ? 'Карма матеріальних накопичень за родом'
                  : 'Карма материальных накоплений по роду',
              energy: `${bottomRight3} - ${bottomRight2} - ${lightBottomRight2}`,
            },
          ],
        },
        {
          type: lng === 'ua' ? 'Мати' : 'Мать',
          energyInfo: [
            {
              name:
                lng === 'ua'
                  ? 'Духовне виховання від матері'
                  : 'Духовное воспитание от рода матери',
              energy: `${topRight1} - ${topRight2} - ${lightTopRight1}`,
            },
            {
              name:
                lng === 'ua' ? 'Творче виховання роду матері' : 'Творческое воспитание рода матери',
              energy: `${topRight3} - ${topRight2} - ${lightTopRight2}`,
            },
            {
              name:
                lng === 'ua'
                  ? 'Карма передачі лікувальних здібностей'
                  : 'Карма передачи целительных способностей',
              energy: `${bottomLeft1} - ${bottomLeft2} - ${lightBottomLeft1}`,
            },
            {
              name:
                lng === 'ua'
                  ? 'Карма реалізації здібностей у соціумі'
                  : 'Карма реализации способностей в социуме',
              energy: `${bottomLeft3} - ${bottomLeft2} - ${lightBottomLeft2}`,
            },
          ],
        },
      ],
      total: {
        name: lng === 'ua' ? 'Алмаз матриці' : 'Алмаз матрицы',
        keys: [outCircle, innerCircle],
      },
    },
  ];

  const healing = {
    tablesName: lng === 'ua' ? 'Корекція долі' : 'Коррекция судьбы',
    tables: [
      {
        rowName: [
          lng === 'ua' ? '0 - 5 років' : '0 - 5 лет',
          'Ключ',
          lng === 'ua' ? '35 - 45 років' : '35 - 45 лет',
          'Ключ',
        ],
        keys: getLightGateHealing(
          [day, left3, left2, lightLeft1, lightLeft2],
          [year, right3, right2, lightRight2, lightRight1]
        ),
      },
      {
        rowName: [
          lng === 'ua' ? '5 - 15 років' : '5 - 15 лет',
          'Ключ',
          lng === 'ua' ? '45 - 55 років' : '45 - 55 лет',
          'Ключ',
        ],
        keys: getLightGateHealing(
          [topLeft1, topLeft3, topLeft2, lightTopLeft1, lightTopLeft2],
          [bottomRight1, bottomRight3, bottomRight2, lightBottomRight1, lightBottomRight2]
        ),
      },
      {
        rowName: [
          lng === 'ua' ? '15 - 25 років' : '15 - 25 лет',
          'Ключ',
          lng === 'ua' ? '55 - 65 років' : '55 - 65 лет',
          'Ключ',
        ],
        keys: getLightGateHealing(
          [month, top3, top2, lightTop1, lightTop2],
          [bottom1, bottom3, bottom2, lightBottom1, lightBottom2]
        ),
      },
      {
        rowName: [
          lng === 'ua' ? '25 - 35 років' : '25 - 35 лет',
          'Ключ',
          lng === 'ua' ? '65 - 75 років' : '65 - 75 лет',
          'Ключ',
        ],
        keys: getLightGateHealing(
          [topRight1, topRight3, topRight2, lightTopRight1, lightTopRight2],
          [bottomLeft1, bottomLeft3, bottomLeft2, lightBottomLeft1, lightBottomLeft2]
        ),
      },
    ],
  };

  return { karma: data, healing };
};

const getLightGateHealing = (topKeys, bottomKeys) => {
  const keys = topKeys.map((el, index) => ({
    youngKey: `${el} - ${bottomKeys[index]} - ${checkNum(el + bottomKeys[index])}`,
    oldKey: `${bottomKeys[index]} - ${el} - ${checkNum(el + bottomKeys[index])}`,
  }));
  return keys;
};
