import styled from 'styled-components';

export const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;

  input {
    width: 300px;
    padding: 5px 10px;
    margin: 30px 50px 0;
    align-self: flex-start;
  }

  div#productsContainer {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
`;