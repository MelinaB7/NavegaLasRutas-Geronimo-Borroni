import './App.css'
import Navbar from "./componentes/Navbar"
import ItemListContainer from './componentes/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer'
import ItemDetail from './componentes/ItemDetail'
import Item from './componentes/Item'
import NotFound from './componentes/NotFound'
import { BrowserRouter, Routes, Route } from 'react-router-dom';




function App() {

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/'element={<ItemListContainer bienvenida="¡Bienvenidos a Clixpass!"/>} /> 
    <Route path='/categories/:category'element={<ItemListContainer/>}/>
    <Route path='/item/:id'element={<ItemDetailContainer/>}/>
    <Route path='*' element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
