"use client";
import Link from "next/link";
import { useState, useEffect, useReducer } from "react";
import { LuShoppingBag, LuHeart, LuUser } from "react-icons/lu";
import { IoGridOutline } from "react-icons/io5";
import { TbMenu } from "react-icons/tb";
import { IoMdClose } from "react-icons/io";
import { useGlobalState } from "../page";

export default function Navbar() {
  const [countCart, setCountCart] = useGlobalState("countCart");
  const [toggle, setToggle] = useState(false);
  const [navStatic, setNavStatic] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const currentScroll = window.scrollY;
      {
        currentScroll > 200 ? setNavStatic(true) : setNavStatic(false);
      }
    });
  }, []);

  return (
    <nav className={navStatic ? "header-active" : "header"}>
      <section className="flex justify-between ">
        <div className="flex gap-10 text-neutral-800">
          <h1 className="text-2xl font-Ephesis-text">Kedaicoffee.</h1>
        </div>
        <div className="flex gap-1 text-2xl text-neutral-800 my-auto">
          <Link href="/auth/login">
            <LuHeart />
          </Link>
          <Link href="/auth/login">
            <LuUser />
          </Link>
          <Link href="/cart" className="flex">
            <LuShoppingBag />
            <p className="text-xs font-bold">{countCart}</p>
          </Link>
        </div>
      </section>
      <section className="flex gap-10 justify-between xl:justify-normal">
        <div className="flex gap-2 bg-neutral-800 rounded-md text-gray-200 px-4 py-2">
          <IoGridOutline className="my-auto" />
          <h2 className="text-sm my-auto ">All Departements</h2>
        </div>
        <div className={toggle ? "navbar-active" : "navbar"}>
          <Link href="/">Home</Link>
          <Link href="/information">Information</Link>
        </div>
        <TbMenu
          className={toggle ? "hidden" : "text-3xl xl:hidden cursor-pinter"}
          onClick={() => {
            setToggle(!toggle);
          }}
        />
        <IoMdClose
          className={
            toggle
              ? "text-3xl xl:hidden z-10 text-white absolute right-0 m-3 cursor-pinter"
              : "hidden"
          }
          onClick={() => {
            setToggle(!toggle);
          }}
        />
      </section>
    </nav>
  );
}
