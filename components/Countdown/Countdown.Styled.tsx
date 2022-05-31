import styled from "styled-components";
import { device } from "../device";

export const CountdownStyled = styled.section`
  margin: 1.5em 0em;

  .time-container {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;

    @media ${device.tablet} {
      max-width: 90%;
      margin: 0em auto;
    }

    @media ${device.laptopL} {
      max-width: 85%;
      margin: 0em auto;
    }

    @media ${device.desktop} {
      max-width: 65%;
      margin: 0em auto;
    }

    div {
      background-color: #fff;
      color: #000;
      border-radius: 4px;
      padding: 0.6em 0.2em;
      width: 3.5em;

      @media ${device.mobileM} {
        padding: 0.8em 0.4em;
        width: 3.9em;
      }
      @media ${device.tablet} {
        padding: 1em 0.5em;
        width: 5em;
      }

      h2 {
        margin: 0px;
        font-size: xx-large;
        font-weight: 500;
      }
      p {
        margin: 1px 0px;
      }
    }
  }
`;
