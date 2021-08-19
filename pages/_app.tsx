import "../styles/globals.css";
import type { AppProps } from "next/app";

// Apollo Provider
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";

// Components
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ApolloProvider>
  );
}
export default MyApp;
