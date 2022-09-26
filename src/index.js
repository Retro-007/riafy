import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};
root.render(
  <Root>
    <BrowserRouter>
      <Route component={ScrollToTop} />
      <Switch>
        <Route exact path="/" component={withRouter(Home)} />
      </Switch>
    </BrowserRouter>
  </Root>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
