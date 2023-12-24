const getNavList = lng => {
  return lng === 'ua'
    ? [
        { name: 'Автор', href: '#author' },
        { name: 'Про метод', href: '#aboutMatrix' },
        { name: 'Послуги', href: '#4methods' },
        { name: 'Відгуки', href: '#feedback' },
        { name: 'FAQ', href: '#peopleAsk' },
        { name: 'Калькулятор', href: '/matrix_dev/calculator' },
      ]
    : [
        { name: 'Автор', href: '#author' },
        { name: 'О методе', href: '#aboutMatrix' },
        { name: 'Услуги', href: '#4methods' },
        { name: 'Отзывы', href: '#feedback' },
        { name: 'FAQ', href: '#peopleAsk' },
        { name: 'Калькулятор', href: '/matrix_dev/calculator' },
      ];
};

export default getNavList;
