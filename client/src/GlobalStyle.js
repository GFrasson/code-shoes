import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --main-green: #3f96cd;
    --dark-green: #0f6aa3;
    --grey: #303030;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: 'Poppins', sans-serif;
  }
`;

export const PageContainer = styled.div`
  margin: 20px 100px;
  color: var(--grey);
`;

export default GlobalStyle;