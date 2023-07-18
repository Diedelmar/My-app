import React from "react";

const productos = [
  { id: 1, name: 'Cama King Size', precio: 250000, cantidad: 50, description: 'Cama matrimonial de gran tamaño' },
  { id: 2, name: 'Cama 2 plazas', precio: 250000, cantidad: 35, description: 'Cama doble de tamaño standard' },
  { id: 3, name: 'Cama 1 plaza', precio: 200000, cantidad: 48, description: 'Cama individual con colchón incluido' },
  { id: 4, name: 'Escritorio', precio: 80000, cantidad: 40, description: 'Rustico Madera' },
  { id: 5, name: 'Sillon 2 cuerpos', precio: 250000, cantidad: 30, description: 'Tapizado Eco cuero' },
  { id: 6, name: 'Sillon vintage', precio: 400000, cantidad: 15, description: 'Diseño exclusivo' }
];

function ItemListContainer({ greeting }) {
  return (
    <div>
      <h3>Lista de elementos</h3>
      <p>{greeting}</p>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px',
        }}
      >
        {productos.map((product) => (
          <div
            key={product.id}
            style={{
              border: '1px solid #ccc',
              padding: '10px',
              borderRadius: '5px',
            }}
          >
            <h4 style={{ margin: '0' }}>{product.name}</h4>
            <p style={{ margin: '0' }}>Precio: {product.precio}</p>
            <p style={{ margin: '0' }}>Cantidad: {product.cantidad}</p>
            <p style={{ margin: '0' }}>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemListContainer;

