import React from 'react';
import {SLink, SWrapper} from './styles';

const Navbar = ({increaseCount}) => (
    <SWrapper onClick={increaseCount}>
        <SLink to='/'>Home</SLink>
        <SLink to='/product/' replace>Products</SLink>
        <SLink to='/account/'>Account</SLink>
    </SWrapper>
);

export default Navbar;
