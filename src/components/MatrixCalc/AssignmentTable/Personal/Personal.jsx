import { Box } from "components/Box";
import { checkNum } from "helper/calculateMatrix";
import cornerImg from '../../../../images/personalAssignImage.png';
import { FinalKey, Img } from "../AssignmentTable.styled";
import { Row } from "../Row/Row";


export const Personal = ({ data }) => {
      const { bottom1, month, day, year } = data;
      const sky = checkNum(bottom1 + month);
      const earth = checkNum(day + year);
    return (
      <Box display="flex" alignItems="center">
        <Box>
          <Row
            first={bottom1}
            second={month}
            result={sky}
            name="Небо"
            mb="10px"
          />
          <Row first={day} second={year} result={earth} name="Земля" />
        </Box>
        <FinalKey>{checkNum(sky + earth)}</FinalKey>
        <Img src={cornerImg} alt="planet" />
      </Box>
    );
}