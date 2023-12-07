"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useReducer, useEffect } from "react";
import { CgMathMinus, CgMathPlus } from "react-icons/cg";
import { MdAddShoppingCart } from "react-icons/md";
import { useGlobalState } from "@/app/page";
import { Toast } from "bootstrap";

export default function Products({ params }) {
  const [count, setCount] = useState(1);
  const [detailProduct, setDetailProduct] = useGlobalState("product");
  const [cart, setCart] = useGlobalState("cart");
  const [quantity, setQuantity] = useGlobalState("quantity");
  const [total, setTotal] = useGlobalState("total");
  const [amount, setAmount] = useGlobalState("amount");
  const [value, dispatch] = useReducer(reducer, {
    cart: cart,
    quantity: quantity,
  });
  function reducer(state, action) {
    detailProduct.quantity = count;
    if (action.type === "add" && !cart.includes(detailProduct)) {
      return {
        cart: cart.push(detailProduct),
        quantity: quantity.push(detailProduct.quantity),
      };
    }
  }

  return (
    <section className="pt-28 xl:px-60 ">
      <section className="grid xl:grid-flow-col place-content-center gap-5 py-10 px-7">
        <Image
          src={detailProduct.image}
          width={500}
          height={500}
          quality={100}
          sizes={{ width: "100%" }}
          alt="product"
          className={detailProduct.image ? "laptop:p-7" : "hidden"}
        />
        <div className=" px-2 py-5 space-y-7 text-neutral-800 my-auto">
          <h3 className="text-xl">{detailProduct.name}</h3>
          <p className="font-medium mt-auto">
            {Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
            }).format(parseInt(detailProduct.price))}
          </p>
          <div className="flex space-x-14">
            <h3 className="text-neutral-600">Kategori</h3>
            <p className="font-medium uppercase text-sm my-auto">
              {detailProduct.category}
            </p>
          </div>
          <div className="flex space-x-14">
            <h3 className="text-neutral-600">Kuantitas</h3>
            <ul className="flex gap-7 border p-1 px-3">
              <li
                className="my-auto cursor-pointer"
                onClick={() => {
                  setCount(count - 1);
                  if (count === 1) {
                    setCount(1);
                  }
                }}
              >
                <CgMathMinus />
              </li>
              <li>{count}</li>
              <li
                className="my-auto cursor-pointer"
                onClick={() => {
                  setCount(count + 1);
                }}
              >
                <CgMathPlus />
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex gap-3 text-sm">
              <li
                className="flex py-3 px-5 gap-1 border rounded-sm cursor-pointer border-neutral-800 bg-neutral-200 text-neutral-800 hover:bg-neutral-100"
                onClick={() => {
                  dispatch({ type: "add" });
                  setTotal(cart.length);
                }}
              >
                <MdAddShoppingCart className="text-xl my-auto" />
                <p>Masukkan Keranjang</p>
              </li>
              <Link
                href="/auth/login"
                className="py-3 px-5 border rounded-sm bg-neutral-800 text-white cursor-pointer hover:bg-neutral-700"
              >
                Beli Sekarang
              </Link>
            </ul>
          </div>
        </div>
      </section>
    </section>
  );
}
