import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { store } from './store';

ReactDOM.render(
  <Provider {...{ store }}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
