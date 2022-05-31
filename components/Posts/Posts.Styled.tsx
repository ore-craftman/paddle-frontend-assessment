import styled from "styled-components";
import { device } from "../device";

export const PostsStyled = styled.div`
  .posts_wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    article {
      width: 100%;
      box-shadow: 0px 4px 32px 2px rgba(135, 135, 135, 0.276);
      border-radius: 0.2em;
      margin: 2em 0em;

      @media ${device.tablet} {
        width: 49%;
        max-width: 100%;
      }

      @media ${device.laptop} {
        width: 30%;
        max-width: 100%;
      }

      .inner_wrapper {
        padding: 1em;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }

    article .meta_data {
      align-self: flex-start;
      display: flex;
      align-items: center;
      flex-wrap: nowrap;
      p {
        font-size: 12px;
        color: gray;
        margin: 0.5em 0em 0em;
      }
    }

    article h3 {
      font-weight: 400;
      padding-top: 0em;
      font-size: 1em;
    }

    article .post_desc {
      font-weight: 200;
      margin: 0em;
      color: #808080;
      font-size: 14px;
      line-height: 1.8em;
    }

    .readmore_button {
      margin: 0.7em 0em 0.5em;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: center;
      align-self: flex-start;
      width: 40%;

      @media ${device.laptop} {
        width: 48%;
      }

      @media ${device.laptopL} {
        width: 40%;
      }
      a {
        font-size: small;
        color: #ff1ff8;
      }

      .horizontal_rule {
        width: 3em;
        height: 0.1em;
        background-color: #ff1ff8;
      }
    }
  }
`;
