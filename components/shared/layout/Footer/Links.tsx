import { NextComponentType } from "next";
import Title from "./Title";
import ContentList from "./ContentList";

const Links: NextComponentType = (): JSX.Element => {
  const content = [
    { label: "f_link_1" },
    { label: "f_link_2" },
    { label: "f_link_3" },
    { label: "f_link_4" },
  ];
  return (
    <div>
      <Title content={"f_links"}/>
      <ContentList content={content} />
    </div>
  );
};

export default Links;
