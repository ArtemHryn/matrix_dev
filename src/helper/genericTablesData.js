import { checkNum } from './calculateMatrix';

const getKeys = (source, holistic = false) => {
  const keys = source.map((arcane, index, array) => {
    let firstKey = null;
    let secondKey = null;
    if (index !== array.length - 1) {
      firstKey = array[index + 1].column3;
      secondKey = arcane.column3;
    }
    if (index === array.length - 1) {
      firstKey = array[0].column3;
      secondKey = arcane.column3;
    }
    if (holistic) {
      const [, , el3C1] = firstKey.split(' - ');
      const [, , el3C2] = secondKey.split(' - ');
      return `${el3C1} - ${el3C2} - ${checkNum(+el3C1 + +el3C2)}`;
    }

    return `${firstKey} - ${secondKey} - ${checkNum(firstKey + secondKey)}`;
  });
  return keys;
};

const resultColumn = info => {
  info.forEach(el => {
    const [el1C1, el2C1, el3C1] = el.column1.split(' - ');
    const [el1C2, el2C2, el3C2] = el.column2.split(' - ');
    el.column3 = `${checkNum(+el1C1 + +el1C2)} - ${checkNum(+el2C1 + +el2C2)} - ${checkNum(
      +el3C1 + +el3C2
    )}`;
  });
};

const getGenusColumnNames = lng => {
  return [
    { name: lng === 'ua' ? 'Колено' : 'Колено' },
    { name: lng === 'ua' ? 'Духовный урок' : 'Духовный урок' },
    { name: lng === 'ua' ? 'Земной урок' : 'Земной урок' },
    { name: lng === 'ua' ? 'Целостный ключ ' : 'Целостный ключ' },
  ];
};

const getFatherArcanesList = info => {
  const {
    left2,
    left3,
    topLeft1,
    topLeft2,
    topLeft3,
    healthTopLeft,
    healthBottomRight,
    center2,
    bottomRight1,
    bottomRight2,
    bottomRight3,
    month,
    day,
    year,
    top2,
    top3,
    right2,
    right3,
    innerTop2,
    innerBottom2,
    innerLeft2,
    innerRight2,
    bottom1,
    bottom2,
    bottom3,
    fatherSpirit1,
    fatherSpirit2,
    fatherSpirit3,
    fatherSpirit4,
    fatherSpirit6,
    fatherSpirit7,
    fatherSpirit8,
    fatherSpirit9,
    fatherEarth1,
    fatherEarth2,
    fatherEarth3,
    fatherEarth4,
    fatherEarth6,
    fatherEarth7,
    fatherEarth8,
    fatherEarth9,
  } = info;

  const data = [
    {
      column1: `${month} - ${topLeft1} - ${fatherSpirit1}`,
      column2: `${day} - ${topLeft1} - ${fatherEarth1}`,
    },
    {
      column1: `${top2} - ${topLeft2} - ${fatherSpirit2}`,
      column2: `${left2} - ${topLeft2} - ${fatherEarth2}`,
    },
    {
      column1: `${top3} - ${topLeft3} - ${fatherSpirit3}`,
      column2: `${left3} - ${topLeft3} - ${fatherEarth3}`,
    },
    {
      column1: `${innerTop2} - ${healthTopLeft} - ${fatherSpirit4}`,
      column2: `${innerLeft2} - ${healthTopLeft} - ${fatherEarth4}`,
    },
    {
      column1: `${center2} - ${center2} - ${checkNum(center2 + center2)}`,
      column2: `${center2} - ${center2} - ${checkNum(center2 + center2)}`,
    },
    {
      column1: `${innerBottom2} - ${healthBottomRight} - ${fatherSpirit6}`,
      column2: `${innerRight2} - ${healthBottomRight} - ${fatherEarth6}`,
    },
    {
      column1: `${bottom3} - ${bottomRight3} - ${fatherSpirit7}`,
      column2: `${right3} - ${bottomRight3} - ${fatherEarth7}`,
    },
    {
      column1: `${bottom2} - ${bottomRight2} - ${fatherSpirit8}`,
      column2: `${right2} - ${bottomRight2} - ${fatherEarth8}`,
    },
    {
      column1: `${bottom1} - ${bottomRight1} - ${fatherSpirit9}`,
      column2: `${year} - ${bottomRight1} - ${fatherEarth9}`,
    },
  ];

  resultColumn(data);
  return data;
};

