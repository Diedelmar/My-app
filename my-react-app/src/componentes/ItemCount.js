import React from 'react';

function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = React.useState(initial);

  const handleIncrease = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    if (count > 0) {
      onAdd(count);
    }
  };

  return (
    <div>
      <button onClick={handleDecrease}>-</button>
      <span>{count}</span>
      <button onClick={handleIncrease}>+</button>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default ItemCount;
