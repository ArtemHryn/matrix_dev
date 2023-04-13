import { Box } from 'components/Box';
import React from 'react';
import {
  ElemenInfoItem,
  ElemenInfoList,
  KarmaElementInfoTitle,
  KarmaListInfoText,
} from '../../KarmaList.styled';

const KarmaElementInfo = ({ infoEl }) => {
  const { type, energyInfo } = infoEl;
  return (
    <li>
      <Box
        display="flex"
        bg="rgba(255, 255, 255, 0.3)"
        border={['0.5px solid #72499B']}
        borderRadius={['7px']}
        height="35px"
        alignItems="center"
        mb={['3px']}
      >
        <KarmaElementInfoTitle
          flex="3"
          borderRight={['0.5px solid #72499B']}
          pl={['15px']}
        >
          {type}
        </KarmaElementInfoTitle>
        <KarmaElementInfoTitle flex="1" justifyContent="center">
          Энергия
        </KarmaElementInfoTitle>
      </Box>
      <ElemenInfoList>
        {energyInfo.map((el, index) => (
          <ElemenInfoItem
            key={el.name}
            border={index === energyInfo.length - 1 ? 'none' : null}
          >
            <KarmaListInfoText
              flex="3"
              borderRight={['0.5px solid #72499B']}
              pl={['15px']}
            >
              {el.name}
            </KarmaListInfoText>
            <KarmaListInfoText
              flex="1"
              justifyContent="center"
              fontWeight="700"
              fontFamily="digits"
              fontSize="10px"
            >
              {el.energy}
            </KarmaListInfoText>
          </ElemenInfoItem>
        ))}
      </ElemenInfoList>
    </li>
  );
};

export default KarmaElementInfo;
