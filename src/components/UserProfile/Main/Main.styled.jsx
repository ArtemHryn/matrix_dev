import styled from 'styled-components';

export const UserProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${p => p.theme.space[5]}px;
  align-items: center;
`;
export const Photo = styled.img`
  border-radius: ${p => p.theme.radii.round};
  width: ${p => p.theme.sizes.imgW};
  height: auto;
  margin-bottom: ${p => p.theme.space[5]}px;
`;

export const UserName = styled.h3`
  color: ${p => p.theme.colors.nameColor};
  font-weight: ${p => p.theme.fontWeights.bold};
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const HowTofind = styled.p`
  color: ${p => p.theme.colors.secondary};
  margin-bottom: ${p => p.theme.space[4]}px;
`;