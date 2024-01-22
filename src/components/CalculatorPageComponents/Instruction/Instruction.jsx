import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useTranslation, Trans } from 'react-i18next';

import BtnBlock from './BtnBlock';
import ModalContainer from './Modal/ModalContainer';
import ModalContent from './Modal/ModalContent';
import Images from './Images';
import BottomBtnsNav from './BottomBtnsNav';

import { Box } from 'components/Box';
import { Title } from './Instruction.styled';

import image from 'images/Calculator/instruction/bg_stars.svg';

const instruction_description_ru =
  'Данная видеоинструкция подойдёт как новичкам, так и профессионалам. Я покажу вам все возможности и фишки калькулятора, с помощью которых вы сможете рассчитать матрицу любого уровня сложности, а именно: матрицу души, матрицу сексуальности и харизмы пары, матрицу года и матрицу периода. Вы сможете рассчитывать совместимость с помощью двух техник, а также работать с 9-тиричным ключом. <br/><br/>Видеолекция поможет улучшить и упростить работу с клиентами. Также вы с лёгкостью сможете использовать все символьные и цветовые подсказки, которые зашифрованы в калькуляторе.';
const instruction_description_ua =
  'Дана відеоінструкція підійде як новачкам, так і професіоналам. Я покажу вам всі можливості та фішки калькулятора, за допомогою яких ви зможете розрахувати матрицю будь-якого рівня складності, а саме: матрицю душі, матрицю сексуальності та харизми пари, матрицю року та матрицю періоду. Ви зможете розраховувати сумісність за допомогою двох технік, а також працювати з 9-тизначним ключем. <br/><br/>Відеолекція допоможе покращити та спростити роботу з клієнтами. Також ви з легкістю зможете використовувати всі підказки у вигляді символів та кольорів, що зашифровані у калькуляторі.';
const integrity_description_ru =
  '“INTEGRITY” - это авторская девятичакровая система, которая позволяет глубже погрузиться в матрицу здоровья. Найти новые ключи к исцелению своей жизни на уровне души, разума и тела. Данная система гармонично вписывается в сакральную геометрию, не нарушая систему метода, а также подтверждена другими эзотерическими направлениями.<br/><br/>Вебинары абсолютно бесплатны. Более того, все зрители получат подарки, которые сделают вашу работу  с матрицей здоровья еще более удобной и качественной.';
const integrity_description_ua = '"INTEGRITY" - це авторська дев\'ятичакрова система, яка дозволяє глибше поринути в матрицю здоров\'я.  Знайти нові ключі зцілення свого життя на рівні душі, розуму і тіла.  Ця система гармонійно інтегрується в сакральну геометрію, не порушуючи систему методу, а також має підтвердження в інших езотеричниї напрямках.<br/><br/>Вебінари повністю безкоштовні.  Більше того, всі глядачі отримають подарунки, які зроблять вашу роботу з матрицею здоров\'я ще зручнішою та якіснішою.'
const Instruction = () => {
  const [showModal, setShowModal] = useState(false);
  const [page, setPage] = useState(null);
  const { t, i18n } = useTranslation('calc');

  return (
    <Box as="section" py={['40px', null, '80px']} id="Instruction">
      <Box
        maxWidth={['400px', '768px', '1440px']}
        px={['37px', '32px', '192px']}
        m="0 auto"
        backgroundImage={[`url('${image}')`, null, null]}
        backgroundSize={['300px', '460px', '700px']}
        backgroundPosition={['70% 55%', '80% 80%', '60% 60%']}
        backgroundRepeat="no-repeat"
      >
        <Title>
          <Trans i18nKey={'instructionTitle'} ns="calc">
            Используй возможности калькулятора от <span>“Dari.Karma” на все 100%</span>
          </Trans>
        </Title>
        <Box position="relative">
          <Images />
          <BtnBlock
            btnName={t('instructionBtn1')}
            textAlign={['right', 'right']}
            display="flex"
            flexDirection={['column', null, 'column-reverse']}
            alignItems="flex-end"
            mb={['211px', '345px', '193px']}
            setShowModal={setShowModal}
            setPage={() => setPage(1)}
          />
          <BtnBlock
            btnName={t('instructionBtn2')}
            mb={['53px', '103px']}
            display="flex"
            flexDirection={['column']}
            setShowModal={setShowModal}
            setPage={() => setPage(2)}
          />
        </Box>
        <BottomBtnsNav setShowModal={setShowModal} setPage={setPage} />
        <AnimatePresence onExitComplete={() => null} mode="wait">
          {showModal &&
            (page === 1 ? (
              <ModalContainer setShowModal={setShowModal}>
                <AnimatePresence onExitComplete={() => null} mode="wait">
                  <ModalContent
                    title={t('instructionModalTitle1')}
                    description={
                      i18n.language === 'ua'
                        ? instruction_description_ua
                        : instruction_description_ru
                    }
                    page={page}
                    setPage={setPage}
                    key={'1'}
                    price={'60$'}
                    href={
                      i18n.language === 'ua'
                        ? 'https://www.buymeacoffee.com/dari.karma/e/155304'
                        : 'https://www.buymeacoffee.com/dari.karma/e/154970'
                    }
                    linkText={t('instructionModalBtn1')}
                  />
                </AnimatePresence>
              </ModalContainer>
            ) : (
              <ModalContainer setShowModal={setShowModal}>
                <AnimatePresence onExitComplete={() => null} mode="wait">
                  <ModalContent
                    title={t('instructionModalTitle2')}
                    description={
                      i18n.language === 'ua' ? integrity_description_ua : integrity_description_ru
                    }
                    page={page}
                    setPage={setPage}
                    key={'2'}
                    href={'https://www.buymeacoffee.com/dari.karma/e/157070'}
                    linkText={t('instructionModalBtn2')}
                  />
                </AnimatePresence>
              </ModalContainer>
            ))}
        </AnimatePresence>
      </Box>
    </Box>
  );
};

export default Instruction;
