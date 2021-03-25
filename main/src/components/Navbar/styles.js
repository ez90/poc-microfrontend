import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const SWrapper = styled.div`
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: 'Open Sans',Helvetica,Arial,Lucida,sans-serif;
  padding: 0 25px;
  margin-top: 7px;

`;

export const SLink = styled(NavLink)`
  text-decoration: none;
  padding: 0 10px;
  height: 50px;
  line-height: 50px;
  &:visited {
    color: #000;
  }
  &:hover {
    background-color: #f6f6f6;
  }
  &.is-active{
    transition: background-color .3s ease;
    background-color: #efefef;
   }
`;
