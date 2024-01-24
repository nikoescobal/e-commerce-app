// components/atoms/Counter/Counter.js

import React from 'react';
import styles from './Counter.module.scss';

const Counter = ({ quantity, increment, decrement }) => {
  return (
    <div className={styles.counter}>
      <button onClick={decrement} className={styles.decrement}>
        -
      </button>
      <div className={styles.quantity}>{quantity}</div>
      <button onClick={increment} className={styles.increment}>
        +
      </button>
    </div>
  );
};

export default Counter;
