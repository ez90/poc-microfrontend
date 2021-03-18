import React, { FC } from "react";
import { useSelector } from 'react-redux';
import { SWrapper, SLabel } from './styles';

export interface HeaderProps {
    sitename: string;
  }
const Header: FC<HeaderProps> = ({ sitename }) => {
    const user = useSelector((state) => state?.user);

    return (
        <SWrapper>
            <SLabel>{sitename}</SLabel>
            <SLabel>{user?.name}</SLabel>
        </SWrapper>
    );
};

export default Header;