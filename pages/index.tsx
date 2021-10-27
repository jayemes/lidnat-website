import type { InferGetStaticPropsType } from "next";
import HeroSection from "../components/home/HeroSection";
import ServicesSection from "../components/home/ServicesSection";
import UsSection from "../components/home/UsSection";
import ShowcaseSection from "../components/home/ShowcaseSection";
import Papa from "papaparse";
import { Content } from "../types/interfaces";
import { setData } from "../redux/contentApiSlice";
import { useAppDispatch } from "../redux/hooks";
import { useEffect } from "react";

const Home = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setData(data));
  }, [data, dispatch]);

  return (
    <>
      <HeroSection />
      <UsSection />
      <ServicesSection />
      <ShowcaseSection />
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const res = await fetch(
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vRnvnjZ4R5L5EYGAGVUTmkLJm9Re2RKpIoEHqqMBogNhKR2t0TKgiLU3-pafR1L0nTK78hk1s1baybJ/pub?gid=0&single=true&output=csv"
  );
  const text = await res.text();
  const data = Papa.parse(text, { header: true }).data as Content[];

  return {
    props: {
      data,
    },
  };
};
