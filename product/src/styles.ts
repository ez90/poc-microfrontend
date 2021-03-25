import styled from 'styled-components';
import { Link } from "react-router-dom";

export const SLink = styled(Link)`
  text-decoration: none;
  padding-right: 10px;
  height: 50px;
  line-height: 50px;
  
  &:visited {
    color: #000;
  }
  
  &:hover {
    text-decoration: underline;
  }
`;

export const SWrapper = styled.main`
  padding: 25px;
  background-color: #fff;
`;

export const SContent = styled.div`
  padding: 10px 15px;
  background-color: #fff;
`;
