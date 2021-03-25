import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const SWrapper = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid #ccc;
`;

export const SLink = styled(NavLink)`
  text-decoration: none;
  margin: 5px 15px 3px;
  padding: 5px 15px;
  color: #da194e;
  transition: opacity 0.3s ease;
  position: relative;
  
  &:after {
    content: "";
    height: 3px;
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: #da194e;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }
  
  &.is-active{
   transition: background-color .3s ease;
   background-color: #da194e;
   color: #fff;
  }

  &:hover{
    &:after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
`;
