import styled from 'styled-components';
import { border, flexbox, space, typography } from 'styled-system';

export const SectionName = styled.p`
  width: 100%;
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;

  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.7) 0%,
    rgba(249, 237, 255, 0.7) 100%
  );
  border: 0.7px solid #72499b;
  border-radius: 7px;

  font-family: 'Cormorant';
  font-style: italic;
  font-weight: 400;
  font-size: 15px;
  line-height: 1.57;
  letter-spacing: 0.01em;

  color: #72499b;

  margin-bottom: 3px;
`;

export const KarmaElementInfoTitle = styled.p`
  display: flex;
  align-items: center;

  font-family: 'Cormorant';
  font-style: italic;
  font-weight: 400;
  font-size: 15px;
  line-height: 1.32;

  letter-spacing: 0.01em;

  color: #72499b;
  height: 100%;
  ${flexbox}
  ${border}
  ${space}
`;

export const ElemenInfoList = styled.ul`
  background: rgba(255, 255, 255, 0.7);
  background-color: transparent;
  border: 0.5px solid rgba(114, 73, 155, 0.7);
  border-radius: 12px;
  margin-bottom: 4px;
`;
export const ElemenInfoItem = styled.li`
  display: flex;
  align-items: center;
  height: 28px;
  border-bottom: 0.6px solid rgba(144, 113, 175, 0.7);
  ${border}
`;

export const KarmaListInfoText = styled(KarmaElementInfoTitle)`
  font-family: 'Bona Nova';
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 0.81;

  letter-spacing: 0.01em;

  color: #000000;

  ${typography}
`;
