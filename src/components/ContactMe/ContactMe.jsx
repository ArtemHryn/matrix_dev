import { Box } from 'components/Box';
import { Container } from 'components/Container/Container';
import { AboutEducation, ContactButton, Img, TeacherLink, Text, UnderTitle } from './ContactMe.styled';
import dariPhoto from '../../images/DariPhoto.jpg';

export const ContactMe = () => {
  return (
    <Container
      display="flex"
      justifyContent="center"
      p="50px 115px"
      flexDirection="column"
      ps="90px 0"
      id="consultation"
    >
      <Box
        m="0 auto"
        backgroundColor="#FFFFFF"
        borderRadius="36px"
        display="flex"
        mb="40px"
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p="91px 56px"
        >
          <Text>
            Хотите больше узнать о своей судьбе и изменить её к лучшему?
          </Text>
          <UnderTitle>
            Я буду рада стать вашим проводником на прекрасном пути транформации.
          </UnderTitle>
          <ContactButton
            href="https://telegram.me/DariKarma"
            target="_blank"
            rel="noreferrer noopener"
          >
            Записаться
          </ContactButton>
        </Box>
        <Img src={dariPhoto} alt="DariPhoto" />
      </Box>
      <AboutEducation>
        Обучиться всем профессиональным расчётам можно у{' '}
        <TeacherLink
          href="https://instagram.com/metod_ladini?igshid=NTdlMDg3MTY="
          target="_blank"
          rel="noreferrer noopener"
        >
          Наталии Ладини
        </TeacherLink>{' '}
        и{' '}
        <TeacherLink
          href="https://instagram.com/karmolog4u?igshid=NTdlMDg3MTY="
          target="_blank"
          rel="noreferrer noopener"
        >
          Сергея Скляренко
        </TeacherLink>
      </AboutEducation>
    </Container>
  );
};
