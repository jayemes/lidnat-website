import { NextComponentType } from "next";

import styles from "../../styles/Section.module.css";

import GetContent from "../../helpers/GetContent";

import Card from "../shared/Card";

import card1 from "../../public/assets/card1.svg";
import card2 from "../../public/assets/card2.svg";
import card3 from "../../public/assets/card3.svg";

const UsSection: NextComponentType = (): JSX.Element => {
  const { getContentByLabel } = GetContent();
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>{getContentByLabel("section_h_light")}</h2>
      <div className={styles.subheading}>
        {getContentByLabel("section_subh_light")}
      </div>
      <div className={styles.wrapper}>
        <Card
          src={card1}
          title={getContentByLabel("s1_card1_title")}
          text={getContentByLabel("s1_card1_text")}
        />
        <Card
          src={card2}
          title={getContentByLabel("s1_card2_title")}
          text={getContentByLabel("s1_card2_text")}
        />
        <Card
          src={card3}
          title={getContentByLabel("s1_card3_title")}
          text={getContentByLabel("s1_card3_text")}
        />
      </div>
    </section>
  );
};

export default UsSection;
