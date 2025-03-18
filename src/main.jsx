import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import MyCollections from './components/MyCollections.jsx';
import Favourites from './components/Favourites.jsx';
import Details from './components/Details.jsx';
import Home from './components/Home.jsx';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='details' element={<Details />} />
      <Route path='' element={<Home />} />
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
