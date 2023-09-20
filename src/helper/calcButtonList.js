const getCalcButtonList = lng => {
  return [
    {
      name: lng === 'ua' ? 'ОСОБИСТА МАТРИЦЯ' : 'ЛИЧНАЯ МАТРИЦА',
      to: 'personal',
      disabled: false,
    },
    {
      name: lng === 'ua' ? 'СУМІСНІСТЬ' : 'СОВМЕСТИМОСТЬ',
      to: 'compatibility',
      disabled: false,
    },
    {
      name: lng === 'ua' ? 'ГЛИБИННІ РОЗРАХУНКИ' : 'ГЛУБИННЫЕ РАСЧЕТЫ',
      to: 'deep_calc',
      disabled: false,
    },
  ];
};

export default getCalcButtonList;
