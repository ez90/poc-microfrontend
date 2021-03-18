import styled from 'styled-components';
import { Link } from "react-router-dom";

export const SWrapper = styled.div`
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 25px;
`;

export const SLink = styled(Link)`
  padding-right: 25px;
`;
