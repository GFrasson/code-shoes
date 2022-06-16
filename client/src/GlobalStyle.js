import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --dark-300: #1B2B32;
    --dark-500: #17252B;
    --light-300: #F4F6F5; 
    --primary-300: #3CB0C6;
    --secondary-300: #ED3B2B;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: 'Nunito', sans-serif;
  }

  body {
    background-color: var(--dark-300);
  }
`;

export const PageContainer = styled.div`
  margin: 20px 100px;
  color: var(--light-300);
`;

export default GlobalStyle;