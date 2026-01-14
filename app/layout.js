import "./globals.css";

export const metadata = {
  title: "Organic Mushroom Farm",
  description: "From growing to market – fresh organic mushrooms",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800">{children}</body>
    </html>
  );
}
