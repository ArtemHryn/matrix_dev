import React from 'react';
import { BtnList, ChangeTableBtn } from './DeepTablesBtn.styled';
import { useTranslation } from 'react-i18next';

const DeepTablesBtn = ({ tableId, setTableId }) => {
  const { t } = useTranslation('calc');
  return (
    <BtnList>
      <li>
        <ChangeTableBtn
          color={tableId === 1 ? 'white' : null}
          bg={tableId === 1 ? 'activeBtn' : null}
          onClick={() => setTableId(1)}
        >
          {t('deepGenericBtn1')}
        </ChangeTableBtn>
      </li>
      <li>
        <ChangeTableBtn
          color={tableId === 2 ? 'white' : null}
          bg={tableId === 2 ? 'activeBtn' : null}
          onClick={() => setTableId(2)}
          disabled={true}
        >
          {t('deepGenericBtn2')}
        </ChangeTableBtn>
      </li>
    </BtnList>
  );
};

export default DeepTablesBtn;
