import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Head from "next/head";
import LoadingScreen from "../LoadingScreen";

import { LayoutChildren } from "../../../types/interfaces";

import { fetchParsedData } from "../../../redux/contentApiSlice";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";

const Layout = ({ children }: LayoutChildren): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchParsedData());
  }, [dispatch]);

  const requestStatus = useAppSelector((state) => state.content.requestStatus);

  const renderSwitch = (param: string) => {
    switch (param) {
      case "loading":
        return <LoadingScreen />;
      case "success":
        return (
          <div>
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        );
      case "failed":
        return <LoadingScreen />;
      default:
        return <LoadingScreen />;
    }
  };

  return (
    <>
      <Head>
        <title>Velocity</title>
      </Head>
      {renderSwitch(requestStatus)}
    </>
  );
};

export default Layout;
