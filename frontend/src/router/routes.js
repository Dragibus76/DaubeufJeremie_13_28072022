import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from '../App';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Login from '../pages/Login/Login';
import Profile from '../pages/Profile/Profile';
import Root from '../pages/Root/Root';
import Authentication from '../components/Authentication/Authentication';

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
      <Route index element={<App />} />
      <Route path="login" element={<Login />} />
      <Route
        path="profile"
        element={(
          <Authentication>
            <Profile />
          </Authentication>
        )}
      />
    </Route>
  </Routes>
);
