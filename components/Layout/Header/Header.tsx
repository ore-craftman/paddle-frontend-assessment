import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoMenuSharp, IoCloseSharp } from "react-icons/io5";

import { HeaderStyled } from "./Header.Styled";

export const Header = ({ pathname }: { pathname: string }) => {
  const [displayNav, setDisplayNav] = useState(false);

  return (
    <HeaderStyled
      //@ts-ignore
      displayNav={displayNav}
      bgColor={pathname === "/blog" ? "white" : "#1e0040"}
    >
      <div>
        <section>
          <Link href="/">
            <a>
              <Image
                src={
                  pathname === "/blog"
                    ? "https://www.metricks.io/images/metricks.png"
                    : "/metricks-white.png"
                }
                alt="about metricks"
                width={pathname !== "/blog" ? "40px" : "85px"}
                height={pathname !== "/blog" ? "25px" : "80px"}
              />
              {pathname !== "/blog" && <h3>METRICKS</h3>}
            </a>
          </Link>
        </section>

        <nav>
          <ul>
            <li>
              <Link href="/about">
                <a>{"about us".toUpperCase()}</a>
              </Link>
            </li>

            <li>
              <Link href="/blog">
                <a>{"blog".toUpperCase()}</a>
              </Link>
            </li>

            <li>
              <button>{"contact us".toUpperCase()}</button>
            </li>
          </ul>
        </nav>

        <span>
          {!displayNav ? (
            <IoMenuSharp onClick={() => setDisplayNav(!displayNav)} />
          ) : (
            <IoCloseSharp onClick={() => setDisplayNav(!displayNav)} />
          )}
        </span>
      </div>
    </HeaderStyled>
  );
};
