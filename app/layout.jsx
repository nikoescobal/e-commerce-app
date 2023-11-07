import './globals.css';

export const metadata = {
  title: 'Audiophile',
  description: 'Audio focused E-commerce',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
