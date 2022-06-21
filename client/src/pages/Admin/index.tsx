import React from 'react';
import { CardCollapse } from '../../components/CardCollapse';
import { Navbar } from '../../components/Navbar';
import { AdminContainer } from './style';

export function Admin() {
    return (
        <AdminContainer>
            <Navbar />
            
            <main>
                <h1 className='title'>Admin</h1>

                <CardCollapse 
                    brandId='123'
                    brandName='Nike'
                    // brandImage={}
                    products={[
                        {
                            id: '123',
                            name: 'Nike blue',
                            price: 199.9
                            // image: 
                        },
                        {
                            id: '123',
                            name: 'Nike red',
                            price: 199.9
                            // image: 
                        }
                    ]}
                />
                <CardCollapse 
                    brandId='123'
                    brandName='Adidas'
                    // brandImage={}
                    products={[
                        {
                            id: '123',
                            name: 'Nike blue',
                            price: 199.9
                            // image: 
                        },
                        {
                            id: '123',
                            name: 'Nike red',
                            price: 199.9
                            // image: 
                        }
                    ]}
                />
            </main>

        </AdminContainer>
    );
}