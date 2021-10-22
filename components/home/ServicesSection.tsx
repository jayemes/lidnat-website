import { NextComponentType } from "next";

import Service from "../shared/Service";


import styles from "../../styles/Section.module.css";
import buttonStyles from "../../styles/Button.module.css";

import service1 from "../../public/assets/service1.jpeg";
import service2 from "../../public/assets/service2.jpeg";
import { useGetContentByLabel } from "../../redux/selectors";

const ServicesSection: NextComponentType = (): JSX.Element => {

  return (
    <section className={styles.sectionDark}>
      <h2 className={styles.headingDark}>
        {useGetContentByLabel("services_title")}
      </h2>
      <div className={styles.subheadingDark}>
        {useGetContentByLabel("services_subtitle")}
      </div>

      <div className={styles.wrapper}>
        <Service
          src={service1}
          title={useGetContentByLabel("service1_heading")}
          text={useGetContentByLabel("service1_text")}
          buttonContent={useGetContentByLabel("service1_button")}
          buttonStyles={buttonStyles.transparentButton}
        />
        <Service
          src={service2}
          title={useGetContentByLabel("service2_heading")}
          text={useGetContentByLabel("service2_text")}
          buttonContent={useGetContentByLabel("service2_button")}
          buttonStyles={buttonStyles.transparentButton}
        />
      </div>
    </section>
  );
};

export default ServicesSection;
