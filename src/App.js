import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { positions, Provider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import logo from './logo.svg';
// import CategoryPage from './pages/CategoryPage';

import PageNotFound from './pages/404';



const options = {
  timeout: 5000,
  position: positions.BOTTOM_LEFT,
};

const router = createBrowserRouter([
  {
    path: '/',
    element: (
        <HomePage></HomePage>
    ),
  },
  {
    path: '/search',
    element: (
        <SearchPage></SearchPage>
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
    <div className=''>
      {/* <Provider template={AlertTemplate} {...options}> */}
          <RouterProvider router={router} />
      {/* </Provider> */}
    </div>
    </>
  );
}

export default App;