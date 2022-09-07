import { TitleEl } from './Title.styled';
import PropTypes from 'prop-types';

export const Title = ({ children }) => {
  return <div>{children && <TitleEl>{children}</TitleEl>}</div>;
};


Title.propTypes = {
  children: PropTypes.string.isRequired,
}