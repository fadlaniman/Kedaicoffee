import Navbar from "../assets/navbar";
import Footer from "../assets/footer";

export default function menuLayout({ children }) {
  return (
    <main>
      <header>
        <Navbar />
      </header>
      <section>{children}</section>
      <footer>
        <Footer />
      </footer>
    </main>
  );
}
