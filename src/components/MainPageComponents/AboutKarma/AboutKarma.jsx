import { Box } from 'components/Box';
import smallStar from 'images/smallStar.png';
import crystal from 'images/crystal.png';
import mirrorCrystal from 'images/mirrorCrystal.png';
import handWithJel from 'images/aboutImages/handWithJel.png';
import handWithJelTab from 'images/aboutImages/handWithJelTab.png';
import hands from 'images/aboutImages/hands.png';
import plant from 'images/aboutImages/plant.png';
import handWithFlower from 'images/aboutImages/handWithFlower.png';
import handsTab from 'images/aboutImages/handsTab.png';
import plantTab from 'images/aboutImages/plantTab.png';
import handWithFlowerTab from 'images/aboutImages/handWithFlowerTab.png';
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
    <Box as="section" pt="40px" pb="40px" backgroundImage={sectionGradient}>
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
            mr={[null, '13px', '13px']}
          >
            <CrystalContainer mr="5px">
              <CrystalImg src={crystal} alt="crystal" left="40%" />
            </CrystalContainer>
            <AboutDesc>Учениям о карме более 2,5 тыс лет</AboutDesc>
          </AboutReasonContainer>
          <AboutReasonContainer p="18px 5px 18px 32px" mb="45px">
            <AboutDesc>
              “Карма” с санскрита переводится, как «действие, деятельность»
            </AboutDesc>
            <CrystalContainer ml="5px">
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
              top={['10%', '20%', '20%']}
              left={['-20%', '15%', '15%']}
            ></UnderHandImg>
            <picture>
              <source srcSet={handWithJelTab} media="(min-width: 768px)" />
              <source srcSet={handWithJel} />
              <HandImg
                srcSet={handWithJel}
                alt="Darina"
                top={['10%', '15%', '20%']}
                left={['-20%', '10%', '-20%']}
                width={[null, '148px', '148px']}
              />
            </picture>
          </div>
          <div>
            <UnderHandImg
              bottom={['-10%', '-10%', '-10%']}
              left={['0%', '80%', '0%']}
            ></UnderHandImg>
            <picture>
              <source srcSet={handsTab} media="(min-width: 768px)" />
              <source srcSet={hands} />
              <HandImg
                srcSet={hands}
                alt="Darina"
                bottom={['-10%', '-15%', '-10%']}
                left={['0%', '80%', '0%']}
                width={[null, '137px', '137px']}
              />
            </picture>
          </div>
          <div>
            <UnderHandImg
              top={['-5%', '10%', '-5%']}
              right={['-5%', '49%', '-5%']}
            ></UnderHandImg>
            <picture>
              <source srcSet={plantTab} media="(min-width: 768px)" />
              <source srcSet={plant} />
              <HandImg
                srcSet={plant}
                alt="Darina"
                top={['-5%', '10%', '-5%']}
                right={['-5%', '42%', '-5%']}
                width={[null, '207px', '207px']}
              />
            </picture>
          </div>
          <div>
            <UnderHandImg
              bottom={['10%', '31%', '10%']}
              right={['-15%', '22%', '-15%']}
            ></UnderHandImg>
            <picture>
              <source srcSet={handWithFlowerTab} media="(min-width: 768px)" />
              <source srcSet={handWithFlower} />
              <HandImg
                srcSet={handWithFlower}
                alt="Darina"
                bottom={['3%', '13%', '3%']}
                right={['-15%', '20%', '-15%']}
                width={[null, '185px', '185px']}
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
