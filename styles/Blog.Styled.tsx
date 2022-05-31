import styled from "styled-components";
import { device } from "../components/device";

export const BlogStyled = styled.div`
  header {
    color: #fff;
    padding: 4em 1em;
    background: rgb(34, 1, 70);
    background: linear-gradient(
      173deg,
      rgba(34, 1, 70, 1) 15%,
      rgba(13, 1, 37, 1) 80%
    );
    position: relative;

    .header_wrapper {
      width: 90%;
      margin: 0px auto;
      display: flex;

      @media ${device.laptop} {
        padding: 1em 2em;
      }
      @media ${device.laptopL} {
        max-width: 80%;
      }
    }

    .morph_effect {
      width: 8em;
      max-width: 100%;
      height: 19.9em;
      position: absolute;
      top: 0em;
      left: 0em;
      display: flex;
      z-index: 10;
      justify-content: center;
      align-items: center;
      background: rgba(233, 233, 233, 0.141);
      -webkit-backdrop-filter: blur(15px);
      backdrop-filter: blur(15px);

      @media ${device.mobileL} {
        height: 16.9em;
      }

      @media ${device.tablet} {
        width: 25em;
        height: 16.9em;
      }
      @media ${device.laptop} {
        height: 18.9em;
      }
    }

    .under_morph {
      width: 6em;
      height: 8em;
      border-radius: 3px;
      z-index: 0;
      position: absolute;
      top: 3em;
      left: 1em;
      background: rgb(164, 36, 160);
      background: linear-gradient(
        173deg,
        rgba(164, 36, 160, 1) 10%,
        rgba(34, 1, 70, 1) 90%
      );

      @media ${device.tablet} {
        left: 10em;
        width: 10em;
        height: 12em;
      }

      @media ${device.laptop} {
        top: 4em;
      }
    }

    .header_content_wrapper {
      z-index: 10;

      @media ${device.tablet} {
        margin-left: 15em;
      }

      @media ${device.laptopL} {
        margin-left: 8em;
      }
    }

    .header_content_wrapper {
      display: flex;

      .horizontal_rule {
        width: 3em;
        height: 1px;
        background-color: #fff;
        margin-top: 1.8em;
      }

      div {
        margin-left: 0.5em;
      }
      h5 {
        font-weight: 300;
      }
      h2 {
        font-weight: 300;
        font-size: 2em;
      }
    }
  }

  .content_wrapper {
    padding: 0.5em;
    width: 90%;
    margin: 0px auto;

    @media ${device.tablet} {
      padding: 1em 1.5em;
    }

    @media ${device.laptopL} {
      max-width: 80%;
    }

    .fetch_posts {
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      margin: 2em;

      button {
        padding: 1em 2.5em;
        border: 0em;
        color: #fff;
        border-radius: 2.5em;
        background-color: #7c0ed5;
        cursor: pointer;
      }
    }
  }

  .inner_hero {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    justify-items: center;
    padding: 1.5em 0em;

    @media ${device.tablet} {
      flex-direction: row;
    }

    div {
      flex-grow: 1;
    }

    h3 {
      margin: 0em;
      font-size: 1.8em;
      font-weight: 400;
    }
    p {
      font-weight: 300;
    }

    .search_section {
      width: 100%;
      @media ${device.tablet} {
        width: 80%;
        padding-left: 3em;
      }

      div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;

        input {
          width: 100%;
          padding: 1.3em;
          border: 1px solid gray;
          border-radius: 2em;
        }

        .search_icon {
          position: absolute;
          right: 1em;
          top: 1;
        }
      }
    }
  }

  .cta {
    background: rgb(33, 61, 112);
    background: linear-gradient(
      173deg,
      rgba(33, 61, 112, 1) 10%,
      rgba(25, 8, 61, 1) 90%
    );
    color: #fff;

    .content {
      @media ${device.tablet} {
        align-self: center;
      }
      h3 {
        font-weight: 500;
      }
      p {
        font-weight: 200;
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

    .morph_wrapper {
      margin-top: 1em;
      width: 100%;
      height: 12em;
      z-index: 10;
      position: relative;

      @media ${device.tablet} {
        width: 15em;
      }

      .morph {
        width: 18em;
        height: 12em;
        z-index: 10;

        background: rgba(233, 233, 233, 0.141);
        -webkit-backdrop-filter: blur(15px);
        backdrop-filter: blur(15px);

        @media ${device.tablet} {
          width: 20em;
        }

        @media ${device.laptop} {
          width: 24em;
        }
      }

      .under_morph {
        z-index: 0;
        width: 9em;
        height: 4.5em;
        position: absolute;
        border-radius: 0.2em;
        top: 3em;
        left: 8em;
        background: rgb(110, 72, 73);
        background: linear-gradient(
          180deg,
          rgba(110, 72, 73, 1) 30%,
          rgba(56, 38, 67, 1) 80%
        );

        @media ${device.tablet} {
          width: 11em;
          height: 6.5em;
          top: 2.5em;
          left: 11em;
        }
      }
    }
  }
`;
