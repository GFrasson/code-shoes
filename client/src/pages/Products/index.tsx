import React, { useEffect, useState } from 'react';
import { Card } from '../../components/Card';
import { Navbar } from '../../components/Navbar';
import api from '../../services/api';

import { ProductsContainer } from './style';

interface Brand {
    id: string;
    name: string;
    image?: string;
}

export interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
    brand: Brand;
}

interface ProductsProps {
    addToCart: (product: Product) => void;
}

export function Products({ addToCart }: ProductsProps) {
    const [products, setProducts] = useState<Product[]>([]);
    const [brands, setBrands] = useState<Brand[]>([]);

    useEffect(() => {
        api.get('/products').then(response => {
            setProducts(response.data);
        });

        api.get('/brands').then(response => {
            setBrands(response.data);
        });
    }, []);

    if (brands.length === 0 || products.length === 0) {
        return (
            <ProductsContainer>
                <Navbar />
                <p className='text-light-300 font-semibold'>Carregando...</p>
            </ProductsContainer>
        );
    }

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
                            {
                                brands.map(brand => {
                                    return (
                                        <option 
                                            key={brand.id} 
                                            value={ brand.id }
                                        >
                                            { brand.name }
                                        </option>
                                    );
                                })
                            }
                        </select>
                    </div>
                </div>
                <div id='productsContainer'>
                    {
                        products.map(product => {
                            return (
                                <Card 
                                    key={product.id}
                                    product={product}
                                    onAddToCart={addToCart}
                                />
                            );
                        })
                    }
                    
                </div>
            </main>
        </ProductsContainer>
    );
}