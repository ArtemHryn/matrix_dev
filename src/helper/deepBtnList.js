const getDeepBtnList = lng => {
  return [
    {
      name: lng === 'ua' ? 'родовая матрица' : 'родовая матрица',
      to: 'generic',
      disabled: false,
    },
    {
      name: lng === 'ua' ? 'звезда процветания' : 'звезда процветания',
      to: 'rising_star',
      disabled: true,
    },
    {
      name: lng === 'ua' ? 'родители и дети' : 'родители и дети',
      to: 'parents_and_children',
      disabled: true,
    },
    { name: lng === 'ua' ? 'врата света' : 'врата света', to: 'light_gate', disabled: true },
  ];
};

export default getDeepBtnList;
