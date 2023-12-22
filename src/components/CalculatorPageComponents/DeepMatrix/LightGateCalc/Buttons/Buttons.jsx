import { useTranslation } from 'react-i18next';
import {
  BtnItem,
  BtnList,
} from 'components/CalculatorPageComponents/PersonalMatrix/MatrixBtn/MatrixBtn.styled';
import { Button } from './Buttons.styled';

const Buttons = ({ setTable, table }) => {
  const { t } = useTranslation('calc');
  return (
    <BtnList>
      <BtnItem>
        <Button onClick={() => setTable(1)} className={table === 1 ? 'active' : ''}>
          16 карм
        </Button>
      </BtnItem>
      <BtnItem>
        <Button onClick={() => setTable(2)} className={table === 2 ? 'active' : ''}>
          {t('deepLightGateBtn')}
        </Button>
      </BtnItem>
    </BtnList>
  );
};

export default Buttons;
