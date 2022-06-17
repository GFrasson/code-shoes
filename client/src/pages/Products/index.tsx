import React from 'react';
import { Card } from '../../components/Card';
import { Navbar } from '../../components/Navbar';

import { ProductsContainer } from './style';

export function Products() {
    return (
        <ProductsContainer>
            <Navbar />

            <main className='products-page'>
                <div className="filter">
                    <div className="form-group">
                        <label
                            htmlFor="product"
                            className="block text-sm font-medium text-light-300"
                        >
                            Nome
                        </label>
                        <input
                            className="mr-4 w-[39rem] text-gray-700 bg-light-300 focus:ring-primary-300 focus:border-primary-300 shadow-sm sm:text-sm rounded-[0.625rem]"
                            type='text'
                            id='product'
                            name='product'
                            autoComplete="given-product"
                            placeholder='Nome do produto...'
                        />
                    </div>

                    <div className="form-group">
                        <label
                            htmlFor="brand"
                            className="block text-sm font-medium text-light-300"
                        >
                            Marca
                        </label>
                        <select
                            id="brand"
                            name="brand"
                            autoComplete="brand-name"
                            className="py-2 px-3 border w-[10.6rem] text-gray-700 bg-light-300 rounded-[0.625rem] shadow-sm focus:outline-none focus:ring-primary-300 focus:border-primary-300 sm:text-sm"
                        >
                            <option>Nike</option>
                            <option>Adidas</option>
                            <option>Polo</option>
                        </select>
                    </div>
                </div>
                <div id='productsContainer'>
                    <Card 
                        name='Tênis Nike - Blue'
                        brand='Nike'
                        price={199.90}
                    />
                    <Card 
                        name='Tênis Nike - Blue'
                        brand='Nike'
                        price={199.90}
                    />
                    <Card 
                        name='Tênis Nike - Blue'
                        brand='Nike'
                        price={199.90}
                    />
                    <Card 
                        name='Tênis Nike - Blue'
                        brand='Nike'
                        price={199.90}
                    />
                    <Card 
                        name='Tênis Nike - Blue'
                        brand='Nike'
                        price={199.90}
                    />
                    <Card 
                        name='Tênis Nike - Blue'
                        brand='Nike'
                        price={199.90}
                    />
                    <Card 
                        name='Tênis Nike - Blue'
                        brand='Nike'
                        price={199.90}
                    />
                    <Card 
                        name='Tênis Nike - Blue'
                        brand='Nike'
                        price={199.90}
                    />
                    <Card 
                        name='Tênis Nike - Blue'
                        brand='Nike'
                        price={199.90}
                    />
                </div>
            </main>
        </ProductsContainer>
    );
}