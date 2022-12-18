import { Box } from 'components/Box';
import { assignCalc } from 'helper/calculateMatrix';
import { AssignElement, Title } from './AssignmentTable.styled';
import { OtherAssign } from './OtherAssign/OtherAssign';
import { Personal } from './Personal/Personal';
import { Social } from './Social/Social';

export const AssignmentTable = ({ data }) => {
  const {
    bottom1,
    month,
    day,
    year,
    topLeft1,
    bottomRight1,
    topRight1,
    bottomLeft1,
    center2,
    center,
  } = data;
  const assignResult = assignCalc({
    bottom1,
    month,
    day,
    year,
    topLeft1,
    bottomRight1,
    topRight1,
    bottomLeft1,
    center2,
    center,
  });

  return (
    <Box display="flex">
      <Box
        p="40px"
        backgroundColor="transparent"
        borderRadius="30px"
        border="1px solid #72499B"
        width="375px"
        position="relative"
        overflow="hidden"
        mr="28px"
      >
        <Title>Личное предназначение</Title>
        <Personal data={assignResult} />
      </Box>
      <Box
        p="40px"
        backgroundColor="transparent"
        borderRadius="30px"
        border="1px solid #72499B"
        width="375px"
        position="relative"
        overflow="hidden"
        mr="28px"
      >
        <Title>Социальное предназначение</Title>
        <Social data={assignResult} />
      </Box>
      <Box backgroundColor="transparent" borderRadius="30px">
        <ul>
          <AssignElement>
            <OtherAssign
              first={assignResult.personal}
              second={assignResult.social}
              result={assignResult.spirit}
            >
              Духовное предназначение
            </OtherAssign>
          </AssignElement>
          <AssignElement>
            <OtherAssign
              first={assignResult.social}
              second={assignResult.spirit}
              result={assignResult.planet}
            >
              Планетарное предназначение
            </OtherAssign>
          </AssignElement>
          <AssignElement>
            <OtherAssign
              first={assignResult.center}
              second={assignResult.center2}
              result={assignResult.insidePower}
            >
              Ключ внутренней силы
            </OtherAssign>
          </AssignElement>
        </ul>
      </Box>
    </Box>
  );
};
