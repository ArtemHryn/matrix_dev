import deepDrow from 'images/whatIsMatrix/deepDrow.webp';
import saturn from 'images/whatIsMatrix/saturn.webp';
import sun from 'images/whatIsMatrix/sun.webp';
import deepDrowDesk from 'images/whatIsMatrix/deepDrowDesk.webp';
import saturnDesk from 'images/whatIsMatrix/saturnDesk.webp';
import sunDesk from 'images/whatIsMatrix/sunDesk.webp';

const factAboutMatrxiFn = lng => {
  return lng === 'ua'
    ? [
        {
          name: 'Глибоке занурення',
          img: deepDrow,
          imgDesk: deepDrowDesk,
          text: 'Метод складається з багатьох рівнів розрахунків, більшість з яких недоступна в Інтернеті. Це симбіоз діагностики та трансформаційних практик, медитацій та терапії.',
        },
        {
          name: 'Науковий підхід',
          img: saturn,
          imgDesk: saturnDesk,
          text: 'Метод ґрунтується на 22 архетипах, які описують релігії, послання богів, давні цивілізації, теорії створення  нашого світу. Вивчається такими науками, як єгиптологія, археологія та сходознавство.',
        },
        {
          name: '“Чарівна пігулка”',
          img: sun,
          imgDesk: sunDesk,
          text: 'Метод надає відповіді та інструменти для вирішення практично будь-яких ситуацій, але НЕ вирішує їх за миттєвим "помахом чарівної палички". Він вимагає певних дій та ретельної роботи над собою.',
        },
      ]
    : [
        {
          name: 'Глубокое погружение',
          img: deepDrow,
          imgDesk: deepDrowDesk,
          text: 'Метод состоит из множества уровней расчётов, большинство которых нет на просторах интернета. Это симбиоз диагностики и трансформационных практик, медитаций, сеансов исцеления, терапии. ',
        },
        {
          name: 'Научный подход',
          img: saturn,
          imgDesk: saturnDesk,
          text: 'Метод основан на 22 архетипах, которые описывают религии, послания богов, древние цивилизации, теории создания вселенной  и нашего  мира. Изучается такими науками как: египтология, археология и востоковедение.',
        },
        {
          name: 'Волшебная таблетка',
          img: sun,
          imgDesk: sunDesk,
          text: 'Метод даёт ответы и инструменты для решения практически любых ситуаций, но НЕ решает их по взмаху “волшебной палочки”. Он требует определённых действий и тщательной работы над собой.',
        },
      ];
};

export default factAboutMatrxiFn;
