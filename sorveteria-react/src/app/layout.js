import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body lang="pt-br">
        {children}
      </body>
    </html>
  );
}
