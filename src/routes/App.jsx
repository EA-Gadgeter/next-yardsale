import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AppContext from '../context/AppContext';

import useInitialState from '../hooks/useInitialState';

import Layout from '../containers/Layout';

import Login from '../pages/Login';
import SendEmail from '../pages/SendEmail';
import MyAccount from '../pages/MyAccount';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import NewPassword from '../pages/NewPassword';
import Checkout from '../pages/Checkout';
import Orders from '../pages/Orders';
import PasswordRecovery from '../pages/PasswordRecovery';

import '../styles/global.css';
import CreateAccount from '../pages/CreateAccount';

const App = () => {
  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/send-email" element={<SendEmail />} />
            <Route path="/my-account" element={<MyAccount />} />
            <Route path="/new-password" element={<NewPassword />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/password-recovery" element={<PasswordRecovery />} />
            <Route path="/create-account" element={<CreateAccount />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
