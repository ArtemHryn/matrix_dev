import { Box } from 'components/Box';
import { ConsultationList, ConsultationText, ConsultationTitlte } from './ConsultationWas.styled';

export const ConsultationWay = () => {
  return (
    <Box
      id="consultations"
      mr={[null, '25px', '112px']}
      width={[null, null, '385px']}
    >
      <Box>
        <ConsultationTitlte>На Консультации</ConsultationTitlte>
      </Box>
        <ConsultationList>
          <li>
            <ConsultationText>
              Индивидуальный подход к каждой душе и её жизенным проблемам
            </ConsultationText>
          </li>
          <li>
            <ConsultationText>
              Уникальные трактовки соединений энергий в твоей матрице
            </ConsultationText>
          </li>
          <li>
            <ConsultationText>
              Информацию, которая со временем раскроется в новом, глубинном ключе
            </ConsultationText>
          </li>
        </ConsultationList>
    </Box>
  );
};
