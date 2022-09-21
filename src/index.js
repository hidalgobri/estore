import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './store'
import { BrowserRouter } from "react-router-dom";


const unsubscribe = store.subscribe(() =>
  console.log('State after dispatch: ', store.getState())
)

store.dispatch({ type: 'carrito/anadirItem', payload: '1' })
store.dispatch({ type: 'carrito/anadirItem', payload: '2' })
store.dispatch({ type: 'carrito/eliminarItem', payload: '1' })
store.dispatch({ type: 'carrito/aumentarCantidad', payload: '2' })
store.dispatch({ type: 'carrito/aumentarCantidad', payload: '2' })
store.dispatch({ type: 'carrito/disminuirCantidad', payload: '2' })



unsubscribe()


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);