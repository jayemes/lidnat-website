import { NextComponentType } from "next";
import getContent from "../../../../helpers/GetContent";
import styles from "../../../../styles/NavButton.module.css";

const ContactButton: NextComponentType = (): JSX.Element => {
  const { getContentByLabel } = getContent();
  return (
    <div className={styles.navContact}>{getContentByLabel("nav_contact")}</div>
  );
};

export default ContactButton;
