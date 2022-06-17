import React from 'react';
import { Navbar } from '../../components/Navbar';
import { ProductsContainer } from './style';


export function Products() {
    return (
        <ProductsContainer>
            <Navbar />

            <main className='products-page'>
                <input
                    className='search'
                    type='text'
                    placeholder='Nome do produto...'
                />
                <div id='productsContainer'>
                    {/* INSERIR OS PRODUTOS AQUI */}
                </div>

            </main>
        </ProductsContainer>
    );
}