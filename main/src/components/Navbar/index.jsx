import React from 'react';
import {SLink, SWrapper} from './styles';

const Navbar = ({increaseCount}) => (
    <SWrapper onClick={increaseCount}>
        <SLink exact={true}  activeClassName='is-active' to='/'>Home</SLink>
        <SLink activeClassName='is-active' to='/product/' replace>Products</SLink>
        <SLink activeClassName='is-active' to='/account/'>Account</SLink>
        <SLink activeClassName='is-active' to='/blog/'>Blog</SLink>
    </SWrapper>
);

export default Navbar;
