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

    useEffect(() => {
        api.get('/brands?products=true').then(response => {
            setBrands(response.data);
        });
    }, []);

    return (
        <AdminContainer>
            <Navbar />
            
            <main>
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
                            />
                        );
                    })
                }

            </main>

        </AdminContainer>
    );
}