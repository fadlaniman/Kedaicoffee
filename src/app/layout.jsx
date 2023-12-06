import "./globals.css";
import { Suspense } from "react";
import Loading from "./loading";

export const metadata = {
  title: "kedaicoffee.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" />
      </head>
      <Suspense fallback={<Loading />}>
        <body className="font-poppins">{children}</body>
      </Suspense>
    </html>
  );
}
