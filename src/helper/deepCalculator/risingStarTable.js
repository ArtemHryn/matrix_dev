export const getRisingStarTable = (info, lng) => {
  const {
    month,
    risingStarBottom,
    bottomLeft1,
    bottomRight1,
    bottom1,
    risingStarTop,
    risingStarLeft,
    risingStarRight,
    topLeft1,
    topRight1,
    year,
    day,
    manCenter,
    womanCenter,
    groundCenter,
    honorAndGloryCenter,
    risingStarSky,
    risingStarEarth,
  } = info;

  const data = [
    {
      karmaName: lng === 'ua' ? 'Небесна зірка' : 'Небесная звезда',
      info: [
        {
          type: lng === 'ua' ? 'Чоловічий трикутник' : 'Мужской треугольник',
          energyInfo: [
            {
              name: lng === 'ua' ? 'Божественна підтримка' : 'Божественная поддержка',
              energy: month,
            },
            {
              name: lng === 'ua' ? 'Натхнення та дії' : 'Вдохновение и действия',
              energy: risingStarBottom,
            },
            {
              name: lng === 'ua' ? 'Ключ натхнення' : 'Ключ вдохновения',
              energy: `${bottomLeft1} - ${bottomRight1} - ${risingStarBottom}`,
            },
            {
              name: 'Центр',
              energy: manCenter,
            },
          ],
        },
        {
          type: lng === 'ua' ? 'Жіночий трикутник' : 'Женский треугольник',
          energyInfo: [
            {
              name: 'Допуск',
              energy: bottom1,
            },
            {
              name: lng === 'ua' ? 'Думки та ідеї' : 'Мысли и идеи',
              energy: risingStarTop,
            },
            {
              name: lng === 'ua' ? 'Платформа ідей' : 'Платформа идей',
              energy: `${topLeft1} - ${topRight1} - ${risingStarTop}`,
            },
            {
              name: 'Центр',
              energy: womanCenter,
            },
          ],
        },
      ],
      total: {
        name: lng === 'ua' ? 'Ключ небесної зірки' : 'Ключ небесной звезды',
        keys: [manCenter, womanCenter, risingStarSky],
      },
    },
    {
      karmaName: lng === 'ua' ? 'Земна зірка' : 'Земная звезда',
      info: [
        {
          type: lng === 'ua' ? 'Трикутник земного володіння' : 'Треугольник земного обладания',
          energyInfo: [
            {
              name: lng === 'ua' ? "Карма здоров'я" : 'Карма здоровья',
              energy: year,
            },
            {
              name: lng === 'ua' ? 'Матеріальні результати' : 'Материальные результаты',
              energy: risingStarLeft,
            },
            {
              name:
                lng === 'ua'
                  ? 'Платформа матеріального результату'
                  : 'Платформа материального результата',
              energy: `${topLeft1} - ${bottomLeft1} - ${risingStarLeft}`,
            },
            {
              name:
                lng === 'ua'
                  ? 'Карма партнерських сексуальних стосунків '
                  : 'Карма партнерских сексуальных отношений',
              energy: groundCenter,
            },
          ],
        },
        {
          type: lng === 'ua' ? 'Трикутник почестей та слави' : 'Треугольник почестей и славы',
          energyInfo: [
            {
              name: lng === 'ua' ? 'Карма особистості, его' : 'Карма личности, эго',
              energy: day,
            },
            {
              name: 'Слава',
              energy: risingStarRight,
            },
            {
              name: lng === 'ua' ? 'Платформа почестей та слави' : 'Платформа почестей и славы',
              energy: `${topRight1} - ${bottomRight1} - ${risingStarRight}`,
            },
            {
              name: lng === 'ua' ? 'Партнерська карма роду батька' : 'Партнёрская карма рода отца',
              energy: honorAndGloryCenter,
            },
          ],
        },
      ],
      total: {
        name: lng === 'ua' ? 'Ключ земної зірки' : 'Ключ земной звезды',
        keys: [groundCenter, honorAndGloryCenter, risingStarEarth],
      },
    },
  ];
  return data;
};
