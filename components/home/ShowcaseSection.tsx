import { NextComponentType } from "next";
import styles from "../../styles/Section.module.css";
import Gallery from "./Gallery";
import { useGetContentByLabel } from "../../redux/selectors";

const ShowcaseSection: NextComponentType = (): JSX.Element => {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>
        {useGetContentByLabel("showcase_title")}
      </h2>
      <div className={styles.subheading}>
        {useGetContentByLabel("showcase_subtitle")}
      </div>
      <Gallery />
    </section>
  );
};

export default ShowcaseSection;
