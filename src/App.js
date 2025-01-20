import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { positions, Provider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import CategoryPage from './pages/CategoryPage';
import CategoryDetailsPage from './pages/CategoryDetailsPage';
import ShopPage from './pages/ShopPage';
import ProductDetailPage from './pages/ProductDetailPage';
import PageNotFound from './pages/404';

import logo from './logo.svg';
import ProductDetail from './features/product/ProductDetail';

const options = {
  timeout: 5000,
  position: positions.BOTTOM_LEFT,
};

const router = createBrowserRouter([
  {
    path: '/',
    element: (
        <CategoryPage></CategoryPage>
    ),
  },
  {
    path: '/category-detail/:id',
    element: (
        <CategoryDetailsPage></CategoryDetailsPage>
    ),
  },
  {
    path: '/shop/:id',
    element: (
        <ShopPage></ShopPage>
    ),
  },
  {
    path: '/product/:id',
    element: (
        <ProductDetailPage></ProductDetailPage>
    ),
  },
  {
    path: '*',
    element: (
        <PageNotFound></PageNotFound>
    ),
  },
]);

function App() {
  return (
    < >
    <div className='bg-[#f7e7ce] w-full h-full'>
      {/* <Provider template={AlertTemplate} {...options}> */}
          <RouterProvider router={router} />
      {/* </Provider> */}
    </div>
    </>
  );
}

export default App;