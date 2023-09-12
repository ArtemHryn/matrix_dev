const getNavList = (lng) => {
return lng === 'ua'
  ? [
      { name: 'Головна', href: '/matrix' },
      { name: 'Запис', href: '#ChangeYourFate' },
      { name: 'Інструкції', href: '#Instruction' },
      { name: 'Подякувати розробникам', href: '#donation' },
      { name: 'Контакти', href: '#contacts' },
    ]
  : [
      { name: 'Главная', href: '/matrix' },
      { name: 'Запись', href: '#ChangeYourFate' },
      { name: 'Инструкции', href: '#Instruction' },
      { name: 'Благодарность разработчикам', href: '#donation' },
      { name: 'Контакты', href: '#contacts' },
    ];;
}


export default getNavList;
