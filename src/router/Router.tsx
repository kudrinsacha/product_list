import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { useAuth } from '@/hooks';

const Auth = lazy(() => import('@/pages/Auth/Auth'));
const AllProductList = lazy(() => import('@/pages/AllProductsList/AllProductsList'));
const UserProductList = lazy(() => import('@/pages/UserProductList/UserProductList'));
const Login = lazy(() => import('@/pages/Login/Login'));
const Register = lazy(() => import('@/pages/Register/Register'));
const NotFound = lazy(() => import('@/pages/NotFound/NotFound'));

const Router = () => {
  const user = useAuth();

  return (
    <Routes>
      <Route path="/" element={<Auth auth={!!user} />}>
        <Route index element={<AllProductList />} />
        {user ? (
          <Route path="/my-products" element={<UserProductList />} />
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </>
        )}
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
