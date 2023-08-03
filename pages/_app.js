import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/global.css";
//import "../styles/customBootstrap.scss";
import { DM_Mono } from "next/font/google";
import { Poppins } from "next/font/google";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <main>
      <Component {...pageProps} />
    </main>
  );
}
