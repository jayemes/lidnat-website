import { NextComponentType } from "next";

import Button from "../shared/Button";

import buttonStyles from "../../styles/Button.module.css";
import styles from "../../styles/HeroSection.module.css";
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
      <div>
        <Button
          styles={buttonStyles.blueButton}
          content={useGetContentByLabel("hero_button_1")}
        />
        <Button
          styles={buttonStyles.transparentButton}
          content={useGetContentByLabel("hero_button_2")}
        />
      </div>
    </section>
  );
};

export default HeroSection;
