// 'use client';

// import React, { useState } from 'react';
// import InputField from '../../atoms/InputField/InputField';
// import Button from '../Button/Button'; // Adjust the import path as necessary
// import styles from './NewsletterSignup.module.scss';

// const NewsletterSignup = () => {
//   const [email, setEmail] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Logic to handle submission goes here...
//     console.log(email);
//   };

//   return (
//     <form className={styles.newsletterSignup} onSubmit={handleSubmit}>
//       <InputField
//         type="email"
//         name="email"
//         placeholder="Enter your email address"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         required
//       />
//       <Button type="submit">Subscribe</Button>
//     </form>
//   );
// };

// export default NewsletterSignup;
