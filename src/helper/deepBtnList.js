const getDeepBtnList = lng => {
  return [
    {
      name: lng === 'ua' ? 'родова матриця' : 'родовая матрица',
      to: 'generic',
      disabled: false,
    },
    {
      name: lng === 'ua' ? 'Батьки і діти' : 'родители и дети',
      to: 'parents_and_children',
      disabled: true,
    },
    { name: lng === 'ua' ? 'брама світла' : 'врата света', to: 'light_gate', disabled: true },
    {
      name: lng === 'ua' ? 'зірка процвітання' : 'звезда процветания',
      to: 'rising_star',
      disabled: true,
    },
  ];
};

export default getDeepBtnList;
