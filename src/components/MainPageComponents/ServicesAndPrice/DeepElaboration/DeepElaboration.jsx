import personalMatrix from 'images/ServicesAndPrice/personalMatrix.png';
import awareness from 'images/ServicesAndPrice/awareness.png';
import prosperity from 'images/ServicesAndPrice/prosperity.png';
import familyTree from 'images/ServicesAndPrice/familyTree.png';
import { ServiceCard } from './ServiceCard/ServiceCard';
import { CardList } from './DeepElaboration.styled';
import { PersonalMatrix } from 'components/MainPageComponents/ModalWindows';

const cards = [
  {
    name: 'Целостная личная матрица',
    img: personalMatrix,
    text: 'Ответит на все вопросы,  предоставит фундаментальные знания о своей личности',
    component: PersonalMatrix,
  },
  {
    name: 'Матрица 9 колен рода',
    img: familyTree,
    text: 'Проработка родовых сценариев, исцеление 9 колен рода, социальная реализация, родовое изобилие',
    component: <div>Test</div>,
  },
  {
    name: 'Матрица осознанности',
    img: awareness,
    text: 'Глубинное познание истинного я, усиление защиты судьбы, проход в мир истинного Духа',
    component: <div>Test</div>,
  },
  {
    name: 'Звезда процветания',
    img: prosperity,
    text: 'Исполнение желаний, ключи материализации, ключи признания, почестей и известности',
    component: <div>Test</div>,
  },
];

export const DeepElaboration = () => {
  return (
    <CardList>
      {cards.map(({ name, img, text, component }) => (
        <ServiceCard name={name} img={img} text={text} key={name} component={component} />
      ))}
    </CardList>
  );
};
