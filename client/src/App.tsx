import React, { createContext, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

// Pages
import { Home } from './pages/Home';
import { Product, Products } from './pages/Products';
import { ProductPage } from './pages/ProductPage';
import { Brand } from './pages/Brand';
import { Login } from './pages/Login';
import { Admin } from './pages/Admin';
import { Error } from './pages/Error';
import { Cart } from './pages/Cart';
import { SuccessfulPurchase } from './pages/SuccessfulPurchase';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CartContext = createContext<Product[]>([]);

function App() {
  const [cart, setCart] = useState<Product[]>([]);

  function addToCart(product: Product): void {
    const productAlreadyOnCart = cart.some(cartProduct => cartProduct.id === product.id);
    if (productAlreadyOnCart) {
      return;
    }

    setCart([...cart, product]);
  }

  function removeFromCart(product: Product): void {
    const newCart = cart.filter(cartProduct => cartProduct.id !== product.id);
    setCart(newCart);
  }

  function cleanCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider value={cart}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products addToCart={addToCart} />} />
        <Route path="cart" element={
          <Cart 
            removeFromCart={removeFromCart}
            cleanCart={cleanCart}
          />
        } />
        <Route path="success" element={<SuccessfulPurchase />} />
        <Route path="login" element={<Login />} />
        <Route path="admin/products/create" element={<ProductPage title="Cadastrar Produto" />} />
        <Route path="admin/products/:id/edit" element={<ProductPage title="Editar Produto" />} />
        <Route path="admin/brands/create" element={<Brand title="Cadastrar Marca" />} />
        <Route path="admin/brands/:id/edit" element={<Brand title="Editar Marca" />} />
        <Route path="admin" element={<Admin />} />

        <Route path="*" element={<Error />} />
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ToastContainer />
    </CartContext.Provider>
  );
}

export default App;