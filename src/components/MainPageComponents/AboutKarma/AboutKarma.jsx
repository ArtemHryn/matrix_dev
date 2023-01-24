import { Box } from 'components/Box';
import smallStar from 'images/smallStar.png';
import crystal from 'images/crystal.png';
import mirrorCrystal from 'images/mirrorCrystal.png';
import handWithJel from 'images/aboutImages/handWithJel.png';
import hands from 'images/aboutImages/hands.png';
import plant from 'images/aboutImages/plant.png';
import handWithFlower from 'images/aboutImages/handWithFlower.png';
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
      <Box maxWidth={['430px', '768px', '1440px']} px="60px" m="0 auto">
        <Box position="relative" mb="39px">
          <Title>Что такое карма и как она работает?</Title>
          <TitleStarImg src={smallStar} alt="star" />
        </Box>
        <AboutReasonContainer p="18px 32px 18px 5px" mb="11px">
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
        <HandsContainer>
          <TextNearHands>
            Мысли, речь, поступки - это всё действия, которые мы совершам
            ежедневно.
          </TextNearHands>

          <div>
            <UnderHandImg top="10%" left="-20%"></UnderHandImg>
            <picture>
              <source srcSet={handWithJel} />
              <HandImg
                srcSet={handWithJel}
                alt="Darina"
                top="10%"
                left="-20%"
              />
            </picture>
          </div>
          <div>
            <UnderHandImg bottom="-10%" left="0%"></UnderHandImg>
            <picture>
              <source srcSet={hands} />
              <HandImg srcSet={hands} alt="Darina" bottom="-10%" left="0%" />
            </picture>
          </div>
          <div>
            <UnderHandImg top="-5%" right="-5%"></UnderHandImg>
            <picture>
              <source srcSet={plant} />
              <HandImg srcSet={plant} alt="Darina" top="-5%" right="-5%" />
            </picture>
          </div>
          <div>
            <UnderHandImg bottom="10%" right="-15%"></UnderHandImg>
            <picture>
              <source srcSet={handWithFlower} />
              <HandImg
                srcSet={handWithFlower}
                alt="Darina"
                bottom="3%"
                right="-15%"
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
