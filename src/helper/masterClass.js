import masterClassPlanet from 'images/ServicesAndPrice/masterClassPlanet.webp';
import masterClassPlanet2 from 'images/ServicesAndPrice/masterClassPlanet2.webp';

const getMasterClass = lng => {
  return lng === 'ua'
    ? [
        {
          title: 'Інструкція до калькулятора',
          img: masterClassPlanet,
          services: [
            'Відеолекція, яка допоможе більш поглиблено працювати з калькулятором від «Dari.Karma».',
            'Навчу працювати з унікальним функціоналом калькулятора та різними рівнями матриць.',
            'Покажу безліч фішок, які полегшать роботу, а також розкажуть ще більше інформації про клієнта.',
            'З калькулятором зможе легко працювати як професіонал, так і новачок.',
          ],
          format: 'Формат: відеоурок',
          duration: 'Тривалість: 1 годинa',
          btn: 'Придбати',
          link: 'https://www.buymeacoffee.com/dari.karma/extras',
        },
        {
          title: 'Бранч',
          img: masterClassPlanet2,
          services: [
            'Унікальна робота з твоєю матрицею за допомогою 484 карти методу',
            'Ти отримаєш можливість дослідити: грані своєї особистості, таланти та здібності, точки матеріального та духовного зростання',
            'Атмосферна зустріч у місті Київ та нові чарівні знайомства',
          ],
          format: 'Формат: зустріч в м. Київ, група 3-7 осіб',
          duration: 'Тривалість: 2-3 години',
          price: '16',
          btn: 'Дізнатись дати найближчих зустрічей',
          link: 'https://www.instagram.com/stories/highlights/17988946340104079/',
        },
      ]
    : [
        {
          title: 'Инструкция к калькулятору',
          img: masterClassPlanet,
          services: [
            'Видеолекция, которая поможет более углубленно работать с калькулятором от “Dari.Karma”.',
            'Научу работать с уникальным функционалом калькулятора и разными уровнями матриц.',
            'Покажу множество фишек, которые облегчат работу, а также расскажут ещё больше информации о клиенте.',
            'С калькулятором может легко работать как профессионал, так и новичок.',
          ],
          format: 'Формат: видеоурок',
          duration: 'Длительность: 1 час',
          btn: 'Купить',
          link: 'https://www.buymeacoffee.com/dari.karma/extras',
        },
        {
          title: 'Бранч',
          img: masterClassPlanet2,
          services: [
            'Уникальная работа с твоей матрицей с помощью 484 карт метода',
            'Ты получишь возможность исследовать: грани своей личности, таланты и способности, точки материального и духовного роста',
            'Атмосферная встреча в городе Киев и новые волшебные знакомства',
          ],
          format: 'Формат: личная встреча, группа 3-7 человек',
          duration: 'Длительность: 2-3 часа',
          price: '21',
          btn: 'Узнать даты ближайших встреч',
          link: 'https://www.instagram.com/stories/highlights/17988946340104079/',
        },
      ];
};

export default getMasterClass;
