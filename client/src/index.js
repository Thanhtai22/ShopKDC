import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
// import HomePage from './pages/user/homePage';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
// import store from "./redux/store"
import RouterCustom from './router';
import './style/style.scss';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <BrowserRouter>

            <RouterCustom />
      </BrowserRouter>


);




