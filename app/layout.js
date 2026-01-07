import "./styles/globals.css";

export const metadata = {
  title: "The Mall",
  description: "A Y2K glitter virtual shopping mall"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
