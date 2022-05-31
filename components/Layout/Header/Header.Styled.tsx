import styled from "styled-components";
import { device } from "../../device";

export const HeaderStyled = styled.header`
  background-color: ${({ bgColor }: { bgColor: string }) => bgColor};
  color: ${({ bgColor }: { bgColor: string }) =>
    bgColor === "white" ? "#000" : "#fff"};
  padding: 1em;

  @media ${device.laptop} {
    padding: 1em 1.5em;
  }
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 0px auto;

    @media ${device.laptopL} {
      max-width: 80%;
    }
  }
  div section a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${(props: any) => (props.bgColor === "white" ? "#000" : "#fff")};
  }
  div section h3 {
    font-size: small;
    letter-spacing: 2px;
    font-weight: 500;
    margin-top: -2px;
    margin-bottom: 0px;
  }

  nav {
    display: ${(props: any) => (props.displayNav ? "flex" : "none")};
    height: 100vh;
    position: absolute;
    top: 0em;
    left: 0px;
    padding: 3em 1em;

    background-color: ${(props: any) =>
      props.bgColor === "white" ? "#fff" : "rgb(29, 0, 62)"};
    z-index: 20;

    @media ${device.tablet} {
      top: 1em;
      width: 50%;
      display: flex;
      height: 0vh;
      position: static;
      top: none;
      left: none;
      padding: 0;
      background-color: rgb(29, 0, 62);
    }
    @media ${device.laptop} {
      width: 30%;
    }
  }
  nav ul {
    display: block;
    justify-content: space-between;
    align-items: center;
    font-size: small;

    @media ${device.tablet} {
      display: flex;
      width: 100%;
      justify-content: space-between;
      margin: 0px;
    }
  }

  nav ul a {
    &:link {
      color: ${(props: any) => (props.bgColor === "white" ? "#000" : "#fff")};
    }

    &:visited {
      color: ${(props: any) => (props.bgColor === "white" ? "#000" : "#fff")};
    }

    &:hover {
      color: #ff00f7;
    }
    &:active {
      color: #ff00f7;
    }
  }

  nav ul li {
    margin: 10px 0px;

    @media ${device.tablet} {
      margin: 0px 0px;
    }
  }

  nav ul button {
    cursor: pointer;
    background-color: ${(props: any) =>
      props.bgColor === "white" ? "#fff" : "#271ac1"};
    padding: 1em 2em;
    border: none;
    color: ${(props: any) => (props.bgColor === "white" ? "#000" : "#fff")};
    border-radius: 2em;
    box-shadow: 0 0.2em 0.3em rgba(119, 119, 119, 0.2);
    font-weight: ${(props: any) => (props.bgColor === "white" ? 600 : 500)};
  }

  div span {
    color: ${(props: any) => (props.bgColor === "white" ? "#000" : "#fff")};
    font-size: larger;
    cursor: pointer;

    @media ${device.tablet} {
      display: none;
    }
  }
`;