const getMotherArcanesList = info => {
  const {
    month,
    topRight1,
    motherSpirit1,
    motherSpirit2,
    top2,
    topRight2,
    motherSpirit3,
    top3,
    topRight3,
    motherSpirit4,
    innerTop2,
    healthTopRight,
    motherSpirit6,
    innerBottom2,
    healthBottomLeft,
    motherSpirit7,
    bottom3,
    bottomLeft3,
    motherSpirit8,
    bottom2,
    bottomLeft2,
    motherSpirit9,
    bottom1,
    bottomLeft1,
    center2,
    motherEarth1,
    motherEarth2,
    motherEarth3,
    motherEarth4,
    motherEarth6,
    motherEarth7,
    motherEarth8,
    motherEarth9,
    day,
    left2,
    left3,
    innerLeft2,
    innerRight2,
    right3,
    right2,
    year,
  } = info;
  const data = [
    {
      column1: `${month} - ${topRight1} - ${motherSpirit1}`,
      column2: `${year} - ${topRight1} - ${motherEarth1}`,
    },
    {
      column1: `${top2} - ${topRight2} - ${motherSpirit2}`,
      column2: `${right2} - ${topRight2} - ${motherEarth2}`,
    },
    {
      column1: `${top3} - ${topRight3} - ${motherSpirit3}`,
      column2: `${right3} - ${topRight3} - ${motherEarth3}`,
    },
    {
      column1: `${innerTop2} - ${healthTopRight} - ${motherSpirit4}`,
      column2: `${innerRight2} - ${healthTopRight} - ${motherEarth4}`,
    },
    {
      column1: `${center2} - ${center2} - ${checkNum(center2 + center2)}`,
      column2: `${center2} - ${center2} - ${checkNum(center2 + center2)}`,
    },
    {
      column1: `${innerBottom2} - ${healthBottomLeft} - ${motherSpirit6}`,
      column2: `${innerLeft2} - ${healthBottomLeft} - ${motherEarth6}`,
    },
    {
      column1: `${bottom3} - ${bottomLeft3} - ${motherSpirit7}`,
      column2: `${left3} - ${bottomLeft3} - ${motherEarth7}`,
    },
    {
      column1: `${bottom2} - ${bottomLeft2} - ${motherSpirit8}`,
      column2: `${left2} - ${bottomLeft2} - ${motherEarth8}`,
    },
    {
      column1: `${bottom1} - ${bottomLeft1} - ${motherSpirit9}`,
      column2: `${day} - ${bottomLeft1} - ${motherEarth9}`,
    },
  ];

  resultColumn(data);

  return data;
};

const getTotalArcanesList = (father, mother) => {
  const data = father.map(el => ({ column1: el.column3 }));
  data.forEach((el, index) => (el.column2 = mother[index].column3));
  resultColumn(data);
  return data;
};

const getGenericTablesData = (info, lng) => {
  const {
    topRight1,
    topLeft1,
    topRight2,
    topRight3,
    topLeft2,
    topLeft3,
    healthTopLeft,
    healthTopRight,
    healthBottomRight,
    healthBottomLeft,
    center2,
    bottomLeft1,
    bottomLeft2,
    bottomLeft3,
    bottomRight1,
    bottomRight2,
    bottomRight3,
  } = info;
  const data = {
    generic: {
      id: 1,
      table1: {
        name: lng === 'ua' ? '9 колен рода' : '9 колен рода',
        columnsName: [
          { name: lng === 'ua' ? 'Колено' : 'Колено' },
          { name: lng === 'ua' ? 'Род отца' : 'Род отца' },
          { name: lng === 'ua' ? 'Род матери' : 'Род матери' },
          { name: lng === 'ua' ? 'Примерение' : 'Примерение' },
        ],
        arcanes: [
          { column1: topLeft1, column2: topRight1 },
          { column1: topLeft2, column2: topRight2 },
          { column1: topLeft3, column2: topRight3 },
          { column1: healthTopLeft, column2: healthTopRight },
          { column1: center2, column2: center2 },
          { column1: healthBottomRight, column2: healthBottomLeft },
          { column1: bottomRight3, column2: bottomLeft3 },
          { column1: bottomRight2, column2: bottomLeft2 },
          { column1: bottomRight1, column2: bottomLeft1 },
        ],
      },
      table2: {
        name: lng === 'ua' ? 'Коленопреклонение' : 'Коленопреклонение',
        columnsName: [{ name: lng === 'ua' ? 'Колено' : 'Колено' }, { name: 'Ключ' }],
        keys: '',
      },
    },
    holistic: {
      id: 2,
      table1: {
        name: lng === 'ua' ? 'Род отца' : 'Род отца',
        columnsName: getGenusColumnNames(lng),
        arcanes: getFatherArcanesList(info),
      },
      table2: {
        name: lng === 'ua' ? 'Род матери' : 'Род матери',
        columnsName: getGenusColumnNames(lng),
        arcanes: getMotherArcanesList(info),
      },
      table3: {
        name: lng === 'ua' ? 'Примирение родов' : 'Примирение родов',
        columnsName: [
          { name: lng === 'ua' ? 'Колено' : 'Колено' },
          { name: lng === 'ua' ? 'Целостный ключ рода отца' : 'Целостный ключ рода отца' },
          { name: lng === 'ua' ? 'Целостный ключ рода матери' : 'Целостный ключ рода матери' },
          { name: lng === 'ua' ? 'Ключ примерения' : 'Ключ примерения' },
        ],
        arcanes: [],
      },
      table4: {
        name: lng === 'ua' ? 'Коленопреклонение' : 'Коленопреклонение',
        columnsName: [{ name: lng === 'ua' ? 'Колено' : 'Колено' }, { name: 'Ключ' }],
        keys: '',
      },
    },
  };

  data.holistic.table3.arcanes = getTotalArcanesList(
    data.holistic.table1.arcanes,
    data.holistic.table2.arcanes
  );
  data.generic.table1.arcanes.forEach(
    arcane => (arcane.column3 = checkNum(arcane.column1 + arcane.column2))
  );
  data.generic.table2.keys = getKeys(data.generic.table1.arcanes);
  data.holistic.table4.keys = getKeys(data.holistic.table3.arcanes, true);
  return data;
};

export default getGenericTablesData;
