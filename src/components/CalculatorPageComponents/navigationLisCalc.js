const getNavList = (lng) => {
return lng === 'ua'
  ? [
      { name: 'Головна', href: '/' },
      { name: 'Запис', href: '#ChangeYourFate' },
      { name: 'подякувати розробникам', href: '#donation' },
      { name: 'Контакти', href: '#contacts' },
    ]
  : [
      { name: 'Главная', href: '/' },
      { name: 'Запись', href: '#ChangeYourFate' },
      { name: 'Благодарность разработчикам', href: '#donation' },
      { name: 'Контакты', href: '#contacts' },
    ];;
}

export const navigationListCalc = [
  { name: 'Главная', href: '/' },
  { name: 'Запись', href: '#ChangeYourFate' },
  { name: 'Благодарность разработчикам', href: '#donation' },
  { name: 'Контакты', href: '#contacts' },
];


export default getNavList;
