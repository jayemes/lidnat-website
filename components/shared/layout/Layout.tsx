import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Head from "next/head";

import { LayoutChildren } from "../../../types/interfaces";

const Layout = ({ children }: LayoutChildren): JSX.Element => {
  return (
    <>
      <Head>
        <title>Lidnat</title>
        <meta name="viewport" content="width=360,initial-scale=1" />
      </Head>
      <div>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
