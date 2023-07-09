import { Box } from 'components/Box';
import {
  ElemenInfoItem,
  ElemenInfoList,
  KarmaElementInfoTitle,
  KarmaListInfoText,
} from '../../KarmaList.styled';
import { useTranslation } from 'react-i18next';

const KarmaElementInfo = ({ infoEl, mr }) => {
  const {t} = useTranslation('calc')
  const { type, energyInfo } = infoEl;
  return (
    <Box as="li" flex="2" mr={mr}>
      <Box
        display="flex"
        bg="rgba(255, 255, 255, 0.3)"
        border={['0.5px solid #72499B', '1px solid #72499B']}
        borderRadius={['7px', '14px']}
        height={['35px', '67px']}
        alignItems="center"
        mb={['3px', '5px']}
      >
        <KarmaElementInfoTitle
          flex="3"
          borderRight={['0.5px solid #72499B', '1px solid #72499B']}
          pl={['15px', '25px']}
        >
          {type}
        </KarmaElementInfoTitle>
        <KarmaElementInfoTitle flex="1" justifyContent="center">
          {t('karmaIssuesEnergy')}
        </KarmaElementInfoTitle>
      </Box>
      <ElemenInfoList>
        {energyInfo.map((el, index) => (
          <ElemenInfoItem
            key={el.name}
            border={
              index === energyInfo.length - 1 ? ['none', 'none', 'none'] : null
            }
          >
            <KarmaListInfoText
              flex="3"
              borderRight={['0.5px solid #72499B', '1px solid #72499B']}
              pl={['15px', '25px']}
            >
              {el.name}
            </KarmaListInfoText>
            <KarmaListInfoText
              flex="1"
              justifyContent="center"
              fontFamily="digits"
              fontSize={['12px', '26px', '18px']}
            >
              {el.energy}
            </KarmaListInfoText>
          </ElemenInfoItem>
        ))}
      </ElemenInfoList>
    </Box>
  );
};

export default KarmaElementInfo;
