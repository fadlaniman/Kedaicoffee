import Image from "next/image";

export default function Information() {
  return (
    <section className="py-40 px-5 laptop:px-60">
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
        <section className="pt-5 space-y-3 text-sm text-justify">
          <div className="flex justify-center gap-3">
            <h3>Products :</h3>
            <p>Coffee & Non Coffee</p>
          </div>
          <div className="flex justify-center gap-3">
            <h3>Address :</h3>
            <p>Pematangsiantar City</p>
          </div>
          <div className="flex justify-center gap-3">
            <h3>Operational :</h3>
            <p>Everyday, 16 Am - 24 Pm</p>
          </div>
        </section>
      </section>
    </section>
  );
}
