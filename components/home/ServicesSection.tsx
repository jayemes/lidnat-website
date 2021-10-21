import { NextComponentType } from "next";

import Service from "../shared/Service";
import GetContent from "../../helpers/GetContent";

import styles from "../../styles/Section.module.css";
import buttonStyles from "../../styles/Button.module.css";

import service1 from "../../public/assets/service1.jpeg";
import service2 from "../../public/assets/service2.jpeg";

const ServicesSection: NextComponentType = (): JSX.Element => {
  const { getContentByLabel } = GetContent();
  return (
    <section className={styles.sectionDark}>
      <h2 className={styles.headingDark}>
        {getContentByLabel("services_title")}
      </h2>
      <div className={styles.subheadingDark}>
        {getContentByLabel("services_subtitle")}
      </div>

      <div className={styles.wrapper}>
        <Service
          src={service1}
          title={getContentByLabel("service1_heading")}
          text={getContentByLabel("service1_text")}
          buttonContent={getContentByLabel("service1_button")}
          buttonStyles={buttonStyles.transparentButton}
        />
        <Service
          src={service2}
          title={getContentByLabel("service2_heading")}
          text={getContentByLabel("service2_text")}
          buttonContent={getContentByLabel("service2_button")}
          buttonStyles={buttonStyles.transparentButton}
        />
      </div>
    </section>
  );
};

export default ServicesSection;
