import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../../App';
import { Navbar } from '../../components/Navbar';
import { WideCard } from '../../components/WideCard';
import { Product } from '../Products';
import { CartContainer } from './style';

interface CartProps {
    removeFromCart: (product: Product) => void;
    cleanCart: () => void;
}

export function Cart({ removeFromCart, cleanCart }: CartProps) {
    const navigate = useNavigate();
    const cart = useContext(CartContext);

    function handleClickSuccessButton() {
        cleanCart();
        navigate('/success');
    }

    return (
        <CartContainer>
            <Navbar />

            <main>
                {
                    cart.length === 0 ? (
                        <div className='empty-cart'>
                            <h1 className='page-title'>Você não possui nenhum item no carrinho :(</h1>
                            <div>
                                <Link to="/products" className='w-8 h-4 px-3 py-2 font-medium text-light-300 bg-primary-300 hover:bg-primary-500 rounded-[0.625rem]'>
                                    Ver produtos
                                </Link>
                            </div>
                        </div>
                    ) : (
                        <>
                            <h1 className='page-title'>Produtos Selecionados</h1>

                            {
                                cart.map((product) => {
                                    return (
                                        <WideCard
                                            key={product.id}
                                            product={product}
                                            onRemoveFromCart={removeFromCart}
                                        />
                                    );
                                })
                            }

                            <button
                                className='finish-shopping-button'
                                onClick={handleClickSuccessButton}
                            >
                                Finalizar Compra
                            </button>
                        </>
                    )
                }
            </main>
        </CartContainer>
    );
}