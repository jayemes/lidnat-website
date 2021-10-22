import { NextComponentType } from "next";
import Title from "./Title";
import ContentList from "./ContentList";
import twitter from "../../../../public/assets/footer/twitter.svg";
import facebook from "../../../../public/assets/footer/facebook.svg";
const Social: NextComponentType = (): JSX.Element => {
  const content = [
    { icon: twitter, label: "f_social_1" },
    { icon: facebook, label: "f_social_2" },
  ];
  return (
    <div>
      <Title content={"f_social"}/>
      <ContentList content={content} />
    </div>
  );
};

export default Social;
