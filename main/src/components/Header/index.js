import React from "react";
import { useSelector } from 'react-redux';
import { SWrapper, SLabel } from './styles';

const Header = ({ sitename }) => {
    const user = useSelector((state) => state?.user);

    return (
        <SWrapper>
            <SLabel>{sitename}</SLabel>
            <SLabel>{user?.name}</SLabel>
        </SWrapper>
    );
};

export default Header;