import React from 'react';
import { Navbar } from '../../components/Navbar';
import { WideCard } from '../../components/WideCard';
import { CartContainer } from './style';

export function Cart() {
    return (
        <CartContainer>
            <Navbar />

            <main>
                <h1 className='page-title'>Produtos Selecionados</h1>

                <WideCard />
                <WideCard />
                <WideCard />
                <WideCard />

                <button className='finish-shopping-button'>
                    Finalizar Compra
                </button>
            </main>
        </CartContainer>
    );
}