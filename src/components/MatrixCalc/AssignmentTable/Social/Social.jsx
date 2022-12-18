import { Box } from "components/Box";
import { checkNum } from "helper/calculateMatrix";
import { FinalKey, Img } from "../AssignmentTable.styled";
import { Row } from "../Row/Row";
import cornerImg from '../../../../images/social.png';

export const Social = ({ data }) => {
  const { topLeft1, bottomRight1, topRight1, bottomLeft1 } = data;
  const father = checkNum(topLeft1 + bottomRight1);
  const mother = checkNum(topRight1 + bottomLeft1);
  return (
    <Box display="flex" alignItems="center">
      <Box>
        <Row
          first={bottomRight1}
          second={topLeft1}
          result={father}
          name="Отец"
          mb="10px"
        />
        <Row
          first={bottomLeft1}
          second={topRight1}
          result={mother}
          name="Мать"
        />
      </Box>
      <FinalKey>{checkNum(father + mother)}</FinalKey>
      <Img src={cornerImg} alt="planet" />
    </Box>
  );
};
