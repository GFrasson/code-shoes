import React, { FormEvent, useEffect, useState } from 'react';
import { Navbar } from '../../components/Navbar';
import { ImageInput } from '../../components/ImageInput';

import { NewProductContainer } from './style';
import { promiseRegisterNotify } from '../../utils/promiseRegisterNotify';
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';

interface Brand {
    id: string;
    name: string;
    image?: string;
}

export function NewProduct() {
    const navigate = useNavigate();

    const [brands, setBrands] = useState<Brand[]>([]);
    const [name, setName] = useState<string>('');
    const [price, setPrice] = useState<number>(0);
    const [brand, setBrand] = useState<string>('');
    const [image, setImage] = useState<File | null>(null);

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        const data = new FormData();

        data.append('name', name);
        data.append('price', String(price));
        data.append('brandId', brand);
        data.append('image', image || '');

        try {
            await promiseRegisterNotify(api.post('/products', data));

            navigate('/admin');
        } catch (err) {
            console.log(err.response.data.message);
        }
    }

    useEffect(() => {
        api.get('/brands').then(response => {
            setBrands(response.data);
            setBrand(response.data[0].id);
        })
    }, []);

    return (
        <NewProductContainer>
            <Navbar />

            <main>
                <h1 className='form-title'>Cadastrar Produto</h1>

                <form className='page-form' onSubmit={handleSubmit}>
                    <section className='md:grid md:grid-cols-2 md:gap-6'>
                        <div className="form-group">
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-light-300"
                            >
                                Nome
                            </label>
                            <input
                                className="mr-4 w-[18.75rem] text-gray-700 bg-light-300 border-none focus:ring-primary-300 focus:border-primary-300 shadow-sm sm:text-sm rounded-[0.625rem]"
                                type='text'
                                id='name'
                                name='name'
                                autoComplete="given-product"
                                placeholder='Nome do produto...'
                                required
                                onChange={(event) => setName(event.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label
                                htmlFor="price"
                                className="block text-sm font-medium text-light-300"
                            >
                                Preço
                            </label>
                            <input
                                className="mr-4 w-[18.75rem] text-gray-700 bg-light-300 border-none focus:ring-primary-300 focus:border-primary-300 shadow-sm sm:text-sm rounded-[0.625rem]"
                                type='number'
                                id='price'
                                name='price'
                                autoComplete="given-price"
                                placeholder='Preço'
                                required
                                onChange={(event) => setPrice(Number(event.target.value))}
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
                                className="py-2 px-3 border w-[18.75rem] text-gray-700 bg-light-300 border-none rounded-[0.625rem] shadow-sm focus:outline-none focus:ring-primary-300 focus:border-primary-300 sm:text-sm"
                                required
                                onChange={(event) => setBrand(event.target.value)}
                            >
                                {
                                    brands.map(brand => {
                                        return (
                                            <option 
                                                key={brand.id}
                                                value={brand.id}
                                            >{brand.name}</option>
                                        );
                                    })
                                }
                            </select>
                        </div>

                        <div className="form-group">
                            <div className="label-text">
                                Imagem
                            </div>
                            <ImageInput 
                                image={image}
                                onImageUpdate={(image) => setImage(image)}
                            />
                        </div>

                        <button 
                            type='submit'
                            className='form-submit'
                        >
                            Cadastrar
                        </button>

                    </section>
                </form>
            </main>

        </NewProductContainer>
    );
}