import styled from "styled-components";
import { device } from "../components/device";

export const IndexStyled = styled.div`
  min-height: 60vh;
  padding: 0.5em;
  width: 90%;
  margin: 0px auto;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;

  @media ${device.laptopL} {
    max-width: 80%;
  }

  .hero {
    code {
      background-color: #e5e5e5;
      padding: 1em 2em 1em 1em;
      border-radius: 3em;
    }
    h1 {
      font-weight: 400;
      font-size: 3em;
      margin-bottom: 0.3em;
    }
  }

  ul {
    padding-left: 0.5em;
    padding-top: 1em;
  }

  ul li {
    margin: 0.6em 0em;
  }

  a {
    text-decoration: underline;
  }
`;
