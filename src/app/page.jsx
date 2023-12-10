"use client";

import Navbar from "./assets/navbar";
import Footer from "./assets/footer";
import Image from "next/image";
import gsap from "gsap";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { createGlobalState } from "react-hooks-global-state";
import { IoSearchOutline } from "react-icons/io5";

export const products = [
  {
    id: 1,
    name: "Vanilla Latte",
    description: `Vanilla latte adalah minuman kopi yang lezat! Ini adalah campuran antara espresso, susu, dan sirup vanila.`,
    price: 24000,
    category: "kopi",
    image: `/images/vanillaLatte.jpg`,
  },
  {
    id: 2,
    name: "Caramel Latte",
    description: `Caramel latte adalah minuman kopi yang manis dengan sentuhan karamel yang lezat.`,
    price: 24000,
    category: "kopi",
    image: `/images/caramelLatte.jpg`,
  },
  {
    id: 3,
    name: "Moka Latte",
    description: `Moka latte merupakan variasi yang menggabungkan rasa kopi dari Moka Pot dengan susu yang lembut.`,
    price: 24000,
    category: "kopi",
    image: `/images/mokaLatte.jpg`,
  },
  {
    id: 4,
    name: "Red Velvet",
    description: `
    Red velvet adalah jenis kue yang terkenal dengan warna merah khasnya, sering kali dihiasi dengan lapisan cream cheese frosting.`,
    price: 16000,
    category: "non kopi",
    image: `/images/redVelvetLatte.jpg`,
  },
  {
    id: 5,
    name: "Matcha Latte",
    description: `Matcha adalah bubuk teh hijau yang berasal dari daun teh hijau yang digiling halus. `,
    price: 16000,
    category: "non kopi",
    image: `/images/matchaLatte.jpg`,
  },
];

const value = [
  {
    id: 1,
    head: `Citywide Delivery`,
    description: `Get your favorite items delivered citywide with our reliable
    and swift delivery service`,
    image: `/images/logistics.png`,
  },
  {
    id: 2,
    head: `Everytime`,
    description: `Enjoy the convenience of shopping anytime with our 24-hour
    service!`,
    image: `/images/time.png`,
  },
  {
    id: 3,
    head: `Cash On Delivery`,
    description: `Pay upon delivery! Get your favorite products with the
    convenient Cash On Delivery method.`,
    image: `/images/loan.png`,
  },
];

export const { useGlobalState } = createGlobalState({
  product: 0,
  cart: [],
  countCart: 0,
  quantity: [],
  amount: 0,
});

export default function Home() {
  const sliderRef = useRef(null);
  const sections = useRef(null);
  const catalog = useRef(null);
  const [search, setSearch] = useState(null);
  const [item, setItem] = useState(products);
  gsap.registerPlugin(ScrollTrigger);
  const [detailProduct, setDetailProduct] = useGlobalState("product");
  useEffect(() => {
    let index = 0;
    const slide = sliderRef.current.children;
    const width = document.querySelector(".container-images").offsetWidth;

    const slider = () => {
      gsap.to(slide, {
        x: -width * index,
        duration: 1,
      });
      index = (index + 1) % slide.length;
    };

    setInterval(slider, 5000);
  }, []);

  useEffect(() => {
    const section = sections.current.children;
    gsap.set(section, { y: 100, opacity: 0 });
    ScrollTrigger.batch(section, {
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          stagger: 0.15,
          duration: 1,
          y: 0,
          overwrite: true,
        }),
    });
  }, []);

  useEffect(() => {
    const product = catalog.current.children;
    gsap.set(product, { y: 100, opacity: 0 });
    ScrollTrigger.batch(product, {
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          overwrite: true,
        }),
      onLeave: (batch) =>
        gsap.set(batch, { opacity: 0, y: -100, overwrite: true }),
      onEnterBack: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          overwrite: true,
        }),
      onLeaveBack: (batch) =>
        gsap.set(batch, { opacity: 0, y: 100, overwrite: true }),
    });
  }, []);

  useEffect(() => {
    const Item = products.filter((item) =>
      item.name.toLowerCase().includes(search)
    );
    {
      search ? setItem(Item) : setItem(products);
    }
  }, [search]);

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <section className="container-images">
          <section ref={sliderRef} className="container-slides">
            <Image
              src="/images/banner.jpg"
              width={500}
              height={500}
              quality={100}
              alt="img"
              sizes={{ width: "100%" }}
              className="rounded-md"
            />
            <Image
              src="/images/banner-2.jpg"
              width={500}
              height={500}
              quality={100}
              alt="img"
              sizes={{ width: "100%" }}
              className="rounded-md"
            />
            <Image
              src="/images/banner-3.jpg"
              width={500}
              height={500}
              quality={100}
              alt="img"
              sizes={{ width: "100%" }}
              className="rounded-md"
            />
          </section>
        </section>
        <section className="container-benefits">
          <section className="grid tablet:grid-flow-col gap-10" ref={sections}>
            {value.map((element) => (
              <section className="grid space-y-3 text-center" key={element.id}>
                <Image
                  src={element.image}
                  width={500}
                  height={500}
                  quality={100}
                  alt={element.image}
                  className="w-16 mx-auto"
                />
                <h3 className="font-medium">{element.head}</h3>
                <p className="text-sm w-1/2 mx-auto">{element.description}</p>
              </section>
            ))}
          </section>
        </section>

        <section className="container-catalog">
          <section>
            <h3 className="uppercase text-center text-lg py-5 border-t-2 border-b-2 border-neutral-800">
              all products
            </h3>
            <label className="flex py-12 justify-center tablet:justify-end mx-5">
              <input
                placeholder="Search"
                type="search"
                onChange={(e) => {
                  const input = e.target.value.toLowerCase();
                  setSearch(input);
                }}
                className="outline-none rounded-sm bg-neutral-100 p-3 w-full tablet:w-1/4"
              />
              <p className="bg-neutral-100 p-3">
                <IoSearchOutline className="text-2xl my-auto cursor-pointer text-neutral-400" />
              </p>
            </label>
          </section>
          <section className="catalog" ref={catalog}>
            {item.map((val, index) => (
              <Link
                href={`/products/${val.id}`}
                onClick={() => {
                  setDetailProduct(products[val.id - 1]);
                }}
                className="grid rounded-sm shadow-sm border hover:border-neutral-800 duration-200 cursor-pointer"
                key={val.id}
              >
                <div className="block space-y-5 justify-between">
                  <Image
                    src={val.image}
                    width={500}
                    height={500}
                    quality={100}
                    alt="product"
                    className="h-32"
                  />
                  <div className="space-y-2 px-3">
                    <h3 className="font-bold">{val.name} </h3>
                    <p>{val.description}</p>
                  </div>
                </div>
                <div className="mt-auto  px-3 py-7 space-y-7 text-neutral-800">
                  <p>
                    {Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    }).format(val.price)}
                  </p>
                </div>
              </Link>
            ))}
          </section>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
