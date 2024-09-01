import React from 'react';
import './App.css';
import './responsive.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import SingleProduct from './screens/SingleProduct';
import Login from './screens/Login';
import Register from './screens/Register';
import CartScreen from './screens/CartScreen';
import ShippingScreen from './screens/ShippingScreen';
import ProfileScreen from './screens/PagesPrivate/ProfileScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import ForgotPassword from './screens/ResetPassword/ForgotPassword'
import ResetPassword from './screens/ResetPassword/ResetPassword'
import NotFound from './screens/NotFound'

import { AuthProvider } from './context/AuthContext'
import { OrderProvider } from './context/OrderContext'

import ProtectedRoute from './ProtectedRoute'
import HomeProducts from './screens/PagesPrivate/HomeProducts'
import Pedidos from './screens/PagesPrivate/Pedidos'
import Cupones from './screens/PagesPrivate/Cupones'

const App = () => {
  return (
    <AuthProvider>
      <OrderProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />} />

          <Route path="/products/:id" element={<SingleProduct />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart/:id?" element={<CartScreen />} />
          <Route path="/shipping" element={<ShippingScreen />} />
          <Route path="/payment" element={<PaymentScreen />} />
          <Route path="/placeorder" element={<PlaceOrderScreen />} />
          <Route path="/ResetPassword" element={<ResetPassword />} />
            
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="*" element={<NotFound />} />


          <Route element={<ProtectedRoute />}>
            <Route path='/homeproducts' element={<HomeProducts />} />
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path='/pedidos' element={<Pedidos />} />
            <Route path='/cupones' element={<Cupones />} />
          </Route>


        </Routes>
      </Router>
        </OrderProvider>
    </AuthProvider>
  );
};

export default App;
