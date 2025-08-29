import './App.css'
import Navbar from "./componentes/Navbar"
import ItemListContainer from './componentes/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer'
import ItemDetail from './componentes/ItemDetail'
import Item from './componentes/Item'
import NotFound from './componentes/NotFound'
import Cart from './componentes/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoaderProvider } from "./context/LoaderContext";
import { CartProvider } from "./context/CartContext";
import Checkout from './componentes/Checkout'



function App() {

  return (

    <BrowserRouter>
    <CartProvider>
    <LoaderProvider>
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-black text-white">
    <Navbar/>
    <Routes>
    <Route path='/'element={<ItemListContainer bienvenida="¡Bienvenidos a Clixpass!"/>} /> 
    <Route path='/categories/:category'element={<ItemListContainer/>}/>
    <Route path='/item/:id'element={<ItemDetailContainer/>}/>
    <Route path='/cart' element={<Cart/>}/>
     <Route path='/checkout' element={<Checkout/>}/>
    <Route path='*' element={<NotFound/>}/>
    </Routes>
    </div>
    </LoaderProvider>
    </CartProvider>
    </BrowserRouter>
  )
}

export default App
