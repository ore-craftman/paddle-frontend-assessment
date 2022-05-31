import styled from "styled-components";
import { device } from "../components/device";

export const ComingSoonStyled = styled.div`
  color: #fff;
  min-height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  padding-bottom: 10em;
  background: rgb(29, 0, 62);
  background: linear-gradient(
    162deg,
    rgba(29, 0, 62, 1) 45%,
    rgba(11, 1, 35, 1) 100%
  );

  main {
    padding: 1em;
    position: relative;

    @media ${device.tablet} {
      width: 60%;
    }
    @media ${device.laptop} {
      width: 40%;
    }
    @media ${device.laptopL} {
      width: 35%;
    }

    @media ${device.desktop} {
      width: 30%;
    }
  }

  .inner_section {
    text-align: center;
    h1 {
      font-size: 2.7em;
      letter-spacing: 1px;
      font-weight: 900;
      margin-bottom: 0px;
    }
    p {
      font-size: small;
      font-weight: 300;
    }
  }

  .circle_left {
    position: absolute;
    left: -4em;
    top: 0em;
    width: 6em;
    max-width: 100%;
    height: 6em;
    max-height: 100%;
    border-radius: 100%;
    background: rgb(113, 27, 114);
    background: linear-gradient(
      170deg,
      rgba(113, 27, 114, 1) 15%,
      rgba(29, 0, 63, 1) 80%
    );

    @media ${device.laptop} {
      left: -12em;
    }
  }

  .circle_right {
    position: absolute;
    right: 0em;
    top: 9em;
    width: 2em;
    max-width: 100%;
    height: 2em;
    max-height: 100%;
    border-radius: 100%;
    background: rgb(33, 59, 110);
    background: linear-gradient(
      162deg,
      rgba(33, 59, 110, 1) 15%,
      rgba(26, 10, 62, 1) 80%
    );

    @media ${device.tablet} {
      width: 3em;
      height: 3em;
    }
    @media ${device.laptop} {
      right: -4em;
      width: 4em;
      height: 4em;
    }
  }

  .circle_bottom {
    position: absolute;
    left: 1.5em;
    bottom: -7em;
    width: 4em;
    max-width: 100%;
    height: 4em;
    max-height: 100%;
    border-radius: 100%;
    background: rgb(119, 61, 41);
    background: linear-gradient(
      233deg,
      rgba(119, 61, 41, 1) 15%,
      rgba(50, 23, 40, 1) 80%
    );

    @media ${device.tablet} {
      bottom: -4em;
      left: -2em;
    }
    @media ${device.laptop} {
      height: 7em;
      width: 7em;
      bottom: -9em;
    }

    @media ${device.laptopL} {
      height: 7em;
      width: 7em;
      bottom: -16em;
    }

    @media ${device.desktop} {
      height: 7em;
      width: 7em;
      bottom: -40em;
      left: 6em;
    }
  }
`;
