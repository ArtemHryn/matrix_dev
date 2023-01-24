import { Header } from 'components/Header/Header';
import { Outlet } from 'react-router-dom';

export const Layout = ({isMain}) => {
  return (
    <>
      <Header isMain={isMain} />
      <Outlet />
    </>
  );
};
