import { useTranslation } from 'react-i18next';
import { Box } from 'components/Box';
import { BuyContainer } from '../Buy';
import {
  AdditionalInfo,
  HowIsGoingConsultation,
  Link,
  LinksList,
  List,
  MainTitle,
  Requests,
  Text,
} from './ModalTemplate.styled';

const dotGradient =
  'linear-gradient( to right, #000 10%, rgba(255, 255,255, 0) 0% )';

export const ModalTeamplate = ({ info, price, title }) => {
  const { t } = useTranslation('modals');
  const { textBefore, meeting, additionInfo, list, textAfter, links } = info;
  return (
    <>
      <MainTitle display={['none', 'none', 'block']}>{title}</MainTitle>
      <Box display={[null, null, 'flex']}>
        <Box
          pb="30px"
          backgroundImage={[dotGradient, dotGradient, 'none']}
          backgroundPosition="bottom"
          backgroundSize="15px 2px"
          backgroundRepeat="repeat-x"
          mr={[null, null, '100px']}
        >
          <MainTitle display={[null, null, 'none']}>{title}</MainTitle>
          <Requests>
            <strong>{t('requests')}</strong>
          </Requests>
          {textBefore &&
            textBefore.map((text, index) => (
              <Text
                key={text}
                mb={index === textBefore.length - 1 ? '0px' : '15px'}
              >
                {text}
              </Text>
            ))}
          {list && (
            <List>
              {list.map(item => (
                <li key={item}>
                  <Text>{item}</Text>
                </li>
              ))}
            </List>
          )}
          {textAfter &&
            textAfter.map((text, index) => (
              <Text
                key={text}
                mb={index === textAfter.length - 1 ? '0px' : '15px'}
              >
                {text}
              </Text>
            ))}
        </Box>
        <Box>
          <Box
            display={[null, 'flex']}
            alignItems="center"
            py={['25px', '40px']}
            backgroundImage={dotGradient}
            backgroundPosition="bottom"
            backgroundSize="15px 2px"
            backgroundRepeat="repeat-x"
            flexDirection={[null, null, 'column']}
          >
            <Box width="100%">
              <HowIsGoingConsultation>
                {t('howIsGoingCons')}
              </HowIsGoingConsultation>
              <Box
                display={[null, 'flex']}
                flexDirection={[null, null, 'column']}
              >
                <Text
                  mb={additionInfo && ['20px', '0px', '20px']}
                  width={[null, '320px']}
                >
                  {meeting}
                </Text>
                {links && (
                  <LinksList>
                    {links.map(({ name, link }) => (
                      <li key={name}>
                        <Link
                          href={link}
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          <big>{name}</big>
                        </Link>
                      </li>
                    ))}
                  </LinksList>
                )}

                <Box>
                  {additionInfo &&
                    additionInfo.map((info, index) => (
                      <AdditionalInfo
                        key={info}
                        mb={index === additionInfo.length - 1 ? '0px' : '15px'}
                      >
                        {info}
                      </AdditionalInfo>
                    ))}
                </Box>
              </Box>
            </Box>
          </Box>
          <BuyContainer price={price} />
        </Box>
      </Box>
    </>
  );
};
