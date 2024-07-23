import React, { useEffect, useState } from 'react';
import axios from 'axios';

const InventoryList = () => {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/inventory')
      .then(response => setInventory(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h2>Inventory</h2>
      <ul>
        {inventory.map(item => (
          <li key={item._id}>{item.productName} - {item.quantity}</li>
        ))}
      </ul>
    </div>
  );
};

export default InventoryList;
