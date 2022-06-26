import React, { FormEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { ImageInput } from '../../components/ImageInput';
import { Navbar } from '../../components/Navbar';

import api from '../../services/api';

import { promiseNotify } from '../../utils/promiseNotify';

import { BrandContainer } from './style';

interface BrandProps {
    title: string;
}

export function Brand({ title }: BrandProps) {
    const navigate = useNavigate();
    const params = useParams();

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
            let promise;
            let messages;

            if (params.id) {
                promise = api.put(`/brands/${params.id}`, data);
                messages = {
                    pending: "Atualizando marca",
                    success: "Marca atualizada com sucesso!",
                    error: "Erro ao atualizar a marca"
                };
            } else {
                promise = api.post('/brands', data);
                messages = {
                    pending: "Cadastrando marca",
                    success: "Marca cadastrada com sucesso!",
                    error: "Erro ao cadastrar a marca"
                };
            }

            await promiseNotify(promise, messages);
         
            navigate('/admin');
        } catch (err) {
            // console.log(err.response.data.message);
        }
    }

    useEffect(() => {
        if (params.id) {
            api.get(`/brands/${params.id}`).then(response => {
                setName(response.data.name);
            });
        }
    }, [params.id]);

    return (
        <BrandContainer>
            <Navbar />

            <main>
                <h1 className='form-title'>{ title }</h1>

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
                                value={name}
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
                            Salvar
                        </button>

                    </section>
                </form>
            </main>

        </BrandContainer>
    );
}