import Navbar from "@/app/assets/navbar";
import Footer from "@/app/assets/footer";

export default function Layout({ children }) {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
