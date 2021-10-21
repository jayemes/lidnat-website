import { NextComponentType } from "next";
import GetContent from "../../helpers/GetContent";
import styles from "../../styles/Section.module.css";
import Gallery from "./Gallery";

const ShowcaseSection: NextComponentType = (): JSX.Element => {
  const { getContentByLabel } = GetContent();

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>{getContentByLabel("showcase_title")}</h2>
      <div className={styles.subheading}>
        {getContentByLabel("showcase_subtitle")}
      </div>
      <Gallery activeTab={0} />
    </section>
  );
};

export default ShowcaseSection;
