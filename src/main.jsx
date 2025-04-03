import React from 'react';
import { createRoot } from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';

import App from './App.jsx'
import { MyCollections } from './pages/MyCollection';
import { Favourites } from './pages/Favourites';
import { Details } from './pages/Details';
import { Dashboard } from './pages/Dashboard';
import {CreateBook} from './pages/CreateBook'
import Login from './pages/Login/Login.jsx';
import Signup from './pages/Signup/Signup.jsx';
import { store } from './redux/store.js';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element={<App />}>
      <Route path='details' element={<Details />} />
      <Route path='' element={<Dashboard />} />
      <Route path='myCollections' element={<MyCollections />} />
      <Route path='favourites' element={<Favourites />} />
    </Route>
    <Route path='/createBook' element={<CreateBook/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    </>
  )
)
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
)
