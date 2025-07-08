import { useState } from 'react'
import './App.css'
import Navbar from "./componentes/Navbar"
import ItemListContainer from './componentes/ItemListContainer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar></Navbar>
    <ItemListContainer bienvenida="¡Bienvenidos a Clickpass!"></ItemListContainer>
    </>
  )
}

export default App
