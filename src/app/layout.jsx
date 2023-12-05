import "./globals.css";

export const metadata = {
  title: "kedaicoffee.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon"  />
      </head>
      <body className="font-poppins">{children} </body>
    </html>
  );
}
