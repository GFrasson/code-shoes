import React, { createContext, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

// Pages
import { Home } from './pages/Home';
import { Product, Products } from './pages/Products';
import { NewProduct } from './pages/NewProduct';
import { NewBrand } from './pages/NewBrand';
import { Login } from './pages/Login';
import { Admin } from './pages/Admin';
import { Error } from './pages/Error';
import { Cart } from './pages/Cart';
import { SuccessfulPurchase } from './pages/SuccessfulPurchase';

// Components

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
        <Route path="admin/products/create" element={<NewProduct />} />
        <Route path="admin/products/:id/edit" element={<NewProduct />} />
        <Route path="admin/brands/create" element={<NewBrand />} />
        <Route path="admin/brands/:id/edit" element={<NewBrand />} />
        <Route path="admin" element={<Admin />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </CartContext.Provider>
  );
}

export default App;