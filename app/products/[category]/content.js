// // content/content.js
// const content = {
//   categories: [
//     {
//       title: 'Headphones',
//       imageUrl: '/assets/shared/mobile/headphones.svg',
//       slug: '/headphones',
//       items: [
//         {
//           newProduct: true,
//           imageUrl: '/assets/shared/mobile/image-xx99-mark-two-headphones.png',
//           title: '  XX99 Mark II Headphones',
//           description: `The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium
//             headphone experience by reproducing the balanced depth and precision of studio-quality sound.`,
//           buttonText: 'See Product',
//         },
//         {
//           newProduct: false,
//           imageUrl: '/assets/shared/mobile/image-xx99-mark-one-headphones.png',
//           title: '  XX99 Mark I Headphones   ',
//           description: `  As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio
//             reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.
//           `,
//           buttonText: 'See Product',
//         },
//         {
//           newProduct: false,
//           imageUrl: '/assets/shared/mobile/image-xx59-headphones.png',
//           title: '   XX59 Headphones',
//           description: `  Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones.
//             The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.
//                    `,
//           buttonText: 'See Product',
//         },
//       ],
//     },
//     {
//       title: 'Speakers',
//       imageUrl: '/assets/shared/mobile/speakers.svg',
//       slug: '/speakers',
//       items: [
//         {
//           newProduct: true,
//           imageUrl: '/assets/shared/mobile/image-zx9-speaker.png',
//           title: 'ZX9 speaker',
//           description: `Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker
//           system that offers truly wireless connectivity -- creating new possibilities for more
//           pleasing and practical audio setups.`,
//           buttonText: 'See Product',
//         },
//         {
//           newProduct: false,
//           imageUrl: '/assets/shared/mobile/image-zx7-speaker.png',
//           title: 'ZX7 speaker',
//           description: `Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses
//           high-end audiophile components that represents the top of the line powered speakers for home or studio use.`,
//           buttonText: 'See Product',
//         },
//       ],
//     },
//     {
//       title: 'Earphones',
//       imageUrl: '/assets/shared/mobile/earphones.svg',
//       slug: '/earphones',
//       items: [
//         {
//           newProduct: true,
//           imageUrl: '/assets/shared/mobile/earphones.png',
//           title: 'YX1 wireless earphones',
//           description: `Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones.
//           Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.`,
//           buttonText: 'See Product',
//         },
//       ],
//     },
//   ],
// };

// export default content;

// content/content.js
const content = {
  categories: [
    {
      title: 'Headphones',
      imageUrl: '/assets/shared/mobile/headphones.svg',
      slug: '/headphones',
      items: [
        {
          newProduct: true,
          imageUrl: {
            mobile: '/assets/shared/mobile/image-xx99-mark-two-headphones.png',
            tablet: '/assets/shared/tablet/image-xx99-mark-two-headphones.png',
            desktop:
              '/assets/shared/desktop/image-xx99-mark-two-headphones.png',
          },
          title: '  XX99 Mark II Headphones',
          description: `The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium
            headphone experience by reproducing the balanced depth and precision of studio-quality sound.`,
          buttonText: 'See Product',
        },
        {
          newProduct: false,
          imageUrl: {
            mobile: '/assets/shared/mobile/image-xx99-mark-one-headphones.png',
            tablet: '/assets/shared/tablet/image-xx99-mark-one-headphones.png',
            desktop:
              '/assets/shared/desktop/image-xx99-mark-one-headphones.png',
          },
          title: '  XX99 Mark I Headphones   ',
          description: `  As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio
            reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.
          `,
          buttonText: 'See Product',
        },
        {
          newProduct: false,
          imageUrl: {
            mobile: '/assets/shared/mobile/image-xx59-headphones.png',
            tablet: '/assets/shared/tablet/image-xx59-headphones.png',
            desktop: '/assets/shared/desktop/image-xx59-headphones.png',
          },
          title: '   XX59 Headphones',
          description: `  Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones.
            The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.
                   `,
          buttonText: 'See Product',
        },
      ],
    },
    {
      title: 'Speakers',
      imageUrl: '/assets/shared/mobile/speakers.svg',
      slug: '/speakers',
      items: [
        {
          newProduct: true,
          imageUrl: {
            mobile: '/assets/shared/mobile/image-zx9-speaker.png',
            tablet: '/assets/shared/tablet/image-zx9-speaker.png',
            desktop: '/assets/shared/desktop/image-zx9-speaker.png',
          },
          title: 'ZX9 speaker',
          description: `Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker
          system that offers truly wireless connectivity -- creating new possibilities for more
          pleasing and practical audio setups.`,
          buttonText: 'See Product',
        },
        {
          newProduct: false,
          imageUrl: {
            mobile: '/assets/shared/mobile/image-zx7-speaker.png',
            tablet: '/assets/shared/tablet/image-zx7-speaker.png',
            desktop: '/assets/shared/desktop/image-zx7-speaker.png',
          },
          title: 'ZX7 speaker',
          description: `Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses
          high-end audiophile components that represents the top of the line powered speakers for home or studio use.`,
          buttonText: 'See Product',
        },
      ],
    },
    {
      title: 'Earphones',
      imageUrl: '/assets/shared/mobile/earphones.svg',
      slug: '/earphones',
      items: [
        {
          newProduct: true,
          imageUrl: {
            mobile: '/assets/shared/mobile/earphones.png',
            tablet: '/assets/shared/tablet/earphones.png',
            desktop: '/assets/shared/desktop/earphones.png',
          },
          title: 'YX1 wireless earphones',
          description: `Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones.
          Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.`,
          buttonText: 'See Product',
        },
      ],
    },
  ],
};

export default content;
