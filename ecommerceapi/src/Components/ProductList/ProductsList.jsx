import api from "../../api";
import { useState, useEffect } from "react";
import styles from "./Product.module.css"; 
function ProductsList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("products/")
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className={styles.container}>
      {products.map(p => (
        <div className={styles.card} key={p.id}>
          <img
            src={p.image1}
            alt={p.name}
            className={styles.image}
          />

          <div className={styles.body}>
            <h3 className={styles.title}>{p.name}</h3>
            <p className={styles.description}>{p.description}</p>
            <p className={styles.price}>₹ {p.price}</p>

            <button className={styles.button}>
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductsList;
