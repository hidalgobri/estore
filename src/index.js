import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './store'

console.log('Initial state: ', store.getState())


// Now, dispatch some actions

store.dispatch({ type: 'carrito/anadirItem', payload: '1' })
store.dispatch({ type: 'carrito/anadirItem', payload: '2' })
store.dispatch({ type: 'carrito/eliminarItem', payload: '1' })
store.dispatch({ type: 'carrito/aumentarCantidad', payload: '2' })
store.dispatch({ type: 'carrito/aumentarCantidad', payload: '2' })
store.dispatch({ type: 'carrito/disminuirCantidad', payload: '2' })

// store.dispatch({
  //   type: 'filters/colorFilterChanged',
  //   payload: { color: 'red', changeType: 'added' }
  // })
  
  // // Stop listening to state updates
  
  store.dispatch({ type: 'carrito/anadirItem', payload: '3' })
  store.dispatch({ type: 'carrito/anadirItem', payload: '4' })
  
  const unsubscribe = store.subscribe(() =>
  console.log('State after dispatch: ', store.getState())
  )
  
  store.dispatch({ type: 'favorito/anadirFavorito', payload: '2' })
  store.dispatch({ type: 'favorito/anadirFavorito', payload: '3' })
  store.dispatch({ type: 'favorito/anadirFavorito', payload: '4' })
store.dispatch({ type: 'favorito/eliminarFavorito', payload: '4' })
// // Dispatch one more action to see what happens
unsubscribe()




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

