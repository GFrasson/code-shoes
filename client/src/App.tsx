import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Pages
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { NewProduct } from './pages/NewProduct';
import { NewBrand } from './pages/NewBrand';
import { Admin } from './pages/Admin';
import { Error } from './pages/Error';
import { Cart } from './pages/Cart';
import { SuccessfulPurchase } from './pages/SuccessfulPurchase';

// Components


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="cart" element={<Cart />} />
        <Route path="success" element={<SuccessfulPurchase />} />
        <Route path="admin/products/create" element={<NewProduct />} />
        <Route path="admin/products/:id/edit" element={<NewProduct />} />
        <Route path="admin/brands/create" element={<NewBrand />} />
        <Route path="admin/brands/:id/edit" element={<NewBrand />} />
        <Route path="admin" element={<Admin />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;