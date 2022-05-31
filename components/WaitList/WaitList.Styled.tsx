import styled from "styled-components";
import { device } from "../device";

export const WaitListStyled = styled.section`
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

  .bi_input {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    margin: 1.5em 0em;

    input {
      width: 45%;
      padding: 0.5em;
      background-color: rgba(255, 255, 255, 0);
      border: none;
      border-color: rgba(130, 130, 130, 0.83);
      border-bottom-style: solid;
      border-bottom-width: 2px;
      &:focus {
        outline: none;
        border-color: rgb(164, 164, 164);
        color: #fff;
      }
    }
  }

  .email_section {
    background-color: #fff;
    border-radius: 2em;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    input {
      border: none;
      background-color: rgba(255, 255, 255, 0);
      padding: 0.5em 1em;
      border-top-left-radius: 1.4em;
      border-bottom-left-radius: 1.4em;
      flex-grow: 1;
      &:focus {
        outline: none;
      }
    }

    button {
      background-color: #271ac1;
      padding: 1.5em 2em;
      border: none;
      color: #fff;
      border-radius: 4em;
      max-width: 80%;
      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
      font-size: x-small;

      @media ${device.mobileM} {
        border-radius: 2em;
      }
    }
  }
`;
