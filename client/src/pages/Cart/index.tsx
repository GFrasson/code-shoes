import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../../components/Navbar';
import { WideCard } from '../../components/WideCard';
import { CartContainer } from './style';

export function Cart() {
    const navigate = useNavigate();

    function handleClickSuccessButton() {
        navigate('/success');
    }

    return (
        <CartContainer>
            <Navbar />

            <main>
                <h1 className='page-title'>Produtos Selecionados</h1>

                <WideCard />
                <WideCard />
                <WideCard />
                <WideCard />

                <button 
                    className='finish-shopping-button'
                    onClick={handleClickSuccessButton}
                >
                    Finalizar Compra
                </button>
            </main>
        </CartContainer>
    );
}