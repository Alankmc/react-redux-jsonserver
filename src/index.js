import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/store-config';
import App from './components/app';
const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render(
  <Provider store={configureStore()}>
    <div>
      <App />
    </div>
  </Provider>,
  document.getElementById('app')
);

module.hot.accept();
