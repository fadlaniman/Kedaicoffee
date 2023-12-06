import Link from "next/link";
import { BsInstagram, BsTwitter, BsTiktok } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="footer font-Poppins-text ">
      <section className="text-gray-200 space-y-5">
        <h3 className="text-2xl font-glass-antiaqua">Kedaicoffee.</h3>
        <p className="font-medium text-sm xl:w-1/4">
          The warmth of coffee provides a temporary pleasure to forget the the
          troubles of each sip
        </p>
      </section>
      <section className="text-gray-200 space-y-3">
        <h3 className="text-xl">Customer Service</h3>
        <div className="grid text-sm gap-1">
          <Link href="">+62 852-7777-1234</Link>
          <Link href="">kedaicoffee@email.com</Link>
        </div>
      </section>
      <section className="text-gray-200 space-y-3">
        <h3 className="text-xl">Social Media</h3>
        <div className="flex gap-7">
          <Link href="">
            <BsInstagram />
          </Link>
          <Link href="">
            <BsTiktok />
          </Link>
          <Link href="">
            <BsTwitter />
          </Link>
        </div>
      </section>
      <section>
        <h3 className="text-center text-gray-400 font-light text-sm">
          KedaiCoffee. ALL RIGHT RESERVED 2023
        </h3>
      </section>
    </footer>
  );
}
