import Link from "next/link";
import {
  FaYoutube,
  FaFacebookSquare,
  FaLinkedin,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import { FooterStyled } from "./Footer.Styled";

export const Footer = ({ pathname }: { pathname: string }) => {
  return (
    <>
      <FooterStyled pathname={pathname}>
        <footer>
          <section className="social-icons">
            <Link href="/">
              <a>
                <FaYoutube />
              </a>
            </Link>
            <Link href="/">
              <a>
                <FaFacebookSquare />
              </a>
            </Link>

            <Link href="/">
              <a>
                <FaLinkedin />
              </a>
            </Link>

            <Link href="/">
              <a>
                <FaInstagramSquare />
              </a>
            </Link>

            <Link href="/">
              <a>
                <FaTwitterSquare />
              </a>
            </Link>
          </section>

          <section className="site_policy">
            <Link href="/">
              <a>Terms of services</a>
            </Link>

            <Link href="/">
              <a>Privacy Policy</a>
            </Link>
          </section>

          <p>{`Copyright 2021 @ Peddle Technologies. All Rights Reserved`}</p>
        </footer>
      </FooterStyled>
    </>
  );
};
