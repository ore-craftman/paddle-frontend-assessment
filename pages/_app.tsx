import type { AppProps } from "next/app";

import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Layout } from "../components/Layout/Layout";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
  a{
    text-decoration: none;
  }
  ul{
    list-style-type: none;
  }
`;

const theme = {
  colors: {
    primaryBlue: "#271AC1",
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
