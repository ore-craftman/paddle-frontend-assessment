import styled from "styled-components";
import { device } from "../components/device";

export const AboutStyled = styled.div`
  position: relative;
  color: #fff;
  background: rgb(31, 0, 67);
  background: linear-gradient(
    180deg,
    rgba(31, 0, 67, 1) 30%,
    rgba(22, 0, 52, 1) 80%
  );
  header {
    min-height: 95vh;

    .morph {
      z-index: 10;
      position: relative;
      background: rgba(255, 255, 255, 0.072);
      -webkit-backdrop-filter: blur(10px);
      backdrop-filter: blur(10px);
      width: 55vw;
      height: 87vh;
    }

    .morph_base {
      border-radius: 0.2em;
      z-index: 0;
      background: rgb(137, 46, 136);
      background: linear-gradient(
        180deg,
        rgba(137, 46, 136, 1) 10%,
        rgba(51, 27, 82, 1) 80%
      );
      position: absolute;
      left: 2.5em;
      top: 9em;
      width: 8em;
      height: 21em;

      @media ${device.tablet} {
        width: 16em;
        left: 7em;
      }

      @media ${device.laptop} {
        top: 11em;
        left: 16em;
      }

      @media ${device.laptopL} {
        top: 16em;
        left: 30em;
      }

      @media ${device.desktop} {
        top: 27em;
        left: 48em;
        width: 32em;
        height: 40em;
      }
    }
  }

  .header_content {
    position: absolute;
    top: 8em;
    z-index: 10;
    padding: 0em 1em;

    @media ${device.tablet} {
      margin-left: 35%;
      top: 10em;
    }

    @media ${device.laptop} {
      margin-left: 30%;
    }

    @media ${device.desktop} {
      top: 30em;
    }
  }

  header .snippet {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;

    .horizontal-rule {
      width: 2em;
      height: 1px;
      background-color: #fff;
      margin-right: 1em;
    }

    h4 {
      font-weight: 300;
      font-size: 14px;
    }
  }

  header h2 {
    font-weight: 400;
    font-size: 2em;
    margin: 0.3em 0em;
    z-index: 20;

    @media ${device.tablet} {
      font-size: 2.5em;
      margin-left: 1em;
    }

    @media ${device.laptop} {
      font-size: 4em;
      margin-left: 1.7em;
    }
    @media ${device.laptopL} {
      font-size: 5em;
    }

    @media ${device.desktop} {
      font-size: 7em;
    }
  }

  header .base {
    display: flex;
    .empty {
      @media ${device.tablet} {
        width: 80%;
      }

      @media ${device.laptop} {
        width: 110%;
      }

      @media ${device.laptopL} {
        width: 90%;
      }

      @media ${device.desktop} {
        width: 80%;
      }
    }
    p {
      font-weight: 300;
      font-size: 15px;

      @media ${device.laptopL} {
        font-size: 1em;
      }

      @media ${device.desktop} {
        font-size: 1.8em;
      }
    }
  }

  header .top_circle {
    width: 4em;
    height: 4em;
    border-radius: 6em;
    background: rgb(32, 60, 111);
    background: linear-gradient(
      168deg,
      rgba(32, 60, 111, 1) 10%,
      rgba(29, 0, 64, 1) 80%
    );
    position: absolute;
    right: 0.5em;
    top: 8em;

    @media ${device.tablet} {
      width: 6em;
      height: 6em;
    }

    @media ${device.laptop} {
      width: 8em;
      height: 8em;
      top: 11em;
    }
    @media ${device.laptopL} {
      width: 10em;
      height: 10em;
      top: 12em;
    }
  }

  section.about {
    padding: 0.5em;
    width: 90%;
    margin: 0px auto;
    height: 65vh;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

    @media ${device.tablet} {
      padding: 1em 1.5em;
    }

    @media ${device.laptopL} {
      max-width: 80%;
    }

    h2 {
      font-weight: 400;
      font-size: xx-large;

      @media ${device.laptop} {
        font-size: 3em;
      }
    }
  }

  section.values {
    position: relative;
    z-index: 20;
    margin-bottom: 10em;
    .morph {
      z-index: 1;
      position: absolute;
      width: 100%;
      height: 29.5em;
      margin-top: 0.5em;
      right: 0em;
      top: 12.2em;
      background: rgba(255, 255, 255, 0.104);
      -webkit-backdrop-filter: blur(10px);
      backdrop-filter: blur(10px);

      @media ${device.mobileM} {
        height: 23em;
        top: 0.2;
      }

      @media ${device.tablet} {
        width: 54%;
        top: 0em;
        height: 27em;
      }

      @media ${device.laptop} {
        width: 50%;
        top: 0em;
        height: 21em;
      }

      @media ${device.laptopL} {
        height: 20em;
      }

      @media ${device.desktop} {
        height: 20vh;
      }
    }

    .morph_base {
      z-index: 0;
      position: absolute;
      border-radius: 0.2em;
      width: 60%;
      height: 10em;
      left: 1em;
      top: 16em;
      background: rgb(50, 74, 125);
      background: linear-gradient(
        180deg,
        rgba(50, 74, 125, 1) 48%,
        rgba(29, 0, 64, 1) 100%
      );
      @media ${device.tablet} {
        left: 60%;
        width: 20%;
        height: 13em;
        top: 4.5em;
      }
    }

    .content_wrapper {
      z-index: 10;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      width: 90%;
      margin: 0px auto;
      @media ${device.tablet} {
        padding: 1em 1.5em;
      }

      @media ${device.laptopL} {
        max-width: 80%;
      }

      .content_right {
        z-index: 30;
      }

      .content_left,
      .content_right {
        h3 {
          font-weight: 300;
          letter-spacing: 1px;
          font-size: large;
        }
        p {
          font-weight: 300;
        }
        @media ${device.tablet} {
          width: 48%;
        }
      }

      .serial_container {
        display: flex;
      }

      .serial_num {
        margin-right: 1em;
        h4 {
          margin: 0.5em 0.4em 0.5em;
          font-weight: 300;
          font-size: small;
        }
        .horizontal_rule {
          width: 3.5em;
          height: 1px;
          background-color: #fff;
        }
      }
    }
  }

  .cta {
    background: rgba(255, 255, 255, 0.098);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    padding: 3em 0em;
    .content {
      width: 90%;
      margin: 0px auto;
      @media ${device.tablet} {
        padding: 1em 1.5em;
      }

      @media ${device.laptopL} {
        max-width: 80%;
      }

      @media ${device.tablet} {
        align-self: center;
      }
      h3 {
        font-weight: 400;
        font-weight: 1.5em;
      }
      p {
        font-weight: 200;
        @media ${device.tablet} {
          width: 60%;
        }

        @media ${device.laptopL} {
          width: 45%;
        }
      }
      a {
        color: #ff00f7;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        span {
          margin-right: 0.3em;
        }
      }
    }
  }

  .cta_morph_base {
    width: 13em;
    height: 8em;
    right: 4em;
    bottom: 5em;
    z-index: 0;
    position: absolute;
    background: rgb(123, 70, 60);
    background: linear-gradient(
      180deg,
      rgba(123, 70, 60, 1) 33%,
      rgba(59, 37, 58, 1) 100%
    );

    @media ${device.laptop} {
      right: 10em;
    }

    @media ${device.laptopL} {
      right: 14em;
    }

    @media ${device.desktop} {
      right: 28em;
    }
  }
`;
