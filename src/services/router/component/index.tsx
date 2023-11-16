import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PATH } from '../constants/paths.ts';
import { Page } from '../types';
import { ProtectedRoute } from '../hoc/ProtectedRoute';
import { HomePage } from '../../../pages/HomePage';
import { LoginPage } from '../../../pages/LoginPage';
import { NotFoundPage } from '../../../pages/NotFoundPage';
import { Layout } from '../hoc/Layout';

export const Router: FC = () => {
  return (
    <Routes>
      <Route path={PATH[Page.Home]} element={<Layout />}>
        <Route
          index
          element={
            <ProtectedRoute redirectLink={PATH[Page.Login]}>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route path={PATH[Page.Login]} element={<LoginPage />} />
        <Route path={PATH[Page.NotFound]} element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
