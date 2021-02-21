import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Checkout from './Views/Checkout';
import Header from './Components/Header';
import ItemDetails from './Components/ItemDetails';
import reportWebVitals from './reportWebVitals';
import { Switch, Route, BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Header />
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/details/:id" component={ItemDetails} />
        <Route path="/checkout" component={Checkout} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
