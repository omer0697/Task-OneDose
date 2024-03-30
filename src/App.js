// src/components/App.js

import React, { useEffect,useLayoutEffect,useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {store} from "./app/store";
import ProtectedRoute from './routes/ProtectedRoute';
import SignIn from './components/pages/Signin';
import Register from './components/pages/Register';
import HomePage from './components/pages/HomePage';
import { useDispatch } from 'react-redux';
import { checkAuthentication } from './features/auth/authSlice';
import AuthLayout from './layouts/AuthLayout';
import CharacterDetail from './components/pages/CharacterDetail';
import Favorites from './components/pages/Favorites';


const App = () => {
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(checkAuthentication());
  }
  , [dispatch]);

  return (
    <Provider store={store}>
        <Router>
            <Routes>
              <Route path="/login" element={<AuthLayout><SignIn /></AuthLayout>} />
              <Route path="/register" element={<AuthLayout><Register /></AuthLayout>} />
              <Route path="/" element={<ProtectedRoute component={HomePage} />} />
              <Route path="/character/:id" element={<ProtectedRoute component={CharacterDetail} />} />
              <Route path="*" element={<h1>Not Found</h1>} />
              <Route path="favorites" element={<ProtectedRoute component={Favorites} />} />
            </Routes>
        </Router>
      </Provider>
  );
}

export default App;
