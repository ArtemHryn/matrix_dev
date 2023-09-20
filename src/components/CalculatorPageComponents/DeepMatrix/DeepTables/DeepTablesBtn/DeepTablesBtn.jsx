import React from 'react';
import { BtnList, ChangeTableBtn } from './DeepTablesBtn.styled';

const DeepTablesBtn = ({ tableId, setTableId }) => {
  return (
    <BtnList>
      <li>
        <ChangeTableBtn
          color={tableId === 1 ? 'white' : null}
          bg={tableId === 1 ? 'activeBtn' : null}
          onClick={() => setTableId(1)}
        >
          РОДОВЫЕ
        </ChangeTableBtn>
      </li>
      <li>
        <ChangeTableBtn
          color={tableId === 2 ? 'white' : null}
          bg={tableId === 2 ? 'activeBtn' : null}
          onClick={() => setTableId(2)}
        >
          ЦелостнЫЕ
        </ChangeTableBtn>
      </li>
    </BtnList>
  );
};

export default DeepTablesBtn;
