export default function RootLayout({ children, slot }) {
  return (
    <html>
      <head />
      <body>{slot}{children}</body>
    </html>
  );
}
