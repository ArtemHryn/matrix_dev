import { Box } from 'components/Box';
import masterClassPlanet from 'images/ServicesAndPrice/masterClassPlanet.png';
import masterClassPlanet2 from 'images/ServicesAndPrice/masterClassPlanet2.png';
import { AuthorMasterClassTitle, MasterClassList, SecondTitlePart } from './AuthorMasterClass.styled';
import { MasterClassCard } from './MasterClassCard/MasterClassCard';

const masterClass = [
  {
    title: 'Интенсив',
    img: masterClassPlanet,
    services: [
      'Разберем глубину метода и природу его работы',
      'Развенчаем все мифы и заблуждения про метод',
      'Узнаем правила экологичной и безопасной работы с матрицей',
      'Научимся исцелять, а не просто трактовать матрицы на примере одного из участников',
    ],
    format: 'Формат: личная встреча, группа 3-4 человек',
    duration: 'Длительность: 3-4 часа ',
    price: '70',
  },
  {
    title: 'Бранч',
    img: masterClassPlanet2,
    services: [
      'Узнай об особенностях своих энергий',
      'Реши запрос, который волнует тебя',
      'Получи практики и бонусы для работы над собой',
      'Научись определять и трансформировать свои негативные сценарии и установки',
    ],
    format: 'Формат: личная встреча, группа 3-4 человек',
    duration: 'Длительность: 3-4 часа ',
  
  },
];

export const AuthorMasterClass = () => {
  return (
    <Box>
      <AuthorMasterClassTitle>
        Авторские <SecondTitlePart>мастер-классы</SecondTitlePart>
      </AuthorMasterClassTitle>
      <MasterClassList>
        {masterClass.map(
          ({ title, img, services, format, duration, price }) => (
            <MasterClassCard
              title={title}
              img={img}
              services={services}
              format={format}
              duration={duration}
              price={price}
              key={title}
            />
          )
        )}
      </MasterClassList>
    </Box>
  );
};
