import React from 'react';
import { createRoot } from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App.jsx'
import { MyCollections } from './pages/MyCollection';
import { Favourites } from './pages/Favourites';
import { Details } from './pages/Details';
import { Dashboard } from './pages/Dashboard';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='details' element={<Details />} />
      <Route path='' element={<Dashboard />} />
      <Route path='myCollections' element={<MyCollections />} />
      <Route path='favourites' element={<Favourites />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
