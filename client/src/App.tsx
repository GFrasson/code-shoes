import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Pages
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { NewProduct } from './pages/NewProduct';
import { NewBrand } from './pages/NewBrand';
import { Admin } from './pages/Admin';
import { Error } from './pages/Error';

// Components
import { Cart } from './pages/Cart';


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="cart" element={<Cart />} />
        <Route path="new-product" element={<NewProduct />} />
        <Route path="new-brand" element={<NewBrand />} />
        <Route path="admin" element={<Admin />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;