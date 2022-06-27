import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ShoppingCart, SmileySticker, Package, UserGear,  SignIn, SignOut } from 'phosphor-react';

import { NavbarContainer } from './style';
import { CartContext } from '../../App';
import { AuthContext } from '../../auth';

export function Navbar() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const cart = useContext(CartContext);
    const auth = useContext(AuthContext);

    return (
        <NavbarContainer>
            <nav>
                <NavLink className='logo' to='/'>
                    <span className='text-secondary-300'>Code</span>
                    <span className='text-primary-300'>Shoes</span>
                </NavLink>

                <div className='links flex justify-center'>
                    <NavLink to='/'>HOME</NavLink>
                    <NavLink to='/products'>PRODUTOS</NavLink>
                </div>

                <div className='flex justify-center'>
                    <NavLink className='cart' to='/cart'>
                        <div className="cart-container">
                            <ShoppingCart size={30} />
                            <span className='cart-counter'>{ cart.length }</span>
                        </div>
                    </NavLink>

                    <nav className="md:flex space-x-10">
                        <div className="relative">
                            <div>
                                {
                                    auth.authenticated ? (
                                        <button 
                                            className='user'
                                            onClick={() => setDropdownOpen(!dropdownOpen)}
                                        >
                                            <img src="https://cdn-icons-png.flaticon.com/512/236/236831.png" className='user-avatar' />
                                        </button>
                                    ) : (
                                        <button
                                            className='user'
                                            onClick={async () => await auth.login()}
                                        >
                                            <span className='flex justify-center'>
                                                <SignIn size={24} /> Entrar
                                            </span>
                                        </button>
                                    )
                                }
                            </div>

                            <div className={`${!dropdownOpen && 'hidden'} dropdown absolute z-10 -ml-4 mt-8 transform px-2 w-screen max-w-[15rem] sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2`}>
                                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                    <div className="relative grid gap-6 bg-dark-500 px-5 py-6 sm:gap-8 sm:p-8">
                                        <Link to="/admin/products/create" className="-m-3 p-3 flex items-start rounded-lg hover:bg-dark-300">
                                            <Package size={18} />
                                            <div className="ml-4">
                                                <p className="text-base font-medium text-light-300">Cadastrar Produto</p>
                                                <p className="mt-1 text-sm text-gray-500">Cadastre um novo produto</p>
                                            </div>
                                        </Link>
                                        <Link to="/admin/brands/create" className="-m-3 p-3 flex items-start rounded-lg hover:bg-dark-300">
                                            <SmileySticker size={18} />
                                            <div className="ml-4">
                                                <p className="text-base font-medium text-light-300">Cadastrar Marca</p>
                                                <p className="mt-1 text-sm text-gray-500">Cadastre uma nova marca</p>
                                            </div>
                                        </Link>
                                        <Link to="/admin" className="-m-3 p-3 flex items-start rounded-lg hover:bg-dark-300">
                                            <UserGear size={18} />
                                            <div className="ml-4">
                                                <p className="text-base font-medium text-light-300">Área administrativa</p>
                                                <p className="mt-1 text-sm text-gray-500">Acessar a área administrativa</p>
                                            </div>
                                        </Link>
                                        <button 
                                            className="-m-3 p-3 flex items-start rounded-lg hover:bg-dark-300"
                                            onClick={async () => {
                                                await auth.logout();
                                                setDropdownOpen(false);
                                            }}
                                        >
                                            <SignOut size={18} />
                                            <div className="ml-4">
                                                <p className="text-base font-medium text-light-300">Logout</p>
                                                <p className="mt-1 text-sm text-gray-500">Sair</p>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </nav>
        </NavbarContainer>
    );
}