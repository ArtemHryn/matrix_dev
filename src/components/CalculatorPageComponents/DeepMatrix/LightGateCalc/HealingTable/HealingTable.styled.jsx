import { motion } from 'framer-motion';
import styled from 'styled-components';
import { border } from 'styled-system';

export const HealingTableTitle = styled.h2`
  width: 100%;
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;

  background: linear-gradient(180deg, rgba(255, 255, 255, 0.7) 0%, rgba(249, 237, 255, 0.7) 100%);
  border: 0.7px solid ${p => p.theme.colors.text};
  border-radius: 7px;

  font-family: ${p => p.theme.fonts.main};
  font-style: italic;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.57;
  letter-spacing: 0.01em;

  color: ${p => p.theme.colors.text};

  margin-bottom: 3px;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    height: 78px;
    font-size: 29px;
    margin-bottom: 6px;
    border: 1px solid ${p => p.theme.colors.text};
    border-radius: 13px;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    height: 75px;
    font-size: 30px;
    line-height: 1.13;
  }
`;

export const HealingRowNameList = styled.ul`
  display: flex;
  align-items: center;

  border-radius: 11px;
  border: 0.66px solid #72499b;
  background: rgba(255, 255, 255, 0.7);
  height: 35px;
  cursor: pointer;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    height: 55px;
  }
`;

export const HealingRowNameListEl = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25%;
  height: 100%;
  border-left: 0.66px solid #72499b;
  ${border}
`;

export const HealingRowName = styled.p`
  font-style: italic;
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 22px;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    font-size: 26px;
  }
`;

export const HealingKeysList = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  border: 0.66px solid #72499b;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.7);
`;

export const HealingKeysListEl = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  border-top: 0.66px solid #72499b;
  ${border}
  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    height: 55px;
  }
`;

export const HealingKey = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25%;
  height: 100%;
  border-left: 0.66px solid #72499b;
  ${border}
  color: ${p => p.theme.colors.secondText};
  font-family: ${p => p.theme.fonts.digits};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.19;
  letter-spacing: 0.14px;

  @media screen and (min-width: ${p => p.theme.sizes.tablet}) {
    font-size: 24px;
  }
  @media screen and (min-width: ${p => p.theme.sizes.desktop}) {
    font-size: 26px;
  }
`;
