import personalMatrix from 'images/ServicesAndPrice/personalMatrix.webp';
import awareness from 'images/ServicesAndPrice/awareness.webp';
import prosperity from 'images/ServicesAndPrice/prosperity.webp';
import familyTree from 'images/ServicesAndPrice/familyTree.webp';
import {
  PersonalMatrix,
  FamilyTree,
  Awareness,
  ProsperityStar,
} from 'components/MainPageComponents/ModalWindows';

const getdeepElaborationServicesCards = lng => {
  return [
    {
      name:
        lng === 'ua'
          ? 'Цілісна матриця особистості'
          : 'Целостная личная матрица',
      img: personalMatrix,
      text:
        lng === 'ua'
          ? 'Допоможе краще пізнати себе та кардинально змінити своє життя. Дає відповіді на будь-які питання.'
          : 'Ответит на все вопросы,  предоставит фундаментальные знания о своей личности',
      component: PersonalMatrix,
      price: '119',
    },
    {
      name: lng === 'ua' ? 'Матриця 9 колін роду' : 'Матрица 9 колен рода',
      img: familyTree,
      text:
        lng === 'ua'
          ? 'Відпрацювання негативної родової карми, деструктивних сценаріїв задля соціальної реалізації та процвітання роду.'
          : 'Проработка родовых сценариев, исцеление 9 колен рода, социальная реализация, родовое изобилие',
      component: FamilyTree,
      price: '150',
    },
    {
      name: lng === 'ua' ? 'Матриця усвідомленості' : 'Матрица осознанности',
      img: awareness,
      text:
        lng === 'ua'
          ? 'Сакральні рівні матриці, що відкривають шлях до глибинного розуміння справжнього "Я".'
          : 'Глубинное познание истинного я, усиление защиты судьбы, проход в мир истинного Духа',
      component: Awareness,
      price: '119',
    },
    {
      name: lng === 'ua' ? 'Зірка процвітання' : 'Звезда процветания',
      img: prosperity,
      text:
        lng === 'ua'
          ? 'Втілення бажань, ключі реалізації масштабних ідей, ключі визнання та слави.'
          : 'Исполнение желаний, ключи материализации, ключи признания, почестей и известности',
      component: ProsperityStar,
      price: '150',
    },
  ];
};

export default getdeepElaborationServicesCards;
