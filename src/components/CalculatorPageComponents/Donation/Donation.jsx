import { Box } from 'components/Box';
import React from 'react';
import {
  BkCoffeeLogo,
  DonationLink,
  Img,
  LikeTheProject,
  SaveService,
} from './Donation.styled';

import star from 'images/Calculator/Donation/star.webp';
import image from 'images/Calculator/Donation/image.webp';
import { ReactComponent as PayPal } from 'images/Calculator/Donation/paypalLogo.svg';
import { ReactComponent as MonoLogo } from 'images/Calculator/Donation/monoLogo.svg';
import { ReactComponent as MonoText } from 'images/Calculator/Donation/monoText.svg';

const gradients = [
  'radial-gradient(circle, rgba(173,93,201,0.3) 30%, rgba(255,255,255,0.01) 60%)',
  'radial-gradient(circle, rgba(173,93,201,0.3) 10%, rgba(255,255,255,0.01) 45%)',
  'linear-gradient(180deg, rgba(255,255,255,0.01) 0%, rgba(173,93,201,0.3) 50%, rgba(255,255,255,0.01) 100%);',
];

const Donation = () => {
  return (
    <Box
      id="donation"
      as="section"
      py={['40px', null, '80px']}
      background={[...gradients]}
    >
      <Box
        maxWidth={['400px', '768px', '1440px']}
        position="relative"
        px={['37px', '32px', '84px']}
        m="0 auto"
      >
        <LikeTheProject>
          Если тебе понравился калькулятор,{' '}
          <Box as="br" display={[null, null, 'none']} />
          ты{' '}
          <LikeTheProject as="span" fontWeight="600">
            можешь угостить
          </LikeTheProject>{' '}
          команду разработчиков{' '}
          <LikeTheProject as="span" fontWeight="600">
            чашечкой кофе
          </LikeTheProject>
          .
        </LikeTheProject>
        <SaveService>
          Это поможет сохранить сервис бесплатным и работать над его
          улучшениями.
        </SaveService>
        <Box display={[null, null, 'flex']} gridGap="48px">
          <DonationLink
            href="https://www.buymeacoffee.com/dari.karma"
            target="_blank"
          >
            <BkCoffeeLogo />
            Buy me a coffee
          </DonationLink>
          <DonationLink
            href="https://www.paypal.com/paypalme/DariKarma"
            target="_blank"
          >
            <PayPal height="60%" />
          </DonationLink>
          <DonationLink
            href="https://send.monobank.ua/jar/Ahdui3wh3P"
            target="_blank"
          >
            <MonoLogo height="55%" />
            <MonoText height="30%" />
          </DonationLink>
        </Box>
        <Img
          src={star}
          alt="star"
          width="32px"
          top={['-4%', '-5%', '-2%']}
          left={['4%', '2%', '4%']}
        />
        <Img
          src={star}
          alt="star"
          width={['22px', '28px', '32px']}
          bottom="8%"
          right={['12%', '20%', '10%']}
        />
        <Img
          src={image}
          alt="asterism"
          width={['240px', '340px', '450px']}
          bottom={['13%', '15%', '-20%']}
          right={['-1%', '10%', '5%']}
        />
      </Box>
    </Box>
  );
};

export default Donation;
