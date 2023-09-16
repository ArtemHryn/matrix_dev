const btnList = lng => [
  { name: lng === 'ua' ? 'ПАРТНЕРИ' : 'ПАРТНЕРЫ', type: 'partners' },
  { name: lng === 'ua' ? 'КОЛЕКТИВ' : 'КОЛЛЕКТИВ', type: 'team' },
  { name: lng === 'ua' ? 'Матриця року' : 'Матрица ГОДА', type: 'year_matrix' },
  { name: lng === 'ua' ? 'демон жертва' : 'демон жертва', type: 'demon' },
];

export default btnList;
