//@ts-nocheck
import type { AppProps } from "next/app";
import { useEffect } from "react";

import { UserProvider } from "../context";
import { Web3Provider } from "../providers";

import { createGlobalStyle } from "styled-components";
import Navbar from "../UI/menu/Navbar";
import Footer from "../UI/components/footer";

import "../styles/animated.css";
import "react-alice-carousel/lib/alice-carousel.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "../node_modules/elegant-icons/style.css";
import "../node_modules/et-line/style.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "../styles/style.scss";

import "../styles/page-style/loader.css";

import { GlobalStyles } from "../styles/page-style/GlobalStyles";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Head from "next/head";

// const GlobalStyles = createGlobalStyle`
//   :root {
//     scroll-behavior: unset;
//   }
// `;

export const ScrollTop = ({ children, location }) => {
  useEffect(() => window.scrollTo(0, 0), [location]);
  return children;
};

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require("node_modules/bootstrap/dist/css/bootstrap.min.css");
  }, []);

  return (
    <>
      <GlobalStyles />
      <Head>
        <title> App By Hadi </title>
        <meta name="description" content="By hadiraza.com" />
      </Head>
      <UserProvider>
        <ToastContainer
          toastStyle={{ color: "white", backgroundColor: "#2b2d30c7" }}
        />

        <Web3Provider>
          <div className="wraper">
            
            <Navbar />
            <Component {...pageProps} />
            <Footer />
          </div>
        </Web3Provider>
      </UserProvider>
    </>
  );
}
