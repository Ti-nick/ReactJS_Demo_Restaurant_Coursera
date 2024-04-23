import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import BookingPage from './BookingPage.js'
import OnlineMenu from './OnlineMenu.js'
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import WrongURL from './WrongURL.js';

const router = createBrowserRouter([{
  path: '/',
  element: <App/>,
  errorElement: <WrongURL/>,
},
{
 path: '/booking',
 element: <BookingPage/>
},
{
  path: '/online-menu',
  element: <OnlineMenu/>,
},
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
