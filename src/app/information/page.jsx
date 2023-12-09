import Image from "next/image";

export default function Information() {
  return (
    <section className="py-40 px-5 laptop:px-40">
      <section className="grid justify-center space-y-5">
        <h3 className="text-2xl text-center">Offline Store</h3>
        <Image
          src="/images/banner.jpg"
          width={500}
          height={500}
          quality={100}
          className="rounded-xl"
          alt="image"
        />
        <ul className="text-center mx-auto text-sm space-y-1">
          <li>
            Products: <span>Coffee & Non Coffee</span>
          </li>
          <li>
            Operational: <span>Everyday, 16 Am - 02 Am</span>
          </li>
          <li>
            Adress: <span>Pematangsiantar City</span>
          </li>
        </ul>
      </section>
    </section>
  );
}
