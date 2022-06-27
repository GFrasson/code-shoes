import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Card } from '../../components/Card';
import { Navbar } from '../../components/Navbar';

import {X} from 'phosphor-react';

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
    const [search, setSearch] = useState<string>('');
    const [brandSelected, setBrandSelected] = useState<string>('');

    useEffect(() => {
        api.get('/brands').then(response => {
            setBrands(response.data);
        });
    }, []);

    useEffect(() => {
        api.get(`/products?search=${search}&brand=${brandSelected}`).then(response => {
            setProducts(response.data);
        });
    }, [search, brandSelected]);

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
                            value={search}
                            onChange={(event) => setSearch(event.target.value)}
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
                            className="py-2 px-3 border w-[10.6rem] text-gray-500 bg-light-300 rounded-[0.625rem] shadow-sm focus:outline-none focus:ring-primary-300 focus:border-primary-300 sm:text-sm"
                            value={brandSelected}
                            onChange={(event) => setBrandSelected(event.target.value)}
                        >
                            <option hidden value="">Marca...</option>
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
                        <span className="clean-brand-filter">
                            {
                                brandSelected &&
                                <button 
                                    className='text-light-300 ml-2'
                                    onClick={() => setBrandSelected('')}
                                >
                                    <X size={16} />
                                </button>
                            }
                        </span>
                    </div>
                </div>
                <div id='productsContainer'>
                    {
                        products.length === 0 ? (
                            <p className='text-light-300 font-semibold'>Nenhum produto encontrado :(</p>
                        ) : (
                            products.map(product => {
                                return (
                                    <Card 
                                        key={product.id}
                                        product={product}
                                        onAddToCart={addToCart}
                                    />
                                );
                            })
                        )
                    }
                </div>
            </main>
        </ProductsContainer>
    );
}