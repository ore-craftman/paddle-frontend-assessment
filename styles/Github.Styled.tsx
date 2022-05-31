import styled from "styled-components";
import { device } from "../components/device";

export const GithubStyled = styled.div`
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
      height: 22.5em;
      position: absolute;
      top: 0em;
      left: 0em;
      display: flex;
      z-index: 10;
      justify-content: center;
      align-items: center;
      background: rgba(255, 255, 255, 0.117);
      -webkit-backdrop-filter: blur(10px);
      backdrop-filter: blur(10px);

      @media ${device.tablet} {
        width: 25em;
        height: 19.5em;
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
    @media ${device.laptop} {
      max-width: 55%;
    }
    @media ${device.laptopL} {
      max-width: 60%;
    }
  }

  .repo_container {
    border: 1px solid #d3d3d3;
    margin: 2em 0em;
    display: flex;
    border-radius: 0.2em;
    align-items: center;
    font-weight: 300;
    h4 {
      font-weight: 400;
      font-size: 1em;
      margin: 0em;
    }

    button {
      margin-right: 0.5em;
    }
  }

  .details {
    @media ${device.tablet} {
      margin-left: 1em;
    }
  }

  .processor {
    font-weight: 400;
    font-size: 3em;
  }
`;
