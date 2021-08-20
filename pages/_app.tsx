import "../styles/globals.css";
import type { AppProps } from "next/app";

// Apollo Provider
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";

// Components
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Container from "../components/Container";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Container>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </Container>
    </ApolloProvider>
  );
}
export default MyApp;
