import { NextComponentType } from "next";

import styles from "../../styles/Section.module.css";

import Card from "../shared/Card";

import card1 from "../../public/assets/card1.svg";
import card2 from "../../public/assets/card2.svg";
import card3 from "../../public/assets/card3.svg";
import { useGetContentByLabel } from "../../redux/selectors";

const UsSection: NextComponentType = (): JSX.Element => {

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>{useGetContentByLabel("section_h_light")}</h2>
      <div className={styles.subheading}>
        {useGetContentByLabel("section_subh_light")}
      </div>
      <div className={styles.wrapper}>
        <Card
          src={card1}
          title={useGetContentByLabel("s1_card1_title")}
          text={useGetContentByLabel("s1_card1_text")}
        />
        <Card
          src={card2}
          title={useGetContentByLabel("s1_card2_title")}
          text={useGetContentByLabel("s1_card2_text")}
        />
        <Card
          src={card3}
          title={useGetContentByLabel("s1_card3_title")}
          text={useGetContentByLabel("s1_card3_text")}
        />
      </div>
    </section>
  );
};

export default UsSection;
