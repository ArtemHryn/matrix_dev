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
  'За 1 час видеоинструкции вы научитесь пользоваться уникальными на рынке функциями, которые  повысят качество работы с клиентами и дадут возможность работать с глубинными уровнями метода. Инструкция включает в себя теоретическую и практическую части. <br/> <br/> После урока вы сможете рассчитать матрицу любого уровня сложности, среди них: матрицу души, матрицу сексуальности и харизмы пары, матрица года и матрица периода (матрица взаимосвязи будущего, настоящего и прошлого). Вы сможете работать по 9-тиричному ключу, читать таблицы с программами, рассчитывать совместимость двумя техниками, а также считывать символичные и цветовые подсказки, которые зашифрованы в калькуляторе.';
const instruction_description_ua =
  "За 1 годину відеоінструкції ви навчитеся користуватися унікальними на ринку функціями, які підвищать якість вашої роботи з клієнтами та дадуть можливість працювати з глибинними рівнями методу. Інструкція включає теоретичну та практичну частини.<br/><br/>Після уроку ви зможете розрахувати матрицю будь-якого рівня складності, серед них: матриця душі, матриця сексуальності та харизми пари, матриця року та матриця періоду (матриця взаємозв'язку майбутнього, сьогодення та минулого). Ви зможете працювати за 9-тизначним ключем, читати таблиці з програмами, розраховувати сумісність двома техніками, а також зчитувати символічні та колірні підказки, які зашифровані в калькуляторі.";
const integrity_description_ru =
  '“INTEGRITY” - это авторская девятичакровая система, которая позволяет глубже работать с картой здоровья в матрице и найти новые ключи к исцелению своей судьбы. Именно об этой системе, ее сути и техниках работы с ней, вы узнаете на вебинарах.<br/><br/>Данные уроки абсолютно бесплатны. Более того, все зрители вебинаров получат дополнительные подарки: гайд, практику, шаблон расчёта для печати, доступ к расчётам в калькуляторе.';
const integrity_description_ua =
  '"INTEGRITY" - це авторська дев\'ятичакрова система, яка дозволяє глибше працювати з картою здоров\'я в матриці та знайти нові ключі до зцілення своєї долі. Саме про цю систему, її сутність та техніки роботи з нею, ви дізнаєтеся на вебінарах.<br/><br/>Ці уроки абсолютно безкоштовні. Більш того, усі глядачі вебінарів отримають додаткові подарунки: гайд, практику, шаблон розрахунку для друку, доступ до розрахунків у калькуляторі.';

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
                    price={'70$'}
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
