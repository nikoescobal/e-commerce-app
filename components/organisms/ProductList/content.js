// content/content.js
const content = {
  navItems: [
    { label: 'Home', path: '/' },
    { label: 'Headphones', path: '/headphones' },
    { label: 'Speakers', path: '/speakers' },
    { label: 'Earphones', path: '/earphones' },
  ],
  products: {
    headphones: [
      {
        name: 'XX99 Mark II Headphones',
        description:
          'The new XX99 Mark II headphones is the pinnacle of pristine audio...',
        path: '/product/xx99-mark-two-headphones',
        imageUrl: '/assets/images/product-xx99-mark-two-headphones.jpg',
        price: '$2999',
        // Add other product properties as needed
      },
      {
        name: 'XX99 Mark I Headphones',
        description:
          'As the gold standard for headphones, the classic XX99 Mark I offers detailed...',
        path: '/product/xx99-mark-one-headphones',
        imageUrl: '/assets/images/product-xx99-mark-one-headphones.jpg',
        price: '$1999',
        // Add other product properties as needed
      },
      {
        name: 'XX59 Headphones',
        description:
          'Enjoy your audio almost anywhere with the XX59 headphones...',
        path: '/product/xx59-headphones',
        imageUrl: '/assets/images/product-xx59-headphones.jpg',
        price: '$899',
      },
      // ...other headphones
    ],
    // Add similar structures for speakers and earphones
  },
  aboutUs: {
    description: 'Bringing you the best audio gear...',
    address: 'Located at the heart of New York City...',
    // Additional about us information
  },
  footerContent: {
    copyrightText: 'Copyright 2021. All Rights Reserved',
    links: [
      { label: 'Home', path: '/' },
      { label: 'Headphones', path: '/headphones' },
      { label: 'Speakers', path: '/speakers' },
      { label: 'Earphones', path: '/earphones' },
    ],
    // Other footer contents as needed
  },
  // Other sections like testimonials, etc.
};

export default content;
