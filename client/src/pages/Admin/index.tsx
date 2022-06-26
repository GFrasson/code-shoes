import React, { useEffect, useState } from 'react';
import { CardCollapse } from '../../components/CardCollapse';
import { Navbar } from '../../components/Navbar';
import api from '../../services/api';
import { AdminContainer } from './style';

interface Brand {
    id: string;
    name: string;
    image?: string;
    products: Product[];
}

interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
}

export function Admin() {
    const [brands, setBrands] = useState<Brand[]>([]);

    function onProductDelete(deletedProductId: string) {
        setBrands(
            brands.map(brand => {
                return {
                    ...brand,
                    products: brand.products.filter(product => product.id !== deletedProductId),
                }
            })
        );
    }

    useEffect(() => {
        api.get('/brands?products=true').then(response => {
            setBrands(response.data);
        });
    }, []);

    return (
        <AdminContainer>
            <Navbar />

            <main>
                {
                    brands.length === 0 ? (
                        <p className='text-light-300 font-semibold'>Carregando...</p>
                    ) : (
                        <>
                            <h1 className='title'>Admin</h1>

                            {
                                brands.map(brand => {
                                    return (
                                        <CardCollapse
                                            key={brand.id}
                                            brandId={brand.id}
                                            brandName={brand.name}
                                            brandImage={brand.image}
                                            products={brand.products}
                                            onProductDelete={onProductDelete}
                                        />
                                    );
                                })
                            }
                        </>
                    )
                }
            </main>

        </AdminContainer>
    );
}