import { Box } from 'components/Box';

import {
  smallStar,
  crystal,
  mirrorCrystal,
  handWithJel,
  handWithJelTab,
  hands,
  plant,
  handWithFlower,
  handsTab,
  plantTab,
  handWithFlowerTab,
  handsContainerImgDesc,
  handWithJelDesc,
  handsDesc,
  plantDesc,
  handWithFlowerDesc,
} from './';

import {
  AboutDesc,
  AboutReasonContainer,
  CrystalContainer,
  CrystalImg,
  HandImg,
  HandsContainer,
  UnderHandImg,
  TextNearHands,
  Title,
  TitleStarImg,
  TextUnderHandsContainer,
  AboutResultText,
} from './AboutKarma.styled';

const sectionGradient =
  'linear-gradient(to bottom,#fff,rgba(158, 118, 255, 0.23) 26%,rgba(158, 118, 255, 0.23) 81%,#fff 100%)';

export const AboutKarma = () => {
  return (
    <Box
      as="section"
      py={['40px', '40px', '90px']}
      backgroundImage={[
        sectionGradient,
        sectionGradient,
        `url(${handsContainerImgDesc}), ${sectionGradient}`,
      ]}
      backgroundPosition={[null, null, '0 350px, 0 0']}
      backgroundSize={[null, null, 'contain, auto']}
      backgroundRepeat="no-repeat"
    >
      <Box
        maxWidth={['430px', '768px', '1440px']}
        px={['60px', '33px', '100px']}
        m="0 auto"
      >
        <Box position="relative" mb="39px">
          <Title>Что такое карма и как она работает?</Title>
          <TitleStarImg src={smallStar} alt="star" />
        </Box>
        <Box display={[null, 'flex', 'flex']}>
          <AboutReasonContainer
            p="18px 32px 18px 5px"
            mb="11px"
            mr={[null, '13px', '25px']}
            justifyContent={[null, null, 'flex-start']}
          >
            <CrystalContainer mr={['5px', '5px', '50px']}>
              <CrystalImg src={crystal} alt="crystal" left="40%" />
            </CrystalContainer>
            <AboutDesc>Учениям о карме более 2,5 тыс лет</AboutDesc>
          </AboutReasonContainer>
          <AboutReasonContainer
            p="18px 5px 18px 32px"
            flexDirection="row-reverse"
          >
            <AboutDesc>
              “Карма” с санскрита переводится, как «действие, деятельность»
            </AboutDesc>
            <CrystalContainer ml="5px" mr={[null, null, '30px']}>
              <CrystalImg src={mirrorCrystal} alt="crystal" left="60%" />
            </CrystalContainer>
          </AboutReasonContainer>
        </Box>
        <HandsContainer>
          <TextNearHands>
            Мысли, речь, поступки - это всё действия, которые мы совершам
            ежедневно.
          </TextNearHands>

          <div>
            <UnderHandImg
              top={['10%', '20%', '123%']}
              left={['-20%', '15%', '5%']}
            ></UnderHandImg>
            <picture>
              <source srcSet={handWithJelDesc} media="(min-width: 1440px)" />
              <source srcSet={handWithJelTab} media="(min-width: 768px)" />
              <source srcSet={handWithJel} />
              <HandImg
                srcSet={handWithJel}
                alt="Darina"
                top={['10%', '15%', '103%']}
                left={['-20%', '10%', '-1%']}
                width={[null, '148px', '212px']}
              />
            </picture>
          </div>
          <div>
            <UnderHandImg
              bottom={['-10%', '-10%', '42%']}
              left={['0%', '80%', '90%']}
            ></UnderHandImg>
            <picture>
              <source srcSet={handsDesc} media="(min-width: 1440px)" />
              <source srcSet={handsTab} media="(min-width: 768px)" />
              <source srcSet={hands} />
              <HandImg
                srcSet={hands}
                alt="Darina"
                bottom={['-10%', '-15%', '40%']}
                left={['0%', '80%', '87%']}
                width={[null, '137px', '167px']}
              />
            </picture>
          </div>
          <div>
            <UnderHandImg
              top={['-5%', '10%', '81%']}
              right={['-5%', '49%', '72%']}
            ></UnderHandImg>
            <picture>
              <source srcSet={plantDesc} media="(min-width: 1440px)" />
              <source srcSet={plantTab} media="(min-width: 768px)" />
              <source srcSet={plant} />
              <HandImg
                srcSet={plant}
                alt="Darina"
                top={['-5%', '10%', '47%']}
                right={['-5%', '42%', '66%']}
                width={[null, '207px', '254px']}
              />
            </picture>
          </div>
          <div>
            <UnderHandImg
              bottom={['10%', '31%', '51%']}
              right={['-15%', '22%', '26%']}
            ></UnderHandImg>
            <picture>
              <source srcSet={handWithFlowerDesc} media="(min-width: 1440px)" />
              <source srcSet={handWithFlowerTab} media="(min-width: 768px)" />
              <source srcSet={handWithFlower} />
              <HandImg
                srcSet={handWithFlower}
                alt="Darina"
                bottom={['3%', '13%', '49%']}
                right={['-15%', '20%', '22%']}
                width={[null, '185px', '226px']}
              />
            </picture>
          </div>
        </HandsContainer>
        <TextUnderHandsContainer>
          Каждое из них всегда несёт за собой определённое последствие или
          результат. Эти результаты формируют наш дальнейший путь и судьбу.
        </TextUnderHandsContainer>
        <AboutResultText>Всё дает свои плоды!</AboutResultText>
      </Box>
    </Box>
  );
};
