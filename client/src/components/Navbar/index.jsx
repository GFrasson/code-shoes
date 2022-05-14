import React from 'react'
import { NavLink } from 'react-router-dom'

import { NavbarContainer } from './style'

export function Navbar() {
  return (
    <NavbarContainer>
      <h1>CodeShoes</h1>

      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Produtos</NavLink>
        <NavLink to="/cart">Carrinho</NavLink>
        <NavLink to="/new-product">Cadastrar Produto</NavLink>
        <NavLink to="/new-brand">Cadastrar Marca</NavLink>
        <NavLink to="/admin">Admin</NavLink>
      </nav>
    </NavbarContainer>
  );
}