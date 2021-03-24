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
    /* background-color: #e2e2e2; */
    text-decoration: underline;
  }
`;
