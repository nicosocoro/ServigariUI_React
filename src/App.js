import React from 'react';
import './App.css';
import GetAllClients from './components/Clients'
import ClientDetail from './views/Clients/ClientDetail'

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './redux/reducer';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

export const store = createStoreWithMiddleware(reducer);

function App() {

  // GetAllClients();

  return (   
    <Provider store={store}>
        <ClientDetail />
      {/* <Routes /> */}
    </Provider>
  );
}

export default App;
