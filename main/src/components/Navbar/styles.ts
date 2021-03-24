import styled from 'styled-components';
import { Link } from "react-router-dom";

export const SWrapper = styled.div`
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 15px;
  font-family: 'Open Sans',Helvetica,Arial,Lucida,sans-serif;
`;

export const SLink = styled(Link)`
  text-decoration: none;
  padding: 0 10px;
  height: 50px;
  line-height: 50px;
  &:visited {
    color: #000;
  }
  &:hover {
    background-color: #efefef;
  }
`;
