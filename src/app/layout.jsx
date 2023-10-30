import "./globals.css";
import Logo from "../../public/images/logo.png";

export const metadata = {
  title: "MieBaso",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="../../public/images/logo.png" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-ECKZVLJYT9"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-ECKZVLJYT9');`,
          }}
        ></script>
      </head>
      <body>{children} </body>
    </html>
  );
}
