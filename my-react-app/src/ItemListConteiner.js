import React from 'react';

function ItemListConteiner({ greeting }) {
  return (
    <div>
      <h2>Lista de elementos</h2>
      <p>{greeting}</p>
      <ul>
        <li>Elemento 1</li>
        <li>Elemento 2</li>
        <li>Elemento 3</li>
        <li>Elemento 4</li>
      </ul>
    </div>
  );
}

export default ItemListConteiner;
