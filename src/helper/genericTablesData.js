import { checkNum } from './calculateMatrix';

const getKeys = source => {
  const keys = source.map((arcane, index, array) => {
    let firstKey = null;
    let secondKey = null;
    if (index !== array.length - 1) {
      firstKey = array[index + 1].result;
      secondKey = arcane.result;
    }
    if (index === array.length - 1) {
      firstKey = array[0].result;
      secondKey = arcane.result;
    }
    return `${firstKey} - ${secondKey} - ${checkNum(firstKey + secondKey)}`;
  });
  return keys;
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
          { father: topLeft1, mother: topRight1 },
          { father: topLeft2, mother: topRight2 },
          { father: topLeft3, mother: topRight3 },
          { father: healthTopLeft, mother: healthTopRight },
          { father: center2, mother: center2 },
          { father: healthBottomRight, mother: healthBottomLeft },
          { father: bottomRight3, mother: bottomLeft3 },
          { father: bottomRight2, mother: bottomLeft2 },
          { father: bottomRight1, mother: bottomLeft1 },
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
        columnsName: [
          { name: lng === 'ua' ? '' : '' },
          { name: lng === 'ua' ? 'Духовный урок' : 'Духовный урок' },
          { name: lng === 'ua' ? 'Земной урок' : 'Земной урок' },
          { name: lng === 'ua' ? 'Целостный ключ ' : 'Целостный ключ' },
        ],
      },
    },
  };
  data.generic.table1.arcanes.forEach(
    arcane => (arcane.result = checkNum(arcane.father + arcane.mother))
  );
  data.generic.table2.keys = getKeys(data.generic.table1.arcanes);

  return data;
};

export default getGenericTablesData;
