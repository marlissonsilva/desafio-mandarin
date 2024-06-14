import Head from "next/head";
import Link from "next/link";

interface HeaderProps {}

export default function Header(props: HeaderProps) {
  return (
    <>
      <Head>
        <title>Deseafio Mandarin</title>
      </Head>
      <header className="bg-orange-700 flex flex-col justify-center items-center p-6 gap-9">
        <h1 className="text-5xl font-semibold text-center">Desafio Mandarin</h1>
        <nav className="flex gap-5 list-none">
          <li>
            <Link
              href={"/"}
              className={`uppercase px-6 py-3 rounded-md bg-white hover:bg-blue-300 text-black`}
            >
              Aleatório
            </Link>
          </li>
          <li>
            <Link
              href={"/Dashboard"}
              className={`uppercase px-6 py-3 rounded-md bg-white hover:bg-blue-300 text-black`}
            >
              Ver todos
            </Link>
          </li>
        </nav>
      </header>
    </>
  );
}
