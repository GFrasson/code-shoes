import React from 'react'
import { NavLink } from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react';

import { NavbarContainer } from './style'

export function Navbar() {
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
          <NavLink to='/cart'><ShoppingCart size={30} /></NavLink>
          <button className='user'>
            <div className='user-avatar'>
            </div>
          </button>
        </div>
      </nav>
    </NavbarContainer>
  );
}