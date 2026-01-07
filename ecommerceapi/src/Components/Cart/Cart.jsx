import React, { useEffect, useState } from "react";
import api from "../../api";

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    api.get("cart/")
      .then((res) => setCart(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.map((item) => (
        <div key={item.id}>
          <h4>{item.product.name}</h4>
          <p>Quantity: {item.quantity}</p>
          <p>Price: ₹{item.price}</p>
        </div>
      ))}
    </div>
  );
}
