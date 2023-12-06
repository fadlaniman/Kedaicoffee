"use client";

import Image from "next/image";
import { useGlobalState } from "../page";
import { useEffect, useState, useReducer } from "react";
import { CgMathMinus, CgMathPlus } from "react-icons/cg";

export default function Cart() {
  const [total, setTotal] = useGlobalState("total");
  const [data, setData] = useGlobalState("cart");
  const [amount, setAmount] = useGlobalState("amount");
  const [listAmount, setListAmount] = useState([]);
  const [quantity, setQuantity] = useGlobalState("quantity");
  const [count, setCount] = useState(null);
  const [value, dispatch] = useReducer(reducer, {
    total: total,
    data: data,
    count: count,
  });

  function reducer(state, action) {
    if (action.type === "remove") {
      return {
        total: total,
        data: data,
        count: count,
      };
    }
  }

  useEffect(() => {
    let item = 0;
    let total = 0;
    for (item in data) {
      const res = data[item].price * data[item].quantity;
      listAmount.push(res);
      total += res;
      item++;
    }
    setAmount(total);
    setCount(quantity);
  }, []);

  return (
    <section className="py-28 laptop:px-60 space-y-10 px-5 text-neutral-800">
      <section>
        <h3 className="text-center py-7 text-2xl">Shopping Cart</h3>
        {data.map((val, index) => (
          <section
            className="grid laptop:grid-flow-col gap-7 py-7 laptop:mx-60  border-t-2 border-neutral-800"
            key={val.id}
          >
            <section className="grid grid-flow-col space-x-7 tablet:justify-around justify-center">
              <div className="w-48">
                <Image
                  src={val.image}
                  width={500}
                  height={500}
                  quality={100}
                  alt={val.image}
                />
              </div>
              <div className="grid laptop:grid-flow-col laptop:space-x-60 space-y-2">
                <div className="grid my-auto">
                  <h3 className="text-lg">{val.name}</h3>
                </div>
                <div className="my-auto">
                  <h3 className="my-auto">
                    {Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    }).format(parseInt(val.price))}
                  </h3>
                  <ul className="flex gap-7 border py-2 px-3 text-sm w-max">
                    <li
                      className="my-auto cursor-pointer"
                      onClick={() => {
                        if (data[index].quantity === 1) {
                          return (count[index] += 1);
                        }
                        setCount((count[index] -= 1));
                        data[index].quantity = count[index];
                      }}
                    >
                      <CgMathMinus />
                    </li>
                    <li className="my-auto">{val.quantity}</li>
                    <li
                      className="my-auto cursor-pointer"
                      onClick={() => {
                        setCount((count[index] += 1));
                        data[index].quantity = count[index];
                      }}
                    >
                      <CgMathPlus />
                    </li>
                  </ul>
                </div>
                <div>
                  <h3
                    className="cursor-pointer text-sm"
                    onClick={() => {
                      dispatch({ type: "remove" });
                      setTotal((total - 1) % total);
                      data.splice(index, 1);
                      count.splice(index, 1);
                    }}
                  >
                    Remove
                  </h3>
                </div>
              </div>
            </section>
          </section>
        ))}
      </section>
      <section>
        <div className="flex justify-between tablet:justify-around text-xl font-medium">
          <h3>Total</h3>
          <p>
            {Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
            }).format(parseInt(amount))}
          </p>
        </div>
      </section>
    </section>
  );
}
