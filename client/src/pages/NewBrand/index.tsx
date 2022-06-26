import React, { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ImageInput } from '../../components/ImageInput';
import { Navbar } from '../../components/Navbar';

import api from '../../services/api';

import { promiseRegisterNotify } from '../../utils/promiseRegisterNotify';

import { NewBrandContainer } from './style';

export function NewBrand() {
    const navigate = useNavigate();

    const [name, setName] = useState<string>('');
    const [image, setImage] = useState<File | null>(null);

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        const data = new FormData();

        data.append('name', name);
        if (image) {
            data.append('image', image);
        }

        try {
            await promiseRegisterNotify(api.post('/brands', data));
         
            navigate('/admin');
        } catch (err) {
            // console.log(err.response.data.message);
        }
    }

    return (
        <NewBrandContainer>
            <Navbar />

            <main>
                <h1 className='form-title'>Cadastrar Marca</h1>

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
                                autoComplete="given-brand"
                                placeholder='Nome da marca...'
                                onChange={(event) => setName(event.target.value)}
                                required
                            />
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

        </NewBrandContainer>
    );
}