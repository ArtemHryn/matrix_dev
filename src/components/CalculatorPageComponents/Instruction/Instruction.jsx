import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import BtnBlock from './BtnBlock';
import ModalContainer from './Modal/ModalContainer';
import ModalContent from './Modal/ModalContent';
import Images from './Images';
import BottomBtnsNav from './BottomBtnsNav';

import { Box } from 'components/Box';
import { Title } from './Instruction.styled';

import image from 'images/Calculator/instruction/bg_stars.svg';

const description =
  'За 1 час видеоинструкции вы научитесь пользоваться уникальным на рынке функциями, которые  повысят качество работы с клиентами и дадут возможность работать с глубинными уровнями метода. Инструкция включает в себя теоретическую и практическую части. <br/> <br/> После урока вы сможете рассчитать матрицу любого уровня сложности, среди них: матрицу души, матрицу сексуальности и харизмы пары, матрица года и матрица периода (матрица взаимосвязи будущего, настоящего и прошлого). Вы сможете работать по 9-тиричному ключу, читать таблицы с программами, рассчитывать совместимость двумя техниками, а также считывать символичные и цветовые подсказки, которые зашифрованы в калькуляторе.';

const Instruction = () => {
  const [showModal, setShowModal] = useState(false);
  const [page, setPage] = useState(null);

  return (
    <Box as="section" py={['40px', null, '80px']}>
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
          Используй возможности калькулятора от <span>“Dari.Karma” на все 100%</span>
        </Title>
        <Box position="relative">
          <Images />
          <BtnBlock
            btnName="Видеоинструкция к калькулятору"
            textAlign={['right', 'right']}
            display="flex"
            flexDirection={['column', null, 'column-reverse']}
            alignItems="flex-end"
            mb={['211px', '345px', '263px']}
            gridGap={['16px', '20px', '39px']}
            position="relative"
            zIndex="0"
            setShowModal={setShowModal}
          />
          <BtnBlock
            btnName="Бесплатные вебинары об “INTEGRITY”"
            mb={['53px', '103px']}
            gridGap={['16px', '20px', '39px']}
            display="flex"
            flexDirection={['column']}
            position="relative"
            zIndex="0"
            setShowModal={setShowModal}
          />
        </Box>
        <BottomBtnsNav setShowModal={setShowModal} setPage={setPage} />
        <AnimatePresence onExitComplete={() => null} mode="wait">
          {showModal &&
            (page === 1 ? (
              <ModalContainer setShowModal={setShowModal} >
                <AnimatePresence onExitComplete={() => null} mode="wait">
                  <ModalContent
                    title={'Видеоинструкция'}
                    description={description}
                    page={page}
                    setPage={setPage}
                    key={'1'}
                    price={'70$'}
                    href={'https://www.buymeacoffee.com/dari.karma/e/154970'}
                    linkText={'КУПИТЬ ИНСТРУКЦИЮ'}
                  />
                </AnimatePresence>
              </ModalContainer>
            ) : (
              <ModalContainer setShowModal={setShowModal}>
                <AnimatePresence onExitComplete={() => null} mode="wait">
                  <ModalContent
                    title={'Вебинары по системе “INTEGRITY”'}
                    description={description}
                    page={page}
                    setPage={setPage}
                    key={'2'}
                    href={'https://www.buymeacoffee.com/dari.karma/e/157070'}
                    linkText={'Смотреть бесплатно'}
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
