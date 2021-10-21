import { NextComponentType } from "next";

import GetContent from "../../helpers/GetContent";

import Button from "../shared/Button";

import buttonStyles from "../../styles/Button.module.css";
import styles from "../../styles/HeroSection.module.css";

const HeroSection: NextComponentType = (): JSX.Element => {
  const { getContentByLabel } = GetContent();
  return (
    <section className={styles.section}>
      <h1 className={styles.heroHeading}>
        {getContentByLabel("hero_heading")}
      </h1>
      <div className={styles.heroSubheading}>
        {getContentByLabel("hero_subheading")}
      </div>
      <div>
        <Button
          styles={buttonStyles.blueButton}
          content={getContentByLabel("hero_button_1")}
        />
        <Button
          styles={buttonStyles.transparentButton}
          content={getContentByLabel("hero_button_2")}
        />
      </div>
    </section>
  );
};

export default HeroSection;
