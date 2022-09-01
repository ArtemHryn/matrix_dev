import { TitleEl } from './Title.styled';

export const Title = ({ children }) => {
  return <div>{children && <TitleEl>{children}</TitleEl>}</div>;
};
