"use client";
import Image from "next/image";
import product_1 from "../../../public/images/product-1.jpeg";
import product_2 from "../../../public/images/product-2.jpeg";
import product_3 from "../../../public/images/product-3.jpeg";
import product_4 from "../../../public/images/product-4.jpeg";
import product_6 from "../../../public/images/product-6.jpeg";
import product_7 from "../../../public/images/product-7.jpeg";
import product_8 from "../../../public/images/product-8.jpeg";
import product_9 from "../../../public/images/product-9.jpeg";
import product_10 from "../../../public/images/product-10.jpeg";
import product_11 from "../../../public/images/product-11.jpeg";

export const Product = [
  {
    nama: `Mie Baso Cincang`,
    deskripsi: `Baso besar cincang + Baso halus kecil 3 + Mie campur`,
    harga: 20000,
    file: product_1,
  },
  {
    nama: `Mie Baso Cincang + Baso Urat`,
    deskripsi: `Baso besar 2 + Baso kecil 1 + Mie campur`,
    harga: 26000,
    file: product_2,
  },
  {
    nama: `Mie Ayam Baso Cincang`,
    deskripsi: `Mie ayam + Baso besar cincang + Baso kecil`,
    harga: 24000,
    file: product_3,
  },
  {
    nama: `Mie Ayam Baso Urat`,
    deskripsi: `Mie ayam + Baso urat + Baso kecil`,
    harga: 24000,
    file: product_4,
  },

  {
    nama: `Mie Baso Urat`,
    deskripsi: `Baso Besar urat + Baso kecil 3 + Mie campur`,
    harga: 20000,
    file: product_6,
  },
  {
    nama: `Mie Baso Telur`,
    deskripsi: `Baso besar telur + Baso kecil 3 + Mie campur`,
    harga: 20000,
    file: product_7,
  },
  {
    nama: `Mie Ayam`,
    deskripsi: `Mie ayam`,
    harga: 14000,
    file: product_8,
  },
  {
    nama: `Mie yamin baso cincang + Urat`,
    deskripsi: `Mie yamin + Baso besar 2 + Baso kecil`,
    harga: 26000,
    file: product_9,
  },
  {
    nama: `Mie Ayam + Baso cincang + Urat`,
    deskripsi: `Mie ayam + Baso besar + Baso kecil`,
    harga: 34000,
    file: product_10,
  },
  {
    nama: `Mie yamin baso cincang`,
    deskripsi: `Mie yamin + Baso besar cincang + Baso kecil 4`,
    harga: 23500,
    file: product_11,
  },
];
export default function shoppingCart() {
  const mes = () => {
    alert("On Progress");
  };

  return (
    <div className="px-5 xl:px-60 xl:py-32 py-28">
      <div className="text-center">
        <h1 className="text-xl font-medium">Menu</h1>
      </div>
      <div className="grid xl:grid-cols-4 xl:justify-center gap-16 xl:gap-9 py-9">
        {Product.map((val, index) => (
          <div className="grid justify-center" key={index}>
            <div>
              <Image
                src={val.file}
                alt={val.file}
                priority
                className="w-1/2 m-auto "
              />
            </div>
            <div className="grid space-y-2 text-sm py-2 px-7">
              <h3 className="font-bold">{val.nama}</h3>
              <p className="font-medium text-stone-700">{val.deskripsi}</p>
            </div>
            <div className="flex justify-between px-7">
              <h3 className="font-bold my-auto">
                {new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                }).format(val.harga)}
              </h3>
              <button
                className="text-sm bg-blue-300 shadow-sm my-auto px-2 py-1 rounded-sm cursor-pointer"
                onClick={mes}
              >
                add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
