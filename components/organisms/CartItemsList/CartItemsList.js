'use client';

// // import React, { useEffect, useState } from 'react';
// // import styles from './Products.module.scss';

// // const Products = () => {
// //   const [products, setProducts] = useState([]);

// //   async function getProducts() {
// //     const response = await fetch('http://localhost:8000/products');
// //     const data = await response.json();
// //     setProducts(data);
// //   }

// //   useEffect(() => {
// //     getProducts();
// //   }, []);

// //   return (
// //     <div className={styles.wrapper}>
// //       <div className={styles.grid}>
// //         {products.map((product) => (
// //           <div key={product.id} className={styles.productCard}>
// //             <img
// //               src={product.image.mobile}
// //               alt={product.name}
// //               className={styles.productImage}
// //             />
// //             <div className={styles.productInfo}>
// //               <div className={styles.productTitle}>{product.name}</div>
// //               <div className={styles.productPrice}>${product.price}</div>
// //             </div>
// //             <div className={styles.productActions}>
// //               <div className={styles.counter}>
// //                 <button className={styles.decrement}>-</button>
// //                 <div className={styles.quantity}>1</div>
// //                 <button className={styles.increment}>+</button>
// //               </div>
// //               <button className={styles.addToCartButton}>Checkout</button>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Products;

// import React, { useContext, useEffect, useState } from 'react';
// import { CartContext } from '../../cartContext';
// import styles from './Products.module.scss';

// const Products = () => {
//   const [products, setProducts] = useState([]);
//   const { addToCart } = useContext(CartContext);

//   useEffect(() => {
//     // Load the products from the local json file, this path might need to be adjusted
//     // according to where you place your json file in the public directory.
//     fetch('/data.json')
//       .then((response) => response.json())
//       .then((data) => {
//         const productsWithIds = data.products.map((product) => ({
//           ...product,
//           id: product.id || uuidv4(),
//         }));
//         setProducts(productsWithIds);
//       });
//   }, []);

//   const handleAddToCart = (product) => {
//     addToCart(product, 1);
//   };

//   return (
//     <div className={styles.productsList}>
//       {products.map((product) => (
//         <div key={product.id} className={styles.productItem}>
//           <img
//             src={product.image.mobile}
//             alt={product.name}
//             className={styles.productImage}
//           />
//           <h2>{product.name}</h2>
//           <p>{product.description}</p>
//           <button onClick={() => handleAddToCart(product)}>Add to cart</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Products;

// Products.js
// import React, { useContext, useEffect, useState } from 'react';
// import Button from '../../atoms/Button/Button';
// import { CartContext } from '../../cartContext';
// import styles from './CartItemsList.module.scss';

// const CartItemsList = ({cartItems, removeFromCart}) => {
//   const [products, setProducts] = useState([]);
//   const { addToCart } = useContext(CartContext);

//   useEffect(() => {
//     // Load the products from the local json file, this path might need to be adjusted
//     // according to where you place your json file in the public directory.
//     fetch('/data.json')
//       .then((response) => response.json())
//       .then((data) => {
//         console.log('🚀 ~ file: Products.js:111 ~ .then ~ data:', data);
//         const productsWithIds = data.products.map((product) => ({
//           ...product,
//           id: product.id || uuidv4(),
//         }));
//         setProducts(productsWithIds);
//       });
//   }, []);

//   const handleAddToCart = (product) => {
//     addToCart(product, 1);
//   };

//   return (
//     <div className={styles.productsList}>
//       {products.map((product) => (
//         <div key={product.id} className={styles.productItem}>
//           <img
//             src={product.image.mobile}
//             alt={product.name}
//             className={styles.productImage}
//           />
//           <h2>{product.name}</h2>
//           <p>{product.description}</p>
//           <Button onClick={() => handleAddToCart(product)}>Add to cart</Button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CartItemsList;
// CartItemsList.js

'use client';

import React from 'react';
import Button from '../../atoms/Button/Button';
import styles from './CartItemsList.module.scss';
import placeholderImage from '../../../public/assets/images/cart/image-xx59-headphones.jpg'; // Ensure you have a placeholder image in your assets
import Counter from '../../molecules/Counter/Counter';

// This component now expects cartItems and removeFromCart passed as props
const CartItemsList = ({ cartItems, removeFromCart, clearCart }) => {
  return (
    <div className={styles.cartModal}>
      <div className={styles.cartHeader}>
        <h2>Cart ({cartItems.length})</h2>
        <Button className={styles.button} onClick={clearCart}>
          Remove all
        </Button>
      </div>
      {cartItems.map((item) => (
        <div key={item.id} className={styles.cartItem}>
          <img
            src={item.image?.mobile || placeholderImage}
            alt={item.name}
            className={styles.productImage}
          />
          <div className={styles.itemDetails}>
            <h3 className={styles.itemTitle}>{item.name}</h3>
            <div className={styles.itemPrice}>${item.price}</div>
            <Counter
              quantity={item.quantity}
              increment={() => updateQuantity(item.id, item.quantity + 1)}
              decrement={() => updateQuantity(item.id, item.quantity - 1)}
            />
          </div>
          <Button
            onClick={() => removeFromCart(item.id)}
            className={styles.removeItemButton}
          >
            Remove
          </Button>
        </div>
      ))}
      <div className={styles.cartFooter}>
        <Button className={styles.checkoutButton}>Checkout</Button>
      </div>
    </div>
  );
};

export default CartItemsList;
