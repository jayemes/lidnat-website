import { NextComponentType } from "next";
import Title from "./Title";
import ContentText from "./ContentText";
const About: NextComponentType = (): JSX.Element => {
  return (
    <>
      <Title content={"f_about"} />
      <ContentText content={"f_about_text"} />
    </>
  );
};

export default About;
