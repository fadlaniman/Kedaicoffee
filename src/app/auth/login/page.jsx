import Link from "next/link";

export default function Login() {
  return (
    <main>
      <section className="py-40 px-10">
        <h3 className="text-center py-7 text-2xl">Sign In</h3>
        <form className="grid tablet:w-1/4 tablet:mx-auto">
          <label htmlFor="email" className="text-sm py-2">
            Email
          </label>
          <input
            id="email"
            type="text"
            className="outline-none border-2 border-neutral-800 p-3 rounded-sm"
          />

          <label htmlFor="password" className="text-sm py-2">
            Password
          </label>
          <input
            id="password"
            type="password"
            className="outline-none border-2 border-neutral-800 p-3 rounded-sm"
          />

          <button className="mt-10 px-7 py-3 bg-neutral-800 text-white rounded-sm">
            Sign In
          </button>
        </form>
        <h5 className="text-center text-sm py-3">
          do you haven t already account?
          <Link href="/register" className="text-blue-600">
            Sign Up
          </Link>
        </h5>
      </section>
    </main>
  );
}
