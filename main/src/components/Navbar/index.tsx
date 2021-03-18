import React from 'react';
import { SLink, SWrapper } from './styles';


const Navbar = () => (
  <SWrapper>
    <SLink to='/'>Home</SLink>
    <SLink to='/product'>Products</SLink>
    <SLink to='/account'>Account</SLink>
  </SWrapper>
);

export default Navbar;
