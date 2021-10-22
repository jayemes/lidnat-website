import { NextComponentType } from "next";

import styles from "../../styles/HeroSection.module.scss";
import { useGetContentByLabel } from "../../redux/selectors";

const HeroSection: NextComponentType = (): JSX.Element => {
  return (
    <section className={styles.section}>
      <h1 className={styles.heroHeading}>
        {useGetContentByLabel("hero_heading")}
      </h1>
      <div className={styles.heroSubheading}>
        {useGetContentByLabel("hero_subheading")}
      </div>
    </section>
  );
};

export default HeroSection;
