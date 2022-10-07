import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from './context/CartContext';

import AppRouter from './router/AppRouter';



const App = () => {

  return (

    <CartProvider>
      <AppRouter />
    </CartProvider>

  );
}

export default App;

