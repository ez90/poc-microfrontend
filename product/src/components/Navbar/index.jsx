import React from 'react';
import {SLink, SWrapper} from './styles';

const Navbar = ({increaseCount}) => (
    <SWrapper onClick={increaseCount}>
        <SLink exact={true} activeClassName='is-active' to='/product/'>Our offer</SLink>
        <SLink activeClassName='is-active' to='/product/cloud-data-center/'>Cloud DataCenter</SLink>
        <SLink activeClassName='is-active' to='/product/cloud-server/'>Cloud Server</SLink>
    </SWrapper>
);

export default Navbar;
