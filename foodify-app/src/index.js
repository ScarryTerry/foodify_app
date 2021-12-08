import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import DishStore from './dishStore/DishStore';

export const Context = createContext(null);

ReactDOM.render(
  <Context.Provider value={{
    dish: new DishStore()
  }}>
    <App />
  </Context.Provider>,

  document.getElementById('root')
);
