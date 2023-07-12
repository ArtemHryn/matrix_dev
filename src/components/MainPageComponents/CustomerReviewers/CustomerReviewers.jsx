import { useEffect, useState } from 'react';
import useMeasure from 'react-use-measure';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Autoplay,
  Thumbs,
  Navigation,
  Pagination,
  EffectCoverflow,
} from 'swiper';
import {
  Cont,
  FeedbackDescription,
  FeedbackTitle,
  Separator,
  YourDarina,
} from './CustomerReviewers.styled';
import { Box } from 'components/Box';
import feedback1 from 'images/customerReviewers/1.webp';
import feedback2 from 'images/customerReviewers/2.webp';
import feedback3 from 'images/customerReviewers/3.webp';
import feedback4 from 'images/customerReviewers/4.webp';
import feedback5 from 'images/customerReviewers/5.webp';
import feedback6 from 'images/customerReviewers/6.webp';
import feedback7 from 'images/customerReviewers/7.webp';
import feedback8 from 'images/customerReviewers/8.webp';
import feedback9 from 'images/customerReviewers/9.webp';
import feedback10 from 'images/customerReviewers/10.webp';
import feedback11 from 'images/customerReviewers/11.webp';
import feedback12 from 'images/customerReviewers/12.webp';
import feedback13 from 'images/customerReviewers/13.webp';
import goldenSeparator from 'images/customerReviewers/goldenSeparator.png';
import { ReactComponent as HeardIcon } from 'images/customerReviewers/heard.svg';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-coverflow';
import { useTranslation } from 'react-i18next';

export const CustomerReviewers = () => {
  const [swiperStyleNumber, setSwiperStyleNumber] = useState(null);
  const [ref, { width }] = useMeasure();
  const { t } = useTranslation();

  useEffect(() => {
    if (width === 1440) {
      setSwiperStyleNumber(3);
    }
    if (width === 768) {
      setSwiperStyleNumber(1);
    }
    if (width === 400) {
      setSwiperStyleNumber(1);
    }
  }, [width]);

  return (
    <Box as="section" py={['40px', '40px', '90px']} id="feedback">
      <Box
        maxWidth={['400px', '768px', '1440px']}
        px={['60px', '33px', '100px']}
        m="0 auto"
        ref={ref}
      >
        <Box
          display={[null, 'flex', 'flex']}
          alignItems="center"
          justifyContent="space-between"
        >
          <FeedbackTitle>{t('feedback')}</FeedbackTitle>
          <FeedbackDescription>{t('feedbackDesc')}</FeedbackDescription>
        </Box>
        <YourDarina>
          ваша Дарина <HeardIcon />
        </YourDarina>

        <Box width={[null, '550px', '100%']} m="0 auto">
          <Swiper
            slidesPerView={swiperStyleNumber}
            autoplay={true}
            navigation
            pagination={{ clickable: true }}
            effect="coverflow"
            modules={[
              Thumbs,
              Navigation,
              Autoplay,
              Pagination,
              EffectCoverflow,
            ]}
          >
            <SwiperSlide>
              <Cont src={feedback13} alt="Отзыв Дарина Дупак" loading="lazy" />
            </SwiperSlide>
            <SwiperSlide>
              <Cont src={feedback1} alt="Отзыв Дарина Дупак" loading="lazy" />
            </SwiperSlide>
            <SwiperSlide>
              <Cont src={feedback2} alt="Отзыв Дарина Дупак" loading="lazy" />
            </SwiperSlide>
            <SwiperSlide>
              <Cont src={feedback12} alt="Отзыв Дарина Дупак" loading="lazy" />
            </SwiperSlide>
            <SwiperSlide>
              <Cont src={feedback3} alt="Отзыв Дарина Дупак" loading="lazy" />
            </SwiperSlide>
            <SwiperSlide>
              <Cont src={feedback4} alt="Отзыв Дарина Дупак" loading="lazy" />
            </SwiperSlide>
            <SwiperSlide>
              <Cont src={feedback6} alt="Отзыв Дарина Дупак" loading="lazy" />
            </SwiperSlide>
            <SwiperSlide>
              <Cont src={feedback5} alt="Отзыв Дарина Дупак" loading="lazy" />
            </SwiperSlide>

            <SwiperSlide>
              <Cont src={feedback7} alt="Отзыв Дарина Дупак" loading="lazy" />
            </SwiperSlide>
            <SwiperSlide>
              <Cont src={feedback8} alt="Отзыв Дарина Дупак" loading="lazy" />
            </SwiperSlide>
            <SwiperSlide>
              <Cont src={feedback9} alt="Отзыв Дарина Дупак" loading="lazy" />
            </SwiperSlide>
            <SwiperSlide>
              <Cont src={feedback10} alt="Отзыв Дарина Дупак" loading="lazy" />
            </SwiperSlide>
            <SwiperSlide>
              <Cont src={feedback11} alt="Отзыв Дарина Дупак" loading="lazy" />
            </SwiperSlide>
          </Swiper>
        </Box>
        <Separator src={goldenSeparator} alt="golden stars" loading="lazy" />
      </Box>
    </Box>
  );
};
