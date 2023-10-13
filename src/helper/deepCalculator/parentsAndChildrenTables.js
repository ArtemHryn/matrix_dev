const { checkNum } = require('helper/calculateMatrix');

const getArcanesList = (info, isChildren) => {
  const {
    month,
    bottom1,
    top2,
    top3,
    bottom2,
    bottom3,
    innerBottom1,
    innerTop1,
    innerTopLeft,
    innerBottomLeft,
    innerLeft1,
    innerLeft3,
    left3,
    left2,
    day,
    right3,
    right2,
    year,
  } = info;
  const data = [
    { column1: month, column2: bottom1 },
    { column1: top2, column2: bottom2 },
    { column1: top3, column2: bottom3 },
    { column1: innerBottom1, column2: innerTop1 },
    { column1: innerTopLeft, column2: innerBottomLeft },
    { column1: innerLeft1, column2: innerLeft3 },
    { column1: left3, column2: right3 },
    { column1: left2, column2: right2 },
    { column1: day, column2: year },
  ];
  if (isChildren) {
    return data.reverse();
  }
  return data;
};

const getParentTable = (info, lng) => {
  const data = {
    name: lng === 'ua' ? 'Ключи вынашивания ребенка' : 'Ключи вынашивания ребенка',
    columnsName: [
      { name: lng === 'ua' ? 'Месяц' : 'Месяц' },
      { name: lng === 'ua' ? 'Верхний мир' : 'Верхний мир' },
      { name: lng === 'ua' ? 'Нижний мир' : 'Нижний мир' },
      { name: lng === 'ua' ? 'Исцеляющая' : 'Исцеляющая' },
    ],
    arcanes: getArcanesList(info, false),
  };
  data.arcanes.forEach(el => (el.column3 = checkNum(el.column1 + el.column2)));
  return data;
};

const getChildrenTable = (info, lng) => {
  const age = ['0', '0.5', '5', '7.5', '10', '12.5', '15', '17.5', '20'];
  const data = {
    name: lng === 'ua' ? 'Кармический долг родителей' : 'Кармический долг родителей',
    columnsName: [
      { name: lng === 'ua' ? 'Возраст' : 'Возраст' },
      { name: lng === 'ua' ? 'Верхний мир' : 'Верхний мир' },
      { name: lng === 'ua' ? 'Нижний мир' : 'Нижний мир' },
      { name: lng === 'ua' ? 'Исцеляющая' : 'Исцеляющая' },
    ],
    arcanes: getArcanesList(info, true),
  };
  data.arcanes.forEach((el, index) => {
    el.column3 = checkNum(el.column1 + el.column2);
    el.startColumn = age[index];
  });

  return data;
};

export { getParentTable, getChildrenTable };
