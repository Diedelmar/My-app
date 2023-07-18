import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, {useRef} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './componentes/Header';
import ItemListContainer from './componentes/ItemListConteiner';
import ItemCount from "./componentes/ItemCount";

function App() {
  const greeting = "¡Hola! Bienvenido a mi aplicación.";
  const inputRef = useRef(null);
  
  return ( 
    <div className='App'>
      <BrowserRouter>
        <div>
          <Header />
          <Routes>
            <Route path='/' element={<ParentComponent greeting={greeting} />} />
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/' element={<ItemCount />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

function ParentComponent({ greeting }) {
  return (
    <div>
      <p>{greeting}</p> 
    </div>
  );
}

export default App;
