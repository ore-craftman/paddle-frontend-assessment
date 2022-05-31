import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { IndexStyled } from "../styles/Index.Styled";

const Home: NextPage = () => {
  return (
    <IndexStyled>
      <Head>
        <title>
          Home - Metricks | Affiliate Marketing Program Tracking software
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="hero">
        <h1>Peddle Technologies.</h1>
        <code>Assessment /routes</code>
      </div>

      <div>
        <ul>
          <li>
            <Link href="/comingsoon">
              <a>Coming Soon</a>
            </Link>
          </li>

          <li>
            <Link href="/about">
              <a>About Us</a>
            </Link>
          </li>

          <li>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>

          <li>
            <Link href="/github">
              <a>Github</a>
            </Link>
          </li>

          <li>
            <Link href="/*">
              <a>404</a>
            </Link>
          </li>
        </ul>
      </div>
    </IndexStyled>
  );
};

export default Home;
