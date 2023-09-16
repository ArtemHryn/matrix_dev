import styled from 'styled-components';
import { Dropdown } from 'primereact/dropdown';

export const DropDownLib = styled(Dropdown)`
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.5);
  border: 0.8px solid rgba(221, 197, 255, 0.6);
  border-radius: 8px;
  font-family: 'Cormorant';
  font-size: 18px;
  line-height: 22px;
  padding: 11px 15px;
  width: calc(100% / 2);
`;
