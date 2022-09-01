import styled from 'styled-components';

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  background-color: ${p => p.theme.colors.staticBg};
  padding: ${p => p.theme.space[3]}px;
  width: ${p => p.theme.sizes.friendItemW};
  margin-bottom: ${p => p.theme.space[3]}px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
  border-radius: ${p => p.theme.radii.normal}; ;
`;

export const OnlineStatus = styled.span`
  width: 10px;
  height: 10px;
  border-radius: ${p => p.theme.radii.round};
  background-color: ${p => {
    return p.isOnline ? p.theme.colors.green : p.theme.colors.red;
  }};
  margin-right: ${p => p.theme.space[3]}px;
`;

export const Photo = styled.img`
  margin-right: ${p => p.theme.space[3]}px;
`;

export const FriendName = styled.p`
  font-weight: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
`;