// import React from 'react';
// import styles from './InputField.module.scss';
// import { RiArrowDropDownLine } from 'react-icons/ri';

// const InputField = ({ type, label, error, ...props }) => {
//   const isSelect = type === 'select';
//   return (
//     <div className={styles.formGroup}>
//       {label && <label className={styles.formLabel}>{label}</label>}

//       {isSelect ? (
//         <div className={styles.selectWrapper}>
//           <select className={styles.inputField} {...props} />
//           <RiArrowDropDownLine className={styles.selectIcon} />
//         </div>
//       ) : (
//         <input type={type} className={styles.inputField} {...props} />
//       )}

//       {error && <div className={styles.errorMessage}>{error}</div>}
//     </div>
//   );
// };

// export default InputField;
