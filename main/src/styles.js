import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'

export const SWrapper = styled.main`
  margin: 0;
  padding: 25px;
  background-color: #efefef;
  font-family: 'Open Sans',Helvetica,Arial,Lucida,sans-serif;
`;

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    border: 0;
  }
`