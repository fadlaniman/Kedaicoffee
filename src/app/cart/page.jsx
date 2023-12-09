"use client";

import Image from "next/image";
import Link from "next/link";
import { useGlobalState } from "../page";
import { useEffect, useState, useReducer } from "react";
import { CgMathMinus, CgMathPlus } from "react-icons/cg";

export default function Cart() {
  const [total, setTotal] = useGlobalState("countCart");
  const [data, setData] = useGlobalState("cart");
  const [amount, setAmount] = useGlobalState("amount");
  const [listAmount, setListAmount] = useState([]);
  const [quantity, setQuantity] = useGlobalState("quantity");
  const [count, setCount] = useState(null);
  const [value, dispatch] = useReducer(reducer, {
    total: total,
    data: data,
    count: count,
    amount: amount,
  });

  function reducer(state, action) {
    if (action.type === "remove") {
      return {
        total: total,
        data: data,
        count: count,
        amount: amount,
      };
    }
  }

  useEffect(() => {
    let item = 0;
    let jumlah = 0;
    for (item in data) {
      const res = data[item].price * data[item].quantity;
      listAmount.push(res);
      jumlah += res;
      item++;
    }
    setAmount(jumlah);
    setCount(quantity);
  }, [count, data, listAmount]);

  return (
    <section className="py-28 laptop:px-60 space-y-10 px-5 text-neutral-800">
      <section>
        <h3 className="text-center py-7 text-2xl">Shopping Cart</h3>
        {data.map((val, index) => (
          <section
            className="grid laptop:grid-flow-col gap-5 py-7 laptop:mx-60  border-t-2 border-neutral-800"
            key={val.id}
          >
            <section className="flex justify-around space-x-5">
              <Image
                src={val.image}
                width={500}
                height={500}
                quality={100}
                alt={val.image}
                className="w-44 my-auto"
              />

              <div className="block space-y-2">
                <h3 className="text-lg">{val.name}</h3>
                <p className="my-auto">
                  {Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  }).format(parseInt(val.price))}
                </p>
                <ul className="flex gap-7 border py-2 px-3 text-sm w-max">
                  <li
                    className="my-auto cursor-pointer"
                    onClick={() => {
                      setCount((count[index] -= 1));
                      data[index].quantity = count[index];
                      if (data[index].quantity === 1) {
                        setCount((count[index] += 1));
                        console.log(count[index]);
                      }
                    }}
                  >
                    <CgMathMinus />
                  </li>
                  <li className="my-auto">{val.quantity}</li>
                  <li
                    className="my-auto cursor-pointer"
                    onClick={() => {
                      data[index].quantity = count[index];
                      setCount((count[index] += 1));
                    }}
                  >
                    <CgMathPlus />
                  </li>
                </ul>
                <p
                  className="cursor-pointer text-sm"
                  onClick={() => {
                    dispatch({ type: "remove" });
                    data.splice(index, 1);
                    count.splice(index, 1);
                    setAmount(amount - val.price * val.quantity);
                    setTotal(total - 1);
                  }}
                >
                  Remove
                </p>
              </div>
            </section>
          </section>
        ))}
      </section>
      <section className="space-y-3">
        <div className="flex justify-between tablet:justify-around text-xl font-medium">
          <h3>Total</h3>
          <p>
            {Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
            }).format(parseInt(amount))}
          </p>
        </div>
        <div
          className={
            amount
              ? "grid p-3 bg-neutral-800 text-white rounded-sm tablet:mx-40 laptop:mx-60"
              : "hidden"
          }
        >
          <Link href="/auth/login" className="text-center">
            Pembayaran
          </Link>
        </div>
      </section>
    </section>
  );
}
