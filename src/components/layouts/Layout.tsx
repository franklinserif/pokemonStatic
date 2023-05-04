import { FC } from "react";
import Head from "next/head";
import { Navbar } from "../ui";

import mainStyles from "../../styles/main.module.css";

interface Props {
  children: React.ReactNode;
  title?: string;
}

const origin = typeof window === "undefined" ? "" : window.origin;

export const Layout: FC<Props> = ({ children, title }: Props) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="Franklin Rodriguez" />
        <meta name="description" content="Informacion del pokemon" />
        <meta name="keywords" content="xxxx, pokemon, pokedex" />
        <meta property="og:title" content={`Informacion sobre ${title}`} />
        <meta
          property="og:description"
          content={`Esta es la paginas sobre ${title}`}
        />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>

      <Navbar />

      <main className={mainStyles["main-wrapper"]}>{children}</main>
    </>
  );
};
