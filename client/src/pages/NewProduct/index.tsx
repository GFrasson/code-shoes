import React, { useState } from 'react';
import { Navbar } from '../../components/Navbar';
import { ImageInput } from '../../components/ImageInput';

import { NewProductContainer } from './style';

export function NewProduct() {
    const [image, setImage] = useState<File | null>(null);

    return (
        <NewProductContainer>
            <Navbar />

            <main>
                <h1 className='form-title'>Cadastrar Produto</h1>

                <form className='page-form' action="">
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
                            >
                                <option>Nike</option>
                                <option>Adidas</option>
                                <option>Polo</option>
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