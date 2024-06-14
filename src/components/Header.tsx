import Head from "next/head";
import Link from "next/link";
import NavLink from "./NavLink";

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
            <NavLink url="/" text=" Aleatório" />
          </li>
          <li>
            <NavLink url="/Dashboard" text="Ver todos" />
          </li>
        </nav>
      </header>
    </>
  );
}
