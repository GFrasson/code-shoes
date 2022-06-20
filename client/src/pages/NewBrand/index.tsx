import React, { useState } from 'react';
import { ImageInput } from '../../components/ImageInput';
import { Navbar } from '../../components/Navbar';
import { NewBrandContainer } from './style';

export function NewBrand() {
    const [image, setImage] = useState<File | null>(null);

    return (
        <NewBrandContainer>
            <Navbar />

            <main>
                <h1 className='form-title'>Cadastrar Marca</h1>

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
                                autoComplete="given-brand"
                                placeholder='Nome da marca...'
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