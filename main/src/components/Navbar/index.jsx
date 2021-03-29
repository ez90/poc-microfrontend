import React from 'react';
import { useSelector } from 'react-redux';
import { SLink, SWrapper } from './styles';

const Navbar = ({ increaseCount }) => {
  const user = useSelector((state) => state?.user);

  return (
    <SWrapper onClick={increaseCount}>
      <SLink exact={true} activeClassName='is-active' to='/'>
        Home
      </SLink>
      <SLink activeClassName='is-active' to='/product/' replace>
        Products
      </SLink>
      <SLink activeClassName='is-active' to='/blog/'>
        Blog
      </SLink>
      {user?.isConnected && (
        <>
          <SLink activeClassName='is-active' to='/settings/'>
            Settings
          </SLink>
          <SLink activeClassName='is-active' to='/shopping/'>
            Shopping
          </SLink>
        </>
      )}
    </SWrapper>
  );
};

export default Navbar;
