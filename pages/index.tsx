import type { NextPage } from "next";
import HeroSection from "../components/home/HeroSection";
import ServicesSection from "../components/home/ServicesSection";
import UsSection from "../components/home/UsSection";
import ShowcaseSection from "../components/home/ShowcaseSection";

const Home: NextPage = (): JSX.Element => {
  return (
    <>
      <HeroSection></HeroSection>
      <UsSection></UsSection>
      <ServicesSection></ServicesSection>
      <ShowcaseSection></ShowcaseSection>
    </>
  );
};

export default Home;
