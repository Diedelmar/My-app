import 'bootstrap/dist/css/bootstrap.css';


import React from 'react';
import Header from './Header'
import ItemListConteiner from './ItemListConteiner';
function App() {
  return ( 
    <div>
    <Header/>
    <ItemListConteiner/>
     </div>
   
  );
}
function ParentComponent() {
  const greeting = "¡Hola! Bienvenido a mi aplicación.";

  return (
    <div>
      <ItemListConteiner greeting={greeting} />
    </div>
  );
}
export default App;
