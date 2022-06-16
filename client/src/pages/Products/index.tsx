import React from 'react';
import { ProductsContainer } from './style';


export function Products() {
  return (
    <ProductsContainer>
      <input
        type="text"
        placeholder="Buscar produto pelo nome..."
      />
      <div id="productsContainer">
        {/* INSERIR OS PRODUTOS AQUI */}
      </div>
    </ProductsContainer>
  );
}