import styled from "styled-components";
import { device } from "../../device";

export const FooterStyled = styled.div`
  background-color: ${({ pathname }: { pathname: string }) =>
    pathname === "/comingsoon"
      ? "none"
      : pathname === "/blog"
      ? "white"
      : pathname === "/"
      ? "white"
      : "#160034"};

  position: ${({ pathname }: { pathname: string }) =>
    pathname !== "/comingsoon" ? "static" : "absolute"};
  bottom: -21em;
  left: 0em;
  width: 100%;

  @media ${device.mobileM} {
    bottom: -15.4em;
  }

  @media ${device.tablet} {
    bottom: -15.7em;
  }

  @media ${device.laptop} {
    bottom: -14.7em;
  }

  footer {
    position: relative;
    bottom: 0em;
    border: ${({ pathname }: { pathname: string }) =>
      pathname !== "/comingsoon"
        ? "none"
        : `1px
      solid #707070`};
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    font-size: 12px;
    font-weight: 300;
    color: #a8a4b1;
    margin: 0em auto;

    background: ${({ pathname }: { pathname: string }) =>
      pathname === "/comingsoon" && `rgba(233, 233, 233, 0.141)`};

    backdrop-filter: ${({ pathname }: { pathname: string }) =>
      pathname === "/comingsoon" && `blur(10px)`};
    -webkit-backdrop-filter: ${({ pathname }: { pathname: string }) =>
      pathname === "/comingsoon" && `blur(10px)`};

    min-height: 8em;
    padding: 2em 0em 0em;
    max-width: ${({ pathname }: { pathname: string }) =>
      pathname !== "/comingsoon" ? "100%" : "50em"};
    border-radius: ${({ pathname }: { pathname: string }) =>
      pathname !== "/comingsoon"
        ? "0px"
        : `50%
      50% 0 0/ 100% 100% 0px 0px`};

    @media ${device.tablet} {
      height: 8em;
      padding: 2.5em 0em;
      max-width: 60em;
      font-size: small;
    }
  }

  footer .social-icons {
    font-size: 1.5em;
    a {
      color: #9995a3;
      margin: 0em 0.3em;
      &:hover {
        color: #c0c0c0;
      }

      @media ${device.tablet} {
        margin: 0em 0.7em;
      }
    }
  }

  footer .site_policy {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      color: #a8a4b1;
      margin: 0em 0.5em;
      &:hover {
        color: #c0c0c0;
      }
    }
  }

  footer p {
    text-align: center;
  }
`;
